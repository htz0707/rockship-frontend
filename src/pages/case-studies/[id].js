"use client";
import React, { useState, useEffect } from "react";
import { Button, Col, Input, Form, Row, Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/case-studies-detail.module.scss";
import arrowLeftGray from "../../../public/arrow-left-gray.svg";
import banner from "../../../public/banner-case-studies.png";
import work from "../../../public/work.svg";
import calendar from "../../../public/calendar.svg";
import dangerCircle from "../../../public/danger-circle.svg";
import useWindowSize from "@/hooks/useWindowSize";
import { useSelector } from "@/context";

const HighLightItem = ({ src, name, color }) => {
  return (
    <div className={styles["highlight-item"]}>
      <div
        className={styles["highlight-item-image"]}
        style={{ background: color }}
      >
        <Image src={src} alt={name} priority width={24} height={24} />
      </div>
      <p>{name}</p>
    </div>
  );
};

const DescriptionItem = ({ title, des1, des2 }) => {
  return (
    <div className={styles["description-item"]}>
      <h3>{title}</h3>
      <p>{des1}</p>
      <p>{des2}</p>
    </div>
  );
};

const MenuItem = ({ title, lsValue }) => {
  return (
    <div className={styles["menu-item"]}>
      <h3>{title}</h3>
      <div className={styles["divider"]} />
      <ul>
        {lsValue?.map((item, index) => {
          return <li key={index}>{item?.name}</li>;
        })}
      </ul>
    </div>
  );
};

const BannerItem = ({ src, name }) => {
  return (
    <div className={styles["banner-content-item"]}>
      <Image src={src} alt={name} priority width={"100%"} height={"100%"} />
      <p>{name}</p>
    </div>
  );
};

const CaseStudiesDetail = () => {
  const router = useRouter();
  const size = useWindowSize();
  // const itemCaseStudy = useSelector((state) => state?.caseStudies?.itemCaseStudy);
  const [isShowContact, setIsShowContact] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const handleOnClickBack = () => {
    router.back();
  };
  const highlights = [
    {
      id: 1,
      name: "Speed of development",
      src: "/startup.svg",
      color: "#FFE8E8",
    },
    { id: 2, name: "Scalable", src: "/analytics.svg", color: "#FFF4D8;" },
    { id: 3, name: "Reach to purpose", src: "/target.svg", color: "#D8FFE0" },
    {
      id: 4,
      name: "Consistent process",
      src: "/milestone.svg",
      color: "#D8ECFF",
    },
    { id: 5, name: "User-friendly", src: "/double-tap.svg", color: "#E9D8FF" },
  ];

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

  return (
    <CustomLayout link={"studies"} isShowFooter isBack={isBack}>
      <div className={styles["case-studies-detail"]} id="case-studies-detail">
        <Button className={styles["button-back"]} onClick={handleOnClickBack}>
          <Image src={arrowLeftGray} alt="back" priority />
          <p>Back to list</p>
        </Button>
        <Row>
          <div className={styles["banner"]}>
            <Image
              src={banner}
              alt="banner"
              priority
              width={"100%"}
              height={"100%"}
            />
            <div className={styles["banner-content"]}>
              <h3>justotter</h3>
              <div className={styles["banner-content-list"]}>
                <BannerItem src={work} name="Company" />
                <BannerItem src={calendar} name="Duration" />
                <BannerItem src={dangerCircle} name="Web, App" />
              </div>
            </div>
          </div>
        </Row>
        <Row gutter={16} className={styles["row"]}>
          <Col xs={24} md={0}>
            <div className={styles["information"]}>
              <div className={styles["row"]}>
                <h4>Market: </h4>
                <p>Vietnam</p>
              </div>
              <div className={styles["row"]}>
                <h4>Industry: </h4>
                <p>E-commerce</p>
              </div>
              <div className={styles["row"]}>
                <h4>Features: </h4>
                <p>15</p>
              </div>
              <div className={styles["row"]}>
                <h4>Company size: </h4>
                <p>15</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={18}>
            <div className={styles["highlight"]}>
              {highlights.map((item) => {
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
                des1={
                  "Many restaurant businesses rely on multiple software solutions for different purposes, which often leads to the challenge of integrating these solutions and the associated overhead costs. Additionally, the majority of restaurant staff members are not well-versed in selecting the right technology and often rely on referrals from other establishments. As a result, restaurants often find themselves dependent on outdated technologies."
                }
                des2={
                  "However, when the pandemic strikes, technology becomes a crucial tool for local businesses to compete with one another. It provides them with the opportunity to adapt and stay relevant in the market. Furthermore, prominent restaurant chains like Luckin Coffee and HeyTea have successfully leveraged technology as a competitive advantage, further highlighting the importance of technological advancements in the industry."
                }
              />
              <DescriptionItem
                title={"Solution"}
                des1={
                  "We have developed a modular restaurant operation system that allows restaurants to deploy a fully integrated system based on their specific needs.  Rockship has been instrumental in assisting JustOtter with prototyping the solution and addressing key product challenges, such as building a digitalized menu and integrating blockchain for restaurant loyalty programs. We approach the restaurant business by breaking it down into clusters of software modules."
                }
                des2={
                  "We also prioritize the importance of a beautiful user experience design to ensure that the system is user-friendly and intuitive for restaurant staff to utilize."
                }
              />
            </div>
            <div className={styles["menu-list"]}>
              <div className={styles["menu"]}>
                <MenuItem
                  title={"Menu Interface"}
                  lsValue={[
                    { id: 1, name: "Signup/Login" },
                    { id: 2, name: "Store Management" },
                    { id: 3, name: "Dashboard" },
                  ]}
                />
                <img src={"/menu1.png"} alt={"menu"} />
              </div>
              <div className={styles["menu"]}>
                <img src={"/menu2.png"} alt={"menu"} />
                <MenuItem
                  title={"Customer Management"}
                  lsValue={[
                    { id: 1, name: "Loyalty Program" },
                    { id: 2, name: "Marketing Campaign" },
                  ]}
                />
              </div>
              <div className={styles["menu"]}>
                <MenuItem
                  title={"Queue management"}
                  lsValue={[
                    { id: 1, name: "Reservation" },
                    { id: 2, name: "QR-code based queue" },
                  ]}
                />
                <img src={"/menu3.png"} alt={"menu"} />
              </div>
              <div className={styles["menu"]}>
                <img src={"/menu4.png"} alt={"menu"} />
                <MenuItem
                  title={"Inventory management"}
                  lsValue={[
                    { id: 1, name: "Loyalty Program" },
                    { id: 2, name: "Marketing Campaign" },
                  ]}
                />
              </div>
            </div>
            <div className={styles["review"]}>
              <h3>Reviews from our customers</h3>
              <div className={styles["card-review"]}>
                <div className={styles["card-left"]}>
                  <Image
                    src={"/ceo.png"}
                    alt={"menu"}
                    width={48}
                    height={48}
                    priority
                  />
                  <p>
                    <span>J S |</span> CEO JustOtter
                  </p>
                </div>
                <div className={styles["card-right"]}>
                  <p>
                    Loyalty Program enables our store to design the strategy for
                    customer engagement better using data.
                  </p>
                  <p>
                    Table Ordering enables our restaurants to overcome staff
                    shortage after the pandemic while still serving the same set
                    of customer
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={0} md={6}>
            <div className={styles["card"]}>
              <div className={styles["row"]}>
                <h4>Market: </h4>
                <p>Vietnam</p>
              </div>
              <div className={styles["row"]}>
                <h4>Industry: </h4>
                <p>E-commerce</p>
              </div>
              <div className={styles["row"]}>
                <h4>Features: </h4>
                <p>15</p>
              </div>
              <div className={styles["row"]}>
                <h4>Company size: </h4>
                <p>15</p>
              </div>

              <div className={styles["hashtag"]}>
                {[
                  {
                    id: 1,
                    name: "e-commerce",
                  },
                  {
                    id: 2,
                    name: "case-study",
                  },
                  {
                    id: 3,
                    name: "low-cost",
                  },
                ].map((item) => {
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
          <Form>
            <Form.Item>
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Work email" />
            </Form.Item>
            <Button>Submit</Button>
          </Form>
        </div>
      </Modal>
    </CustomLayout>
  );
};

export default CaseStudiesDetail;
