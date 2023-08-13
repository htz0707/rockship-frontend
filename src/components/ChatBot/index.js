import * as React from "react";
import Image from "next/image";
import { Input, Button, Space, Modal } from "antd";
import styles from "./chatbot.module.scss";
import TypewriterEffect from "../TypewriterEffect";

const FEATURES = [
  "Social Media App",
  "Ecommerce App",
  "EdTech Platform",
  "Crypto Currency Exchange",
];

const ROLES = ["bot", "user"];

const BOT_QUESTIONS = [
  "Hi! I'm a chatbot from Rockship. What type of app do you want to make?",
  "Who are your target users?",
  "What is your unique selling points?",
  "To continue, please enter your email.",
];

const VALIDATE_MESSAGES = ["Please enter a valid email."];

const Chatbot = () => {
  const containerRef = React.useRef();

  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [featureList, setFeatureList] = React.useState([]);
  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleSendMessage = (role, value) => {
    setMessages((prevState) => [
      ...prevState,
      {
        sender: role,
        content: value,
      },
    ]);
    setInputValue("");
  };

  const handleSelectFeature = (message) => {
    setSelectedFeature(message);
    setDisabled(false);
    handleSendMessage(ROLES[1], message);
    handleSendMessage(ROLES[0], BOT_QUESTIONS[1]);
  };

  const handleSendBothMessage = (message) => {
    const lastBotMessage = messages.reduce((acc, message) => {
      if (message.sender === "bot") {
        return message;
      }
      return acc;
    }, null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = emailRegex.test(message);

    handleSendMessage(ROLES[1], message);

    switch (lastBotMessage.content) {
      case BOT_QUESTIONS[1]:
        handleSendMessage(ROLES[0], BOT_QUESTIONS[2]);
        break;
      case BOT_QUESTIONS[2]:
        handleSendMessage(ROLES[0], BOT_QUESTIONS[3]);
        break;
      case BOT_QUESTIONS[3]:
      case VALIDATE_MESSAGES[0]:
        isValidEmail
          ? handleSendMessage(ROLES[0], "Valid email")
          : handleSendMessage(ROLES[0], VALIDATE_MESSAGES[0]);
        break;
    }
  };

  const handleReset = () => {
    setSelectedFeature(null);
    setMessages([]);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setFeatureList(FEATURES);
    }, 3200);
  }, []);

  React.useEffect(() => {
    const scrollToBottom = () => {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    };
    scrollToBottom();
  }, [messages]);

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
      <div className={styles["chat-window"]} ref={containerRef}>
        <div className={styles["description"]}>
          Share with Rockship AI your app idea and we will propose you a solution to build your app.
        </div>
        <div className={styles["bot-message"]}>
          <TypewriterEffect text={BOT_QUESTIONS[0]} speed={40} />
        </div>
        {!selectedFeature &&
          featureList.map((message, index) => (
            <div key={index} className={styles["bubble-message"]}>
              <TypewriterEffect
                handleSelect={() => handleSelectFeature(message)}
                text={message}
                speed={40}
              />
            </div>
          ))}
        {selectedFeature &&
          messages.map((message, index) => (
            <div
              key={index}
              className={
                styles[
                  message.sender === "bot" ? "bot-message" : "user-message"
                ]
              }
            >
              {message.sender === "bot" ? (
                message.content !== "Valid email" ? (
                  <TypewriterEffect text={message.content} speed={40} />
                ) : (
                  <>
                    <p>
                      If your email is:{" "}
                      <b>
                        {messages.reduce((acc, message) => {
                          if (message.sender === "user") {
                            return message.content;
                          }
                          return acc;
                        }, null)}
                      </b>
                      <br />
                      <>
                        <span onClick={showModal}>Click here</span> to build
                        your product
                      </>
                    </p>
                  </>
                )
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          ))}
      </div>
      <Space.Compact className={styles["button-group"]}>
        <Input
          className={styles["custom-input"]}
          disabled={disabled}
          value={inputValue}
          maxLength={150}
          onPressEnter={(event) => {
            if (event.key === "Enter" && inputValue) {
              handleSendBothMessage(inputValue);
            }
          }}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Send your demand, no more than 150 words..."
        />
        {/* <Button
          onClick={() => handleReset()}
          className={styles["send-button"] + " " + styles["attach-btn"]}
        ></Button> */}
        <Button
          disabled={!inputValue}
          onClick={() => handleSendBothMessage(inputValue)}
          className={styles["send-button"] + " " + styles["send-btn"]}
        ></Button>
      </Space.Compact>
      <p className={styles["privacy"]}>
        <u>Privacy Protection</u>
      </p>
      <Modal
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
      </Modal>
    </div>
  );
};

export default Chatbot;
