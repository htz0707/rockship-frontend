import * as React from "react";
import { Modal, Button, Input, Form } from "antd";
import styles from "./form.module.scss";

const FormModal = ({ open, setOpen }) => {
  const [step, setStep] = React.useState(0);

  const onFinish = async (values) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.message !== 'Failed to send email') setStep(1);
    } catch (error) {
      console.error('Error:', error);
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
    >
      {step === 0 ?
        <div className={styles['form-modal']}>
          <h2>CONTACT WITH US</h2>
          <Form
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',

                },
              ]}
            >
              <Input
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: "email",
                  message: 'Please input a valid email!'
                }
              ]}
            >
              <Input placeholder="Work email" />
            </Form.Item>

            <Button htmlType="submit">Submit</Button>
          </Form>
        </div> :
        <div className={styles["confirm-modal"]}>
          <img src="/verify-icon.svg" alt="verify" />
          <h3>THANK YOU!</h3>
          <div>
            <p>
              Thank you for your inquiry! We will get back to you soon
            </p>
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
      }
    </Modal>
  )
};

export default FormModal;
