import React, { useRef } from "react";
import Image from "next/image";
import { Layout, Divider, Row, Col, Button } from "antd";
import { Input } from "antd";
import styles from "./footer.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const { Footer } = Layout;

const CustomForm = ({ status, message, onValidated }) => {
  const emailInput = useRef(null);
  const submit = () => {
    console.log(emailInput);
    emailInput &&
      emailInput.current.input.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: emailInput.current.input.value,
      });
  };

  return (
    <Col span={8}>
      <p className={styles["title"]}>Newsletter</p>
      <Row className={styles["button-group"]}>
        <Col span={12}>
          <Input
            className={styles["your_email"]}
            type="email"
            ref={emailInput}
            placeholder="Your email"
          />
        </Col>
        <Col span={12}>
          <Button onClick={submit}>SUBSCRIBE</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <br />
          {status === "sending" && (
            <div style={{ color: "white" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "white" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </Col>
      </Row>
    </Col>
  );
};

const CustomFooter = () => {
  return (
    <Footer className={styles["custom-footer"]}>
      <Row className={styles['row']}>
        <Col xs={24} md={8}>
          <Image
            src={"/rockship.svg"}
            alt="rockship"
            width={196}
            height={50}
            style={{ marginBottom: 20 }}
          />
          <a href="mailto:ngoc@rockship.co">
            <div className={styles["group-contact"]}>
              <img src="/mail.svg" alt="mail" />
              <div>ngoc@rockship.co</div>
            </div>
          </a>
          <a href="https://wa.me/6584298483">
            <div className={styles["group-contact"]}>
              <img src="/phone.svg" alt="phone" />
              <div>+65 8429 8483</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/rockship/">
            <div className={styles["group-contact"]}>
              <img src="/linkedin-3.svg" alt="linkedin" />
              <div id="contact"> Rockship</div>
            </div>
          </a>
        </Col>
        <Col xs={24} md={8}>
          <Row>
            <Col span={12}>
              <p className={styles["title"]}>Links</p>
              <p className={styles["content"]}>Home</p>
              <p className={styles["content"]}>About Us</p>
              <p className={styles["content"]}>Our Solutions</p>
              <p className={styles["content"]}>Case Studies</p>
            </Col>
            <Col span={12}>
              <p className={styles["title"]}>Legal</p>
              <p className={styles["content"]}>Terms Of Use</p>
              <p className={styles["content"]}>Privacy Policy</p>
              <p className={styles["content"]}>Cookie Policy</p>
            </Col>
          </Row>
        </Col>
        <MailchimpSubscribe
          url="https://rockship.us21.list-manage.com/subscribe/post?u=1fea45c7d633986e08d82ba89&amp;id=0fe9ffa4db&amp;f_id=004358e1f0"
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </Row>
      <Divider className={styles["bg-white"]} />
      <p className={styles["copy-right"]}>
        © Copyright 2023 Rockship.co. All rights reserved
      </p>
    </Footer>
  );
};

export default CustomFooter;
