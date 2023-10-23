"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./../../chatbot.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { analytics } from "@/segment/segment";

export default function Conversation({
  loadHistory,
  appTypeList,
  handleNewSession,
  loading,
  endMessage,
  setStep,
  handleReset,
  projectId,
  errorMessage,
  isError,
  setIsError,
  restarted,
  limit,
}) {
  const conversationElements = [];
  const containerRef = useRef();

  if (loadHistory?.response?.[0]?.message) {
    conversationElements.push(
      <div className={styles["bot-message"]} key={"response-0"}>
        {<p>{loadHistory?.response?.[0]?.message}</p>}
      </div>
    );
  }

  if (
    loadHistory?.response &&
    Object.keys(loadHistory?.response).length === 1
  ) {
    conversationElements.push(
      appTypeList.length > 0 &&
        appTypeList.map((item, index) => (
          <div key={index} className={styles["bubble-message"]}>
            <p
              onClick={() => {
                handleNewSession(item.id);
                analytics.track("industry-chatbot");
                analytics.track(item.name);
              }}
            >
              {item.name}
            </p>
          </div>
        ))
    );
  }

  for (const key in loadHistory.response) {
    const request = loadHistory.request[key];
    const response = loadHistory.response[key];

    const responseElement = key > 0 && (
      <div className={styles["bot-message"]} key={`response-${key}`}>
        <p>{response?.message}</p>
      </div>
    );

    const requestElement = key > 0 && (
      <div className={styles["user-message"]} key={`request-${key}`}>
        <p>{request?.message}</p>
      </div>
    );

    conversationElements.push(requestElement, responseElement);
  }

  const renderError = () => {
    return (
      <div className={styles["error-wrap"]}>
        <img src="/404_error.png" alt="" />
        <div className={styles["error-note"]}>
          Something went wrong. Please try again
        </div>
        <div
          className={styles["retry-btn-wrap"]}
          onClick={() => setIsError(false)}
        >
          <img src="/blackReload.png" alt="" />
          <div
            className={styles["tap-to-retry"]}
            onClick={() => {
              handleReset();
            }}
          >
            Tap to retry
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const scrollToBottom = () => {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    };
    scrollToBottom();
  }, [loadHistory, loading]);

  return (
    <>
      <div className={styles["chat-window"]} ref={containerRef}>
        <div className={styles["description"]}>
          {!limit ? (
            <>
              We will propose you a solution to build your app. You only have
              <span> 3 times </span>to test per day.
            </>
          ) : (
            <>
              You have<span> 0 times left </span> to day. Please comeback next
              time.
            </>
          )}
        </div>
        {isError ? renderError() : conversationElements}
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ThreeDots color={"#0094ff"} />
          </div>
        )}
        {!restarted && errorMessage && !projectId && (
          <div className={styles["bot-message"]}>
            <p>
              I apologize, but it appears there is an issue with processing your
              inquiry. Our team has been alerted to investigate and will notify
              you once the problem has been resolved.
            </p>
          </div>
        )}
        {!restarted && endMessage && projectId && (
          <div className={styles["bot-message"]}>
            <p>
              Your quotation is ready, please{" "}
              <span
                style={{ color: "#0094ff", cursor: "pointer" }}
                onClick={() => {
                  localStorage.setItem("canReset", true);
                  localStorage.removeItem("canRefresh");
                  setStep(1);
                  analytics.track("quotation-chatbot");
                }}
              >
                Click Here
              </span>
            </p>
          </div>
        )}
        {!restarted && endMessage && localStorage.getItem("canReset") && (
          <div className={styles["refresh-box"]} onClick={handleReset}>
            <div className={styles["refresh-button"]}>
              <img src="/reload.svg" alt="reload" height={24} /> Restart
            </div>
          </div>
        )}
      </div>
    </>
  );
}
