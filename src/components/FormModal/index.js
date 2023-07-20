import * as React from "react";
import { Modal, Button, Input } from "antd";
import styles from "./form.module.scss";

const FormModal = ({ open, setOpen }) => {
  const [step, setStep] = React.useState(0);

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
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Work email" />
          <Button onClick={() => setStep(1)}>Submit</Button>
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
