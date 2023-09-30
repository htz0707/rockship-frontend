import * as React from "react";
import { Modal, Button, Input, Form, Spin } from "antd";
import styles from "./form.module.scss";

const FormModal = ({ errors, setErrors, open, setOpen }) => {
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    setErrors(false);
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
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
    } catch (error) {
      setErrors(true);
      console.error("Error:", error);
    }
    setLoading(false);
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
    >
      {step === 0 ? (
        <div className={styles["form-modal"]}>
          <h2>CONTACT WITH US</h2>
          <Form onFinish={onFinish} autoComplete="off">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input placeholder="Work email" />
            </Form.Item>

            <Button htmlType="submit">{loading ? <Spin /> : "Submit"}</Button>
            {errors && (
              <p className={styles["errors-msg"]}>Something went wrong!</p>
            )}
          </Form>
        </div>
      ) : (
        <div className={styles["confirm-modal"]}>
          <img src="/verify-icon.svg" alt="verify" />
          <h3>THANK YOU!</h3>
          <div>
            <p>Thank you for your inquiry! We will get back to you soon</p>
          </div>
          <Button
            onClick={() => {
              setOpen(false);
              setStep(0);
            }}
          >
            Done!
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default FormModal;
