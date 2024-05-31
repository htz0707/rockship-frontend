import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import getStream from "get-stream";
import styles from "./chatbot.module.scss";
import { Tooltip, Space, Input, Button } from "antd";
import ResetBtn from "../../../public/new-reset.svg";
import { ThreeDots } from "react-loader-spinner";
const { TextArea } = Input;

const ChatComponent = () => {
  const inputTagRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [sentence, setSentence] = useState("");
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter(); // Initialize the router

  const handleReset = () => {
    router.reload();
  };

  const handleSendMessage = async () => {
    setLoading(true);
    const userMessage = inputValue.trim();
    if (userMessage === "") return;

    // Add user message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", content: userMessage },
    ]);

    setSentence(""); // Reset sentence on new query
    setInputValue(""); // Reset input value

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation_id: "123",
        bot_id: "7366946159866593281",
        user: "29032201862555",
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

    // Filter and map the messages to get the content
    const newMessages = parsedMessages
      .filter(
        ({ event, message }) =>
          event === "message" &&
          message.role === "assistant" &&
          message.type === "answer"
      )
      .map(({ message }) => message.content)
      .filter((content) => content !== "");

    // Concatenate all message contents into a single sentence
    const concatenatedSentence = newMessages.join(" ");

    // Add bot response to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "bot", content: concatenatedSentence },
    ]);

    // Update state with the concatenated sentence
    setSentence(concatenatedSentence);
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
              alt=""
            />
          </Tooltip>
        </div>
        <>
          <div className={styles["chat-window"]} ref={containerRef}>
            <div className={styles["description"]}>
              We will propose you a solution to build your app.
            </div>
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={message.role === "user" ? styles["user-message"] : styles["bot-message"]}
                // style={{
                //   textAlign: message.role === "user" ? "right" : "left",
                // }}
              >
                <p>
                  {/* <strong>{message.role === "user" ? "You: " : "Bot: "}</strong> */}
                  {message.content}
                </p>
              </div>
            ))}
            {/* {loading && !!newMessage.length && (
              <div className={styles["user-message"]}>
                <p>{newMessage}</p>
              </div>
            )} */}
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
          {/* <div>
            <div
              ref={containerRef}
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: message.role === "user" ? "right" : "left",
                  }}
                >
                  <p>
                    <strong>
                      {message.role === "user" ? "You: " : "Bot: "}
                    </strong>
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
          <Space.Compact className={styles["button-group"]}>
            <TextArea
              autoSize
              className={styles["custom-input"]}
              disabled={loading}
              value={inputValue}
              // maxLength={150}
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
              onClick={handleSendMessage}
              className={styles["send-button"] + " " + styles["send-btn"]}
            ></Button>
          </Space.Compact>
          <p className={styles["privacy"]}>
            <u>Privacy Protection</u>
          </p>
        </>
      </div>
    </div>
  );
};

export default ChatComponent;
