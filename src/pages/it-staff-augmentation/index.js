"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Tag, Space } from "antd";
import Image from "next/image";
import CustomLayout from "@/components/Layout";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "@/context";
import { useRouter } from "next/router";
import { setItemCaseStudy } from "@/context/actions/case-studies";
import Card from "@/components/Card";

import ITStaff1 from "../../../public/it-staff-1.png";
import ITStaff2 from "../../../public/it-staff-2.png";
import ITStaff3 from "../../../public/it-staff-3.png";
import ITStaff4 from "../../../public/it-staff-4.png";
import Next1 from "../../../public/next-right-arrow-1.png";
import Next2 from "../../../public/next-right-arrow-2.png";
import Mark from "../../../public/mark.svg";
import Benefit1 from "../../../public/benefit-1.svg";
import Benefit2 from "../../../public/benefit-2.svg";
import Benefit3 from "../../../public/benefit-3.svg";
import Benefit4 from "../../../public/benefit-4.svg";
import Dev1 from "../../../public/dev-1.svg";
import Dev2 from "../../../public/dev-2.svg";
import Dev3 from "../../../public/dev-3.svg";
import Dev4 from "../../../public/dev-4.svg";
import Dev5 from "../../../public/dev-5.svg";
import Dev6 from "../../../public/dev-6.svg";
import Dev7 from "../../../public/dev-7.svg";
import Process1 from "../../../public/process-1.png";
import Process2 from "../../../public/process-2.svg";
import Process3 from "../../../public/process-3.svg";
import Process4 from "../../../public/process-4.svg";

const CalendlyLinkWidget = ({ buttonName, buttonStyle }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Button
        className={styles[buttonStyle]}
        onClick={() => {
          Calendly.initPopupWidget({
            url: "https://calendly.com/binhngoc17/rockship-app-builder",
          });
          return false;
        }}
      >
        {buttonName}
      </Button>
    </div>
  );
};

