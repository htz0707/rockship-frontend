import React, { useState } from "react";
import { Modal, Button, Checkbox, Spin, Input, Form } from "antd";
const { TextArea } = Input;
import styles from "./feedback.module.scss";

const Feedback = ({ errors, setErrors, setStepChatbot, handleReset, open, setOpen }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const data = [
    {
      id: 0,
      value: "The feature list does not meet my expectations",
      selected: false,
    },
    {
      id: 1,
      value: "The pricing and timeline are unclear ",
      selected: false,
    },
    {
      id: 2,
      value: "I can’t customize and incorporate new features",
      selected: false,
    },
    {
      id: 3,
      value: "Others",
      selected: false,
    },
  ];
  const [feedback, setFeedback] = useState([...data]);

  const handleUpdateFeedback = (id) => {
    const updatedFeedback = [...feedback];
    const itemIndex = updatedFeedback.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      updatedFeedback[itemIndex].selected =
        !updatedFeedback[itemIndex].selected;

      setFeedback(updatedFeedback);
    }
  };

  const onFinish = async (values) => {
    setErrors(false);
    setLoading(true);
    values.feedback = [];
    feedback.forEach((item) => {
      if (item.selected) {
        values.feedback.push(item.value);
      }
    });
    values.user_id = localStorage.getItem("user_id");
    values.session_id = localStorage.getItem("session_id");

    try {
      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.message !== "Failed to send email") {
        setErrors(false);
        setStep(1);
      } else setErrors(true);
      setFeedback([...data]);
    } catch (error) {
      setErrors(true);
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const validateMinLength = (rule, value, callback) => {
    if (value && value.length < 15) {
      callback("Please enter a minimum of 15 characters");
    } else {
      callback(); // Validation passed
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        setOpen(false);
        setStep(0);
      }}
      footer={null}
      width={480}
      centered
      closable={false}
    >
      {step === 0 ? (
        <div className={styles["form-modal"]}>
          <h2>What aspects are you dissatisfied with?</h2>
          <Form onFinish={onFinish} autoComplete="off">
            {feedback.map((item, index) => (
              <div key={index} className={styles["checkbox-group"]}>
                <Checkbox
                  checked={item.selected}
                  onClick={() => handleUpdateFeedback(item.id)}
                  className={
                    item.id === 3 && item.selected && styles["custom-box"]
                  }
                />
                <div className={styles["others-box"]}>
                  <p className={styles["checkbox-text"]}>{item.value}</p>
                  {item.id === 3 && item.selected && (
                    <Form.Item
                      name="others"
                      rules={[
                        {
                          required: item.id === 3 && item.selected,
                          message: "Please enter a minimum of 15 characters",
                        },
                        { validator: validateMinLength },
                      ]}
                    >
                      <TextArea
                        placeholder="tell us more..."
                        minLength={15}
                        rows={3}
                      />
                    </Form.Item>
                  )}
                </div>
              </div>
            ))}
            <div className={styles["btn-box"]}>
              <Button
                disabled={feedback.every((item) => !item.selected)}
                htmlType="submit"
              >
                {loading ? <Spin /> : "Submit"}
              </Button>
            </div>
            {errors && (
              <p className={styles["errors-msg"]}>Something went wrong!</p>
            )}
          </Form>
        </div>
      ) : (
        <div className={styles["confirm-modal"]}>
          <img src="/verify-icon.svg" alt="verify" />
          <h3>Report was sent</h3>
          <div>
            <p>
              Thank you for taking time to help us enhance the chatbot. If you
              would like to further discuss app development, please feel free to
              talk with us
            </p>
          </div>
          <div className={styles["btn-box"]}>
            <Button
              className={styles["left-btn"]}
              onClick={() => {
                setErrors(false);
                setOpen(false);
                setStep(0);
                setFeedback([...data]);
              }}
            >
              Free talk with experts
            </Button>
            <Button
              className={styles["right-btn"]}
              onClick={() => {
                setErrors(false);
                handleReset();
                setStepChatbot(0);
                setOpen(false);
                setStep(0);
              }}
            >
              Restart Chatbot
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Feedback;
