import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Input, Button, Space, Modal, Select } from "antd";
import styles from "./chatbot.module.scss";

import {
  newSession,
  chatHistory,
  responseChat,
  endSession,
  sendError,
} from "@/pages/api/ChatbotAPI";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Conversation from "./BuildFeatureByChat/Conversation";
import ListFeature from "./BuildFeatureByChat/ListFeature";
import Timeline from "./BuildFeatureByChat/Timeline";
import { analytics } from "@/segment/segment";

const Chatbot = () => {
  const inputTagRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  // const [open, setOpen] = useState(false);
  const [appTypeList, setAppTypeList] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loadHistory, setLoadHistory] = useState({});
  const [loading, setLoading] = useState(false);
  const [endMessage, setEndMessage] = useState(false);
  const [step, setStep] = useState(0);
  const [projectId, setProjectId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isError, setIsError] = useState(false);
  const [restarted, setRestarted] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  // const handleCancel = () => {
  //   setOpen(false);
  // };

  const router = useRouter();
  const { user_id, session_id } = router.query;

  useEffect(() => {
    if (!user_id || !session_id) handleSetUUID();
    else {
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("session_id", session_id);
    }
    handleLoadHistory();
  }, [user_id, session_id]);

  useEffect(() => {
    if (inputTagRef.current) {
      inputTagRef.current.focus();
    }
  }, [inputTagRef.current]);

  const handleSendMessage = () => {
    handleResponseChat();
    setInputValue("");
  };

  const handleSetUUID = () => {
    if (!localStorage.getItem("user_id")) {
      localStorage.setItem("user_id", uuidv4());
    }
    if (!localStorage.getItem("session_id")) {
      localStorage.setItem("session_id", uuidv4());
    }
  };

  const handleNewSession = async (app_type_id) => {
    setLoading(true);
    setDisabled(false);
    try {
      await newSession({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
        app_type_id: app_type_id,
      });
      await handleLoadHistory();
    } catch (error) {
      sendError({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleLoadHistory = async () => {
    setLoading(true);
    try {
      const res = await chatHistory({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });

      if (Object.keys(res.chat_history.response).length > 1) {
        setDisabled(false);
      }
      setAppTypeList(res.app_types);
      setLoadHistory(res.chat_history);
      for (const key in res.chat_history.response) {
        if (
          res.chat_history.response[key].message.includes(
            "all the necessary information"
          ) ||
          res.chat_history.response[key].message.includes(
            "Thank you for providing your email"
          )
        ) {
          setRestarted(false);
          await handleEndSession();
          localStorage.removeItem("canRefresh");
          setDisabled(true);
          setEndMessage(true);
        } else {
          localStorage.setItem("canRefresh", true);
        }
      }
      setLoading(false);
    } catch (error) {
      sendError({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleResponseChat = async () => {
    const startTime = new Date();
    setLoading(true);
    const timeOut = setTimeout(() => {
      setLoading(false);
      setIsError(true);
      setRestarted(true);
    }, 45000);
    try {
      await responseChat({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
        request: inputValue,
      });
      clearTimeout(timeOut)
      await handleLoadHistory();
      setLoading(false);
      const endTime = new Date();
      if (endTime - startTime > 10000) {
        analytics.track("response-time-chatbot", {
          duration: endTime - startTime,
        });
      }
    } catch (error) {
      sendError({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleEndSession = async () => {
    const startTime = new Date();
    setLoading(true);
    try {
      const res = await endSession({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });
      setProjectId(res.project_estimation_id);
      setErrorMessage(false);
      setLoading(false);
      const endTime = new Date();
      if (endTime - startTime > 10000) {
        analytics.track("end-session-chatbot", {
          duration: endTime - startTime,
        });
      }
    } catch (error) {
      sendError({
        user_id: localStorage.getItem("user_id"),
        session_id: localStorage.getItem("session_id"),
      });
      setErrorMessage(true);
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("session_id");
    localStorage.removeItem("canReset");
    localStorage.removeItem("canRefresh");
    localStorage.removeItem("mobile");
    localStorage.removeItem("webapp");
    localStorage.removeItem("totalCost");
    localStorage.removeItem("totalDay");
    localStorage.removeItem("numberOfFeatures");
    localStorage.removeItem("projectEstimation");
    setErrorMessage(false);
    setEndMessage(false);
    router.push("/");
    handleSetUUID();
    handleLoadHistory();
  };

  useEffect(() => {
    if (localStorage.getItem("canRefresh")) {
      handleReset();
    }
  }, []);

  return (
    <div className={styles["chatbot"]}>
      <div className={styles["chat-header"]}>
        <Image
          src={"/rockship_black.svg"}
          alt="rockship_black"
          height={24}
          width={24}
        />
        <p>SHARE YOUR AWESOME IDEA</p>
      </div>
      {step === 0 && (
        <>
          <Conversation
            loadHistory={loadHistory}
            appTypeList={appTypeList}
            handleNewSession={handleNewSession}
            loading={loading}
            endMessage={endMessage}
            setStep={setStep}
            handleReset={handleReset}
            projectId={projectId}
            errorMessage={errorMessage}
            isError={isError}
            setIsError={setIsError}
            restarted={restarted}
          />
          <Space.Compact className={styles["button-group"]}>
            <Input
              className={styles["custom-input"]}
              disabled={disabled || loading}
              value={inputValue}
              maxLength={150}
              onPressEnter={(event) => {
                if (event.key === "Enter" && inputValue) {
                  handleSendMessage();
                }
              }}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Send your demand, no more than 150 words..."
              ref={inputTagRef}
            />
            <Button
              disabled={!inputValue || loading}
              onClick={() => handleSendMessage()}
              className={styles["send-button"] + " " + styles["send-btn"]}
            ></Button>
          </Space.Compact>
          <p className={styles["privacy"]}>
            <u>Privacy Protection</u>
          </p>
        </>
      )}
      {step === 1 && (
        <ListFeature
          handleReset={handleReset}
          projectId={projectId}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <Timeline
          allData={JSON.parse(localStorage.getItem("projectEstimation"))}
          setStep={setStep}
        />
      )}

      {/* <Modal
        open={open}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className={styles["confirm-box"]}>
          <img src="/mail_ty.png" alt="mail_ty" />
          <p>
            Thank you for your inquiry! We will get back to you about the
            timeline and quotation within 3 days.
          </p>
          <Button className={styles["confirm-button"]} onClick={handleCancel}>
            Done!
          </Button>
        </div>
      </Modal> */}
    </div>
  );
};

export default Chatbot;
