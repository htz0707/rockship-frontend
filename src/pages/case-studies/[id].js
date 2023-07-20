"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Input, Form, Row, Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/case-studies-detail.module.scss";

import useWindowSize from "@/hooks/useWindowSize";
import { useSelector } from "@/context";
// import { setItemCaseStudy } from "@/context/actions/case-studies";

const HighLightItem = ({ src, name, color }) => {
  return (
    <div className={styles["highlight-item"]}>
      <div
        className={styles["highlight-item-image"]}
        style={{ backgroundColor: color }}
      >
        <img src={src} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

const DescriptionItem = ({ title, data = [] }) => {
  return (
    <div className={styles["description-item"]}>
      <h3>{title}</h3>
      {data?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

const MenuItem = ({ title, lsValue, content }) => {
  return (
    <div className={styles["menu-item"]}>
      <h3>{title}</h3>
      <div className={styles["divider"]} />
      {content && <p>{content}</p>}
      {lsValue?.length && (
        <ul>
          {lsValue?.map((item, index) => {
            return <li key={index}>{item?.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

const BannerItem = ({ src, name }) => {
  return (
    <div className={styles["banner-content-item"]}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const CaseStudiesDetail = () => {
  const router = useRouter();
  const size = useWindowSize();

  const itemCaseStudy1 = useSelector(
    (state) => state?.caseStudies?.itemCaseStudy
  );
  const [itemCaseStudy, setItemCaseStudy] = useState(itemCaseStudy1);
  const [isShowContact, setIsShowContact] = useState(false);
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const formRef = useRef(null);
  const [isBack, setIsBack] = useState(false);

  const handleOnClickBack = () => {
    router.back();
  };

  const handleOnClickSubmitContact = (values) => {
    setIsShowContact(false);
    setIsShowSuccess(true);
    if (values) {
      setFormData(values);
      formRef.current.resetFields();
    }
  };

  const handleOnClickOke = () => {
    setIsShowSuccess(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (size.width <= 740) {
        setIsBack(true);
      } else {
        setIsBack(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  useEffect(() => {
    const dataTemp = JSON.parse(localStorage.getItem("itemDetail"));
    setItemCaseStudy(dataTemp);
  }, []);

  return (
    <CustomLayout link={"studies"} isBack={isBack}>
      <div className={styles["case-studies-detail"]} id="case-studies-detail">
        <Button className={styles["button-back"]} onClick={handleOnClickBack}>
          <img src={"/arrow-left-gray.svg"} alt="back" />
          <p>Back to list</p>
        </Button>
        <Row>
          <div className={styles["banner"]}>
            <Image
              src={itemCaseStudy?.src || "/banner-case-studies.png"}
              alt="banner"
              quality={80}
              priority
              fill={true}
              
            />
            <div className={styles["banner-content"]}>
              <h3>{itemCaseStudy?.title}</h3>
              <div className={styles["banner-content-list"]}>
                <BannerItem src={"/work.svg"} name={itemCaseStudy?.company} />
                <BannerItem src={"/calendar.svg"} name={itemCaseStudy?.duration} />
                <BannerItem src={"/danger-circle.svg"} name={itemCaseStudy?.program} />
              </div>
            </div>
          </div>
        </Row>
        <Row gutter={16} className={styles["row-mobile"]}>
          <Col xs={24} md={0}>
            <div className={styles["information"]}>
              <div className={styles["row"]}>
                <h4>Market: </h4>
                <p>{itemCaseStudy?.market}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Industry: </h4>
                <p>{itemCaseStudy?.industry}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Features: </h4>
                <p>{itemCaseStudy?.features}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Company size: </h4>
                <p>{itemCaseStudy?.companySize}</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={18}>
            <div className={styles["highlight"]}>
              {itemCaseStudy?.highlights?.map((item) => {
                return (
                  <HighLightItem
                    key={item.id}
                    src={item.src}
                    name={item.name}
                    color={item.color}
                  />
                );
              })}
            </div>
            <div className={styles["description"]}>
              <DescriptionItem
                title={"Challenge"}
                data={itemCaseStudy?.challenges}
              />
              <DescriptionItem
                title={"Solution"}
                data={itemCaseStudy?.solutions}
              />
            </div>
            <div className={styles["menu-list"]}>
              {itemCaseStudy?.mains?.map((item, index) => {
                if (item.content && !item.src) {
                  return (
                    <div className={styles["menu"]} key={index}>
                      <p>{item.content}</p>
                    </div>
                  );
                }
                return (
                  <div className={styles["menu"]} key={index}>
                    <MenuItem
                      title={item?.title}
                      lsValue={item?.data}
                      content={item?.content}
                    />
                    <img src={item?.src} alt={"menu"} />
                  </div>
                );
              })}
            </div>

            <div className={styles["review"]}>
              <h3>Reviews from our customers</h3>
              {itemCaseStudy?.reviews?.map((item) => {
                return (
                  <div className={styles["card-review"]} key={item.id}>
                    <div className={styles["card-left"]}>
                      <img
                        src={"/ceo.png"}
                        alt="menu"
                      />
                      <p>
                        <span>{item.title}</span> {item.name}
                      </p>
                    </div>
                    <div className={styles["divider"]}/>
                    <div className={styles["card-right"]}>
                      {item?.data?.map((item1, index) => {
                        return <p key={index}>{item1}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={0} md={6}>
            <div className={styles["card"]}>
              <div className={styles["row"]}>
                <h4>Market: </h4>
                <p>{itemCaseStudy?.market}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Industry: </h4>
                <p>{itemCaseStudy?.industry}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Features: </h4>
                <p>{itemCaseStudy?.features}</p>
              </div>
              <div className={styles["row"]}>
                <h4>Company size: </h4>
                <p>{itemCaseStudy?.companySize}</p>
              </div>

              <div className={styles["hashtag"]}>
                {itemCaseStudy?.hashtags?.map((item) => {
                  return (
                    <div key={item.id} className={styles["hashtag-item"]}>
                      <p>{`#${item.name}`}</p>
                    </div>
                  );
                })}
              </div>
              <Button
                className={styles["build"]}
                onClick={() => setIsShowContact(true)}
              >
                build a similar
              </Button>
            </div>
          </Col>
          <div className={styles["build-mobile"]}>
            <Button
              className={styles["button"]}
              onClick={() => setIsShowContact(true)}
            >
              build a similar
            </Button>
          </div>
        </Row>
      </div>
      <Modal
        closable={false}
        maskClosable
        centered
        open={isShowContact}
        onCancel={() => setIsShowContact(false)}
        getContainer={() => document.getElementById("case-studies-detail")}
        footer={() => null}
      >
        <div className={styles["contact-us"]}>
          <h3>CONTACT WITH US</h3>
          <Form ref={formRef} onFinish={handleOnClickSubmitContact}>
            <Form.Item name="name">
              <Input placeholder="Your name" value={formData?.name} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your work email!",
                },
              ]}
            >
              <Input placeholder="Work email" value={formData?.email} />
            </Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form>
        </div>
      </Modal>
      <Modal
        closable={false}
        centered
        maskClosable={false}
        open={isShowSuccess}
        onCancel={() => setIsShowSuccess(false)}
        getContainer={() => document.getElementById("case-studies-detail")}
        footer={() => null}
      >
        <div className={styles["modal-body-success"]}>
          <img src={"/verify.svg"} alt="verify" />
          <h3>thank you!</h3>
          <p>Thank you for your inquiry! We will get back to you soon</p>
          <Button onClick={handleOnClickOke}>Done!</Button>
        </div>
      </Modal>
    </CustomLayout>
  );
};

export default CaseStudiesDetail;
