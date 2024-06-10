import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import getStream from "get-stream";
import styles from "./chatbot.module.scss";
import { Tooltip, Space, Input, Button } from "antd";
import ResetBtn from "../../../public/new-reset.svg";
import { ThreeDots } from "react-loader-spinner";
const { TextArea } = Input;

const generateConversationId = () => {
  return Math.floor(100 + Math.random() * 900).toString(); // Generate a 3-digit number
};

const generateUserId = () => {
  return Math.floor(1e13 + Math.random() * 9e13).toString(); // Generate a 14-digit number
};

const randomUserId = generateUserId();
const randomConversationId = generateConversationId();

const ChatComponent = () => {
  const inputTagRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "bot",
      content: `
        Good day! I am a consultant representing Rockship, dedicated to
        simplifying your journey by providing tailored solutions. My expertise
        lies in understanding your unique needs and guiding you towards the
        most suitable options. Please feel free to share your requirements,
        and I will try my best to assist you.
      `,
      suggestions: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter(); // Initialize the router

  const handleReset = () => {
    router.reload();
  };

  const handleSendMessage = async (message = null) => {
    setLoading(true);
    const userMessage = message || inputValue.trim();
    if (userMessage === "") return;

    // Add user message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", content: userMessage },
    ]);

    setInputValue(""); // Reset input value

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation_id: randomConversationId,
        bot_id: "7374721154529640466",
        user: randomUserId,
        query: userMessage,
      }),
    });

    // Use getStream to handle the response stream
    const responseText = await getStream(response.body);
    setLoading(false);

    // Split the response text into individual messages
    const messages = responseText.split("\n").filter(Boolean);
    const parsedMessages = messages
      .map((msg) => {
        try {
          const trimmedMsg = msg.startsWith("data:")
            ? msg.substring(5).trim()
            : msg.trim();
          return JSON.parse(trimmedMsg);
        } catch (error) {
          return null;
        }
      })
      .filter(Boolean);

    // Filter and map the messages to get the content and suggestions
    const newMessages = parsedMessages
      .filter(
        ({ event, message }) =>
          event === "message" &&
          message.role === "assistant"
      )
      .map(({ message }) => ({
        content: message.content,
        type: message.type,
      }));

    // Process the bot messages and suggestions
    const botMessages = newMessages.filter(msg => msg.type === "answer").map(msg => msg.content);
    const suggestions = newMessages.filter(msg => msg.type === "follow_up").map(msg => msg.content);

    const concatenatedSentence = botMessages.join("");

    let formattedText = concatenatedSentence.replace(/\s+([:.,!?])/g, "$1");

    // Replace **text** with <b>text</b>
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    formattedText = formattedText.replace(/\n/g, '<br />');

    // Add bot response to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        role: "bot",
        content: formattedText,
        suggestions,
      },
    ]);
  };

  useEffect(() => {
    // Scroll to bottom on new message
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!loading && inputTagRef.current) {
      inputTagRef.current.focus();
    }
  }, [loading]);

  return (
    <div>
      <div className={styles["chatbot"]}>
        <div className={styles["chat-header"]}>
          <div className={styles["left-content"]}>
            <Image
              src={"/rockship_black.svg"}
              alt="rockship_black"
              height={24}
              width={24}
            />
            <p>SHARE YOUR AWESOME IDEA</p>
          </div>
          <Tooltip
            color={"white"}
            title={
              <div className={styles["custom-tip-text"]}>
                Click this button to restart a conversation
              </div>
            }
          >
            <Image
              onClick={() => handleReset()}
              className={styles["custom-tip"]}
              height={40}
              width={40}
              src={ResetBtn}
              alt="Reset Button"
            />
          </Tooltip>
        </div>
        <div className={styles["chat-window"]} ref={containerRef}>
          <div className={styles["description"]}>
            We will propose you a solution to build your app.
          </div>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? styles["user-message"]
                  : styles["bot-message"]
              }
            >
              {message.role === "user" ? (
                <p>{message.content}</p>
              ) : (
                <div>
                  <p dangerouslySetInnerHTML={{ __html: message.content }} />
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className={styles["suggestions"]}>
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          className={styles["suggestion-button"]}
                          onClick={() => handleSendMessage(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
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
        </div>
        <Space.Compact className={styles["button-group"]}>
          <TextArea
            autoSize
            className={styles["custom-input"]}
            disabled={loading}
            value={inputValue}
            onPressEnter={(event) => {
              if (event.key === "Enter" && inputValue.length > 0) {
                handleSendMessage();
              }
            }}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Send your demand, no more than 150 characters..."
            ref={inputTagRef}
          />
          <Button
            disabled={loading}
            onClick={() => handleSendMessage()}
            className={styles["send-button"] + " " + styles["send-btn"]}
          ></Button>
        </Space.Compact>
        <p className={styles["privacy"]}>
          <u>Privacy Protection</u>
        </p>
      </div>
    </div>
  );
};

export default ChatComponent;