const CilentCard = ({
  imageSrc,
  text,
  id,
  clientName,
  clientImageSrc,
  clientCompany,
}) => {
  const caseStudies = useSelector((state) => state?.caseStudies?.caseStudies);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const item = caseStudies.find((item) => item.id === id);
    if (item) {
      router.push(`/case-studies/${item.id}`);
      dispatch(setItemCaseStudy(item));
      localStorage.setItem("itemDetail", JSON.stringify(item));
    }
  };

  return (
    <div
      className={styles["box-7-content"]}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-anchor-placement="top-bottom"
    >
      <img src={imageSrc} alt="quote" className={styles["client-icon"]} />
      <div className={styles["meta-testimony"]}>
        <div>
          <img src="/quote.svg" alt="quote" className={styles["quote-icon"]} />
        </div>
        <div className={styles["client-test"]}>
          <div className={styles["text"]}>{text}</div>
          <div className={styles["text-link"]}>
            <u
              onClick={() => {
                handleOnClick();
              }}
            >
              Read case study
            </u>
          </div>
          <div className={styles["client"]}>
            <img src={clientImageSrc} alt="avt" />
            <div>
              <p className={styles["client-name"]}>
                <b>{clientName}</b>
              </p>
              <p className={styles["client-position"]}>CEO | {clientCompany}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ITStaff = () => {
  const [models, setModels] = useState(false);
  const [selected, setSelected] = useState(0);
  const [flex, setFlex] = useState(true);
  const [cost, setCost] = useState(true);
  const [inte, setInte] = useState(true);
  const [speed, setSpeed] = useState(true);

  const caseStudies = useSelector((state) => state?.caseStudies?.caseStudies);
  const router = useRouter();
  const dispatch = useDispatch();

  const clientDataList = [
    {
      imageSrc: "/meta_dotus.svg",
      text: "Rockship helped us with the development of our frontend for meta.us. I have found them to be flexible and willing to go the extra mile in meeting client needs.",
      clientName: "Alan Chou",
      id: 12,
      clientImageSrc: "/meta-avt.svg",
      clientCompany: "Meta.us",
    },
    {
      imageSrc: "/revo.svg",
      text: "Rockship is a great choice for extending your development team. With their talented developer pool, they helped us release key features fast by supplementing our team. Their work was top-notch.",
      id: 3,
      clientName: "Ritesh",
      clientImageSrc: "/rovo-avt.svg",
      clientCompany: "Rovo",
    },
    {
      imageSrc: "/iura-2.svg",
      text: "The development of IURA was completed within just a 6-month timeframe, delivering a comprehensive solution for legal consulting. The enhanced client experience and efficient service delivery have led to our notable growth in business and client satisfaction.",
      id: 7,
      clientName: "Tuan Ha",
      clientImageSrc: "/iura-avt.svg",
      clientCompany: "IURA",
    },
    {
      imageSrc: "/circo.svg",
      text: "Worknow integrates well with our system and drive more bookings for our services. We love their space provider dashboard which provides notifications for new bookings in real-time and their seamless guess checking process.",
      id: 2,
      clientName: "Linh Hoang",
      clientImageSrc: "/circo-avt.svg",
      clientCompany: "cirCO",
    },
    {
      imageSrc: "/tz.svg",
      text: "Do feel that I found the right partner in you, Rockship!",
      id: 9,
      clientName: "Tram Le",
      clientImageSrc: "/tz-avt.svg",
      clientCompany: "TedEz",
    },
    {
      imageSrc: "/sybit.svg",
      text: "The team at Rockship has played a key role in bringing You Predict to market. Technically strong & driven, they’ve been responsive to the shifting priorities that are innate to the startup process.",
      id: 0,
      clientName: "Theo Sanders",
      clientImageSrc: "/sybil-avt.svg",
      clientCompany: "Sybil Entertainment",
    },
  ];

  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentIndex + itemsPerPage;
    if (newIndex < clientDataList.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleBack = () => {
    const newIndex = currentIndex - itemsPerPage;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const isBackDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + itemsPerPage >= clientDataList.length;

  const visibleClientData = clientDataList.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleOnClickCard = (item) => {
    router.push(`/case-studies/${item.id}`);
    dispatch(setItemCaseStudy(item));
    localStorage.setItem("itemDetail", JSON.stringify(item));
  };

  const handleFlip = (value, state) => {
    if (value === "flex") {
      if (state) setFlex(false);
      else setFlex(true);
    }
    if (value === "cost") {
      if (state) setCost(false);
      else setCost(true);
    }
    if (value === "inte") {
      if (state) setInte(false);
      else setInte(true);
    }
    if (value === "speed") {
      if (state) setSpeed(false);
      else setSpeed(true);
    }
  };

  const handleChoice = (value) => {
    setModels(true);
    setSelected(value);
  };

  const columnsIT = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "22%",
      height: "59px",
    },
    {
      title: "Managed IT Service",
      key: "it",
      align: "center",
      width: "26%",
      render: (_, record) =>
        record.it ? (
          <div>
            <Image src={Mark} alt="" />
          </div>
        ) : (
          <div></div>
        ),
    },
    {
      title: "Tech Team Expansion",
      align: "center",
      key: "tech",
      width: "26%",
      render: (_, record) =>
        record.tech ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Dedicated Team",
      align: "center",
      key: "dedicated",
      width: "26%",
      render: (_, record) =>
        record.dedicated ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
  ];
  const columnsTech = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "22%",
      height: "59px",
    },
    {
      title: "Managed IT Service",
      key: "it",
      align: "center",
      width: "26%",
      render: (_, record) =>
        record.it ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Tech Team Expansion",
      align: "center",
      key: "tech",
      width: "26%",
      render: (_, record) =>
        record.tech ? (
          <div>
            <Image src={Mark} alt="" />
          </div>
        ) : (
          <div></div>
        ),
    },
    {
      title: "Dedicated Team",
      align: "center",
      key: "dedicated",
      width: "26%",
      render: (_, record) =>
        record.dedicated ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
  ];
  const columnsDedicated = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "22%",
      height: "59px",
    },
    {
      title: "Managed IT Service",
      key: "it",
      align: "center",
      width: "26%",
      render: (_, record) =>
        record.it ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Tech Team Expansion",
      align: "center",
      key: "tech",
      width: "26%",
      render: (_, record) =>
        record.tech ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Dedicated Team",
      align: "center",
      key: "dedicated",
      width: "26%",
      render: (_, record) =>
        record.dedicated ? (
          <div>
            <Image src={Mark} alt="" />
          </div>
        ) : (
          <div></div>
        ),
    },
  ];
  const columnsOther = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "22%",
      height: "59px",
    },
    {
      title: "Managed IT Service",
      key: "it",
      align: "center",
      width: "26%",
      render: (_, record) =>
        record.it ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Tech Team Expansion",
      align: "center",
      key: "tech",
      width: "26%",
      render: (_, record) =>
        record.tech ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
    {
      title: "Dedicated Team",
      align: "center",
      key: "dedicated",
      width: "26%",
      render: (_, record) =>
        record.dedicated ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span></span>
        ),
    },
  ];
  const data = [
    {
      key: "1",
      service: "Decrease Internal Resource Strain",
      it: true,
      tech: false,
      dedicated: true,
    },
    {
      key: "2",
      service: "External Project Management Assistance",
      it: false,
      tech: true,
      dedicated: true,
    },
    {
      key: "3",
      service: "Rapid Scaling Capabilities",
      it: true,
      tech: true,
      dedicated: false,
    },
    {
      key: "4",
      service: "Access to Elite Tech Talent",
      it: true,
      tech: true,
      dedicated: false,
    },
    {
      key: "5",
      service: "Address Specific Skill Deficiencies",
      it: true,
      tech: true,
      dedicated: false,
    },
    {
      key: "6",
      service: "Seamless Integration with Current Teams",
      it: true,
      tech: true,
      dedicated: false,
    },
    {
      key: "7",
      service: "Team under your management",
      it: true,
      tech: false,
      dedicated: false,
    },
    {
      key: "8",
      service: "Full Team Collaboration",
      it: false,
      tech: true,
      dedicated: false,
    },
  ];

  return (
    <CustomLayout link={"it-staff-augmentation"}>
      <div className={styles["it-staff-container"]}>
        <Row className={styles["it-staff-1"]}>
          <Col className={styles["left-col"]} lg={12} xs={24}>
            <div className={styles["menu-bar"]}>
              <p
                onClick={() => router.push("/")}
                className={styles["homepage-title"]}
              >
                Homepage
              </p>
              <p className={styles["line"]}>/</p>
              <p className={styles["page-title"]}>IT staff augmentation</p>
            </div>
            <p className={styles["title"]}>
              Effortlessly Expand Your Team with Global Tech Expertise
            </p>
            <p className={styles["content"]}>
              We assist your business in accessing top global tech talents
              irrespective of your location. Find the expertise you need, save
              time, and reduce costs by hiring on-demand.
            </p>
            <CalendlyLinkWidget
              buttonName="Contact us"
              buttonStyle="contact-us"
            />
          </Col>
          <Col className={styles["right-col"]} lg={12} xs={24}>
            <Image
              className={styles["cover"]}
              src={ITStaff1}
              alt=""
              priority
            ></Image>
          </Col>
        </Row>
        <div className={styles["clients-2"]}>
          <p className={styles["clients-2-title"]}>Brands trusted us</p>
          <div className={styles["bar-container"]}>
            <div className={styles["animation-bar"]}>
              <div>
                <img className={styles["image-1"]} src="/client-1.png" alt="" />
              </div>
              <div>
                <img src="/client-2.png" alt="" />
              </div>
              <div>
                <img src="/client-3.png" alt="" />
              </div>
              <div>
                <img src="/client-4.png" alt="" />
              </div>
              <div>
                <img src="/client-5.png" alt="" />
              </div>
              <div>
                <img src="/client-6.png" alt="" />
              </div>
              <div>
                <img className={styles["image-7"]} src="/client-7.png" alt="" />
              </div>
              <div>
                <img src="/client-10.png" alt="" />
              </div>
              <div>
                <img src="/client-11.png" alt="" />
              </div>
              <div>
                <img src="/client-12.png" alt="" />
              </div>
              <div>
                <img src="/client-13.png" alt="" />
              </div>
              <div>
                <img src="/client-14.png" alt="" />
              </div>
              <div>
                <img src="/client-15.png" alt="" />
              </div>
              <div>
                <img className={styles["image-1"]} src="/client-1.png" alt="" />
              </div>
              <div>
                <img src="/client-2.png" alt="" />
              </div>
              <div>
                <img src="/client-3.png" alt="" />
              </div>
              <div>
                <img src="/client-4.png" alt="" />
              </div>
              <div>
                <img src="/client-5.png" alt="" />
              </div>
              <div>
                <img src="/client-6.png" alt="" />
              </div>
              <div>
                <img className={styles["image-7"]} src="/client-7.png" alt="" />
              </div>
              <div>
                <img src="/client-8.png" alt="" />
              </div>
              <div>
                <img src="/client-9.png" alt="" />
              </div>
              <div>
                <img src="/client-10.png" alt="" />
              </div>
              <div>
                <img src="/client-11.png" alt="" />
              </div>
              <div>
                <img src="/client-12.png" alt="" />
              </div>
              <div>
                <img src="/client-13.png" alt="" />
              </div>
              <div>
                <img src="/client-14.png" alt="" />
              </div>
              <div>
                <img src="/client-15.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["services"]}>
          <p className={styles["title"]}>Services Introduction</p>
          <p className={styles["content"]}>
            IT Staff Augmentation is a strategic approach that elevates your
            tech team with specialized talent on-demand
          </p>
          <Row className={styles["it-staff-2"]}>
            <Col className={styles["col-box"]} lg={8} xs={24}>
              <p className={styles["col-title"]}>Tech team extension</p>
              <p className={styles["col-content"]}>
                You hire freelance <u>developers</u> from Rockship's talent pool
              </p>
              <Image className={styles["col-image"]} src={ITStaff2} alt="" />
            </Col>
            <Col className={styles["col-box-center"]} lg={8} xs={24}>
              <p className={styles["col-title"]}>Dedicated team</p>
              <p className={styles["col-content"]}>
                You hire <u>full development team</u> collaborates closely with
                yours
              </p>
              <Image className={styles["col-image"]} src={ITStaff3} alt="" />
            </Col>
            <Col className={styles["col-box"]} lg={8} xs={24}>
              <p className={styles["col-title"]}>Managed IT services</p>
              <p className={styles["col-content"]}>
                You hire our <u>Technical Support Engineers</u> to ensure smooth
                operation of your systems
              </p>
              <Image className={styles["col-image"]} src={ITStaff4} alt="" />
            </Col>
          </Row>
        </div>
        <div className={styles["models"]}>
          <p className={styles["title"]}>
            Which models is best suitable for you?
          </p>
          {!models && (
            <Row className={styles["models-row"]}>
              <Col className={styles["col-left"]} lg={12} xs={24}>
                <Image
                  className={styles["next-1"]}
                  height={20}
                  src={Next1}
                  alt=""
                />
                <p>Choose the one that best matches with your need right now</p>
                <Image
                  className={styles["next-2"]}
                  height={50}
                  src={Next2}
                  alt=""
                />
              </Col>
              <Col className={styles["col-right"]} lg={12} xs={24}>
                <div
                  onClick={() => handleChoice(1)}
                  className={styles["choice"]}
                >
                  Your team is short on engineers, and you want one ready in a
                  week
                </div>
                <div
                  onClick={() => handleChoice(2)}
                  className={styles["choice"]}
                >
                  You need to swiftly scale up several other tech teams.
                </div>
                <div
                  onClick={() => handleChoice(3)}
                  className={styles["choice"]}
                >
                  You need a DevOps Engineer to guarantee stable work of IT
                  infrastructure
                </div>
                <div
                  onClick={() => handleChoice(4)}
                  className={styles["choice"]}
                >
                  Others
                </div>
              </Col>
            </Row>
          )}
          {models && (
            <Image
              onClick={() => setModels(false)}
              className={styles["back"]}
              height={20}
              src={Next1}
              alt=""
            />
          )}
          <div className={styles["table-contatiner"]}>
            {models && selected === 1 && (
              <Table
                bordered={true}
                className={styles["models-table"]}
                pagination={false}
                columns={columnsTech}
                dataSource={data}
              />
            )}
            {models && selected === 2 && (
              <Table
                bordered={true}
                className={styles["models-table"]}
                pagination={false}
                columns={columnsDedicated}
                dataSource={data}
              />
            )}
            {models && selected === 3 && (
              <Table
                bordered={true}
                className={styles["models-table"]}
                pagination={false}
                columns={columnsIT}
                dataSource={data}
              />
            )}
            {models && selected === 4 && (
              <Table
                bordered={true}
                className={styles["models-table"]}
                pagination={false}
                columns={columnsOther}
                dataSource={data}
              />
            )}
          </div>
        </div>
        {models && (
          <div className={styles["book-container"]}>
            <CalendlyLinkWidget
              buttonStyle="book"
              buttonName="Book our service"
            />
          </div>
        )}
        <div className={styles["benefit"]}>
          <p className={styles["title"]}>Benefits of IT Staff Augmentation</p>
          <Row className={styles["benefit-row"]}>
            <Col xs={24} lg={6} className={styles["benefit-col"]}>
              <div
                onMouseEnter={() => handleFlip("flex", true)}
                onMouseLeave={() => handleFlip("flex", false)}
              >
                <div
                  className={`${styles["card"]} ${
                    flex ? styles["card-front"] : styles["card-back"]
                  }`}
                >
                  {flex ? (
                    <>
                      <Image width={80} height={80} src={Benefit1} alt="" />
                      <p>Flexibility</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Flexibility</p>
                        <Image width={24} height={24} src={Benefit1} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          You can scale your workforce up or down based on
                          project requirements, allowing for greater agility in
                          response to workload fluctuations
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={6} className={styles["benefit-col"]}>
              <div
                onMouseEnter={() => handleFlip("cost", true)}
                onMouseLeave={() => handleFlip("cost", false)}
              >
                <div
                  className={`${styles["card"]} ${
                    cost ? styles["card-front"] : styles["card-back"]
                  }`}
                >
                  {cost ? (
                    <>
                      <Image width={80} height={80} src={Benefit2} alt="" />
                      <p>Cost Efficiency</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Cost Efficiency</p>
                        <Image width={24} height={24} src={Benefit2} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          Instead of hiring permanent employees with all the
                          associated overheads (benefits, training, equipment),
                          your companies can save money by hiring specialized
                          staff only when needed
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={6} className={styles["benefit-col"]}>
              <div
                onMouseEnter={() => handleFlip("inte", true)}
                onMouseLeave={() => handleFlip("inte", false)}
              >
                <div
                  className={`${styles["card"]} ${
                    inte ? styles["card-front"] : styles["card-back"]
                  }`}
                >
                  {inte ? (
                    <>
                      <Image width={80} height={80} src={Benefit3} alt="" />
                      <p>Seamless Integration</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Seamless Integration</p>
                        <Image width={24} height={24} src={Benefit3} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          Acquiring talent through staff augmentation is
                          typically faster than traditional hiring processes,
                          ensuring that projects aren't delayed due to talent
                          acquisition
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={6} className={styles["benefit-col"]}>
              <div
                onMouseEnter={() => handleFlip("speed", true)}
                onMouseLeave={() => handleFlip("speed", false)}
              >
                <div
                  className={`${styles["card"]} ${
                    speed ? styles["card-front"] : styles["card-back"]
                  }`}
                >
                  {speed ? (
                    <>
                      <Image width={80} height={80} src={Benefit4} alt="" />
                      <p>Speed Hiring Process</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Speed Hiring Process</p>
                        <Image width={24} height={24} src={Benefit4} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          Acquiring talent through staff augmentation is
                          typically faster than traditional hiring processes,
                          ensuring that projects aren't delayed due to talent
                          acquisition
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles["list-dev"]}>
          <div className={styles["desktop"]}>
            <div className={styles["top"]}>
              <div className={styles["title"]}>
                <p>What a typical software development team consists of</p>
              </div>
              <div className={styles["list-dev-1"]}>
                <div className={styles["dev-card"]}>
                  <Image src={Dev1} alt="" />
                  <p className={styles["dev-card-title"]}>
                    Front-end Developer
                  </p>
                  <p className={styles["dev-card-content"]}>
                    Create intuitive, beautiful and easy-to-use user interfaces
                    for websites and applications.
                  </p>
                </div>
                <div className={styles["dev-card"]}>
                  <Image src={Dev3} alt="" />
                  <p className={styles["dev-card-title"]}>Back-end Developer</p>
                  <p className={styles["dev-card-content"]}>
                    Focus on non-visible software components such as logic,
                    performance, servers, databases, and system design.{" "}
                  </p>
                </div>
                <div className={styles["dev-card"]}>
                  <Image src={Dev2} alt="" />
                  <p className={styles["dev-card-title"]}>Project manager</p>
                  <p className={styles["dev-card-content"]}>
                    Lead and manage the entire development process to ensure a
                    project’s success.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["bottom"]}>
              <div className={styles["list-dev-2"]}>
                <div className={styles["dev-card"]}>
                  <Image src={Dev4} alt="" />
                  <p className={styles["dev-card-title"]}>QA engineer</p>
                  <p className={styles["dev-card-content"]}>
                    Ensure applications work as intended without errors.
                  </p>
                </div>
                <div className={styles["dev-card"]}>
                  <Image src={Dev5} alt="" />
                  <p className={styles["dev-card-title"]}>UI/UX Designer</p>
                  <p className={styles["dev-card-content"]}>
                    Create delightful digital experiences by wireframing and
                    prototyping user interfaces.
                  </p>
                </div>
                <div className={styles["dev-card"]}>
                  <Image src={Dev6} alt="" />
                  <p className={styles["dev-card-title"]}>Business Analyst</p>
                  <p className={styles["dev-card-content"]}>
                    Identify and share valuable data insights that improve
                    business and development processes.
                  </p>
                </div>
                <div className={styles["dev-card"]}>
                  <Image src={Dev7} alt="" />
                  <p className={styles["dev-card-title"]}>DevOps Engineer</p>
                  <p className={styles["dev-card-content"]}>
                    Ensure the reliability, scalability, and security of
                    underlying infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["mobile"]}>
            <div className={styles["title"]}>
              <p>What a typical software development team consists of</p>
            </div>
            <div className={styles["list-dev-mobile"]}>
              <div className={styles["dev-card"]}>
                <Image src={Dev1} alt="" />
                <p className={styles["dev-card-title"]}>Front-end Developer</p>
                <p className={styles["dev-card-content"]}>
                  Create intuitive, beautiful and easy-to-use user interfaces
                  for websites and applications.
                </p>
              </div>
              <div className={styles["dev-card"] + " " + styles["spacing"]}>
                <Image src={Dev3} alt="" />
                <p className={styles["dev-card-title"]}>Back-end Developer</p>
                <p className={styles["dev-card-content"]}>
                  Focus on non-visible software components such as logic,
                  performance, servers, databases, and system design.{" "}
                </p>
              </div>
            </div>
            <div className={styles["list-dev-mobile"]}>
              <div className={styles["dev-card"]}>
                <Image src={Dev4} alt="" />
                <p className={styles["dev-card-title"]}>QA engineer</p>
                <p className={styles["dev-card-content"]}>
                  Ensure applications work as intended without errors.
                </p>
              </div>
              <div className={styles["dev-card"]}>
                <Image src={Dev5} alt="" />
                <p className={styles["dev-card-title"]}>UI/UX Designer</p>
                <p className={styles["dev-card-content"]}>
                  Create delightful digital experiences by wireframing and
                  prototyping user interfaces.
                </p>
              </div>
            </div>
            <div className={styles["list-dev-mobile"]}>
              <div className={styles["dev-card"]}>
                <Image src={Dev6} alt="" />
                <p className={styles["dev-card-title"]}>Business Analyst</p>
                <p className={styles["dev-card-content"]}>
                  Identify and share valuable data insights that improve
                  business and development processes.
                </p>
              </div>
              <div className={styles["dev-card"]}>
                <Image src={Dev7} alt="" />
                <p className={styles["dev-card-title"]}>DevOps Engineer</p>
                <p className={styles["dev-card-content"]}>
                  Ensure the reliability, scalability, and security of
                  underlying infrastructure.
                </p>
              </div>
            </div>
            <div className={styles["list-dev-mobile"]}>
              <div className={styles["dev-card"]}>
                <Image src={Dev2} alt="" />
                <p className={styles["dev-card-title"]}>Project manager</p>
                <p className={styles["dev-card-content"]}>
                  Lead and manage the entire development process to ensure a
                  project’s success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["our-tech"]}>
          <p className={styles["tech-title"]}>Our technology</p>
          <div className={styles["tech-row"]}>
            <div className={styles["tech-col-be"]}>
              <p>BACKEND</p>
              <div className={styles["logo-group"]}>
                <div>
                  <img src="/be-1.svg" alt="" />
                </div>
                <div>
                  <img src="/be-2.svg" alt="" />
                </div>
                <div>
                  <img src="/be-3.svg" alt="" />
                </div>
                <div>
                  <img src="/be-4.svg" alt="" />
                </div>
                <div>
                  <img src="/be-5.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className={styles["mobile-hr"]} />
            <div className={styles["tech-col-fe"]}>
              <p>FRONTEND</p>
              <div className={styles["logo-group"]}>
                <div>
                  <img src="/fe-1.svg" alt="" />
                </div>
                <div>
                  <img src="/fe-2.svg" alt="" />
                </div>
                <div>
                  <img src="/fe-3.svg" alt="" />
                </div>
                <div>
                  <img src="/fe-4.svg" alt="" />
                </div>
                <div>
                  <img src="/fe-5.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className={styles["mobile-hr"]} />
            <div className={styles["tech-col-mobile"]}>
              <div className={styles["logo-group"]}>
                <p>MOBILE</p>
                <div className={styles["logo-group"]}>
                  <div>
                    <img src="/mobile-1.svg" alt="" />
                  </div>
                  <div>
                    <img src="/mobile-2.svg" alt="" />
                  </div>
                  <div>
                    <img src="/mobile-3.svg" alt="" />
                  </div>
                  <div>
                    <img src="/mobile-4.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles["mobile-hr"]} />
            <div className={styles["tech-col-db"]}>
              <p>DATABASE</p>
              <div className={styles["logo-group"]}>
                <div>
                  <img src="/db-1.svg" alt="" />
                </div>
                <div>
                  <img src="/db-2.svg" alt="" />
                </div>
                <div>
                  <img src="/db-3.svg" alt="" />
                </div>
                <div>
                  <img src="/db-4.svg" alt="" />
                </div>
                <div>
                  <img src="/db-5.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className={styles["mobile-hr"]} />
            <div className={styles["tech-col-devops"]}>
              <p>DEVOPS</p>
              <div className={styles["logo-group"]}>
                <div>
                  <img src="/devops-1.svg" alt="" />
                </div>
                <div>
                  <img src="/devops-2.svg" alt="" />
                </div>
                <div>
                  <img src="/devops-3.svg" alt="" />
                </div>
                <div>
                  <img src="/devops-4.svg" alt="" />
                </div>
                <div>
                  <img src="/devops-5.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className={styles["mobile-hr"]} />
            <div className={styles["tech-col-ux"]}>
              <p>UI/UX DESIGN</p>
              <div className={styles["logo-group"]}>
                <div>
                  <img src="/ux-1.svg" alt="" />
                </div>
                <div>
                  <img src="/ux-2.svg" alt="" />
                </div>
                <div>
                  <img src="/ux-3.svg" alt="" />
                </div>
                <div>
                  <img src="/ux-4.svg" alt="" />
                </div>
                <div>
                  <img src="/ux-5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["process"]}>
          <p className={styles["title"]}>
            Speed, Simplicity, and Steady Progress
          </p>
          <div className={styles["desktop"]}>
            <div>
              <Image className={styles["process-1"]} src={Process1} alt="" />
            </div>
            <div>
              <Image src={Process2} alt="" />
            </div>
          </div>
          <div className={styles["mobile"]}>
            <div>
              <Image src={Process3} alt="" />
            </div>
            <div>
              <Image src={Process4} alt="" />
            </div>
          </div>
          <CalendlyLinkWidget
            buttonStyle="view-all-case-studies"
            buttonName="Schedule a call"
          />
        </div>
        <div
          className={styles["case-studies"]}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Case studies</h3>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          className={styles["case-study-container"]}
        >
          {caseStudies?.map((item, index) => {
            if (item.id < 4) {
              return (
                <Card
                  key={index}
                  title={item.title}
                  imageSrc={item.src}
                  description={item.description}
                  lsValue={item.hashtags}
                  handleOnClickCard={() => handleOnClickCard(item)}
                />
              );
            }
          })}
        </div>
        <Button
          className={styles["view-all-case-studies"]}
          onClick={() => router.push("/case-studies")}
        >
          View all case studies
        </Button>
        <div className={styles["box-7"]}>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
            className={styles["header-testimony"]}
          >
            <p className={styles["title-1"]}>Client Testimonials</p>
          </div>
          <div className={styles["box-7-col"]}>
            {visibleClientData.map((clientData, index) => (
              <CilentCard key={index} {...clientData} />
            ))}
          </div>
          <div className={styles["client-button-group"]}>
            <Button
              className={
                styles["button-client"] +
                " " +
                (isBackDisabled ? styles["disabled"] : "")
              }
              onClick={handleBack}
              disabled={isBackDisabled}
            >
              <img src="/back-arrow.svg" alt="back" />
            </Button>
            <Button
              className={
                styles["button-client"] +
                " " +
                (isNextDisabled ? styles["disabled"] : "")
              }
              onClick={handleNext}
              disabled={isNextDisabled}
            >
              <img src="/next-arrow.svg" alt="next" />
            </Button>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default ITStaff;
