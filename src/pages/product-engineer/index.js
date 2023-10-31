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

import ProductEngineer1 from "../../../public/pe-1.png";
import ProductEngineer2 from "../../../public/pe-2.png";
import ProductEngineer3 from "../../../public/pe-3.png";
import ProductEngineer4 from "../../../public/pe-4.png";
import Mark from "../../../public/mark.svg";
import Benefit1 from "../../../public/benefit-1.svg";
import Benefit2 from "../../../public/benefit-2.svg";
import Benefit4 from "../../../public/benefit-4.svg";
import Process1 from "../../../public/process-1.png";
import Process2 from "../../../public/process-2.svg";
import Process3 from "../../../public/process-3.svg";
import Process4 from "../../../public/process-4.svg";
import Assist from "../../../public/assist.png";

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

const ProductEngineer = () => {
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

  const columnsOther = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "22%",
      height: "59px",
    },
    {
      title: "LOW-CODE DEVELOPMENT",
      key: "it",
      align: "center",
      width: "26%",
      render: (_, record) =>
        record.it ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span>{record.textIT}</span>
        ),
    },
    {
      title: "CUSTOMER APPLICATION",
      align: "center",
      key: "tech",
      width: "26%",
      render: (_, record) =>
        record.tech ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span>{record.textTech}</span>
        ),
    },
    {
      title: "AI POC",
      align: "center",
      key: "dedicated",
      width: "26%",
      render: (_, record) =>
        record.dedicated ? (
          <span>
            <Image src={Mark} alt="" />
          </span>
        ) : (
          <span>{record.textDedicated}</span>
        ),
    },
  ];
  const data = [
    {
      key: "1",
      service: "Description",
      it: false,
      tech: false,
      dedicated: false,
      textIT: "Pre-built components",
      textTech: "From zero",
      textDedicated: "AI solution",
    },
    {
      key: "2",
      service: "Fast Development",
      it: true,
      tech: false,
      dedicated: false,
      textDedicated: "Varies",
    },
    {
      key: "3",
      service: "High Flexibility",
      it: false,
      tech: true,
      dedicated: true,
    },
    {
      key: "4",
      service: "Cost-effective",
      it: true,
      tech: false,
      dedicated: false,
      textDedicated: "Varies",
    },
    {
      key: "5",
      service: "Highly Scalable",
      it: false,
      tech: true,
      dedicated: false,
      textDedicated: "Varies",
    },
    {
      key: "6",
      service: "Easy Maintenance",
      it: true,
      tech: false,
      dedicated: false,
    },
  ];

  return (
    <CustomLayout link={"product-engineer"}>
      <div className={styles["product-engineer-container"]}>
        <Row className={styles["product-engineer-1"]}>
          <Col className={styles["left-col"]} lg={12} xs={24}>
            <div className={styles["menu-bar"]}>
              <p
                onClick={() => router.push("/")}
                className={styles["homepage-title"]}
              >
                Homepage
              </p>
              <p className={styles["line"]}>/</p>
              <p className={styles["page-title"]}>Product Engineer</p>
            </div>
            <p className={styles["title"]}>
              Speed up your product development at flexible price
            </p>
            <p className={styles["content"]}>
              At Rockship, we're set to bring your top-quality tech product to
              life in just 3 weeks with flexible payment options tailored to
              your financial needs
            </p>
            <CalendlyLinkWidget
              buttonName="Contact us"
              buttonStyle="contact-us"
            />
          </Col>
          <Col className={styles["right-col"]} lg={12} xs={24}>
            <Image
              className={styles["cover"]}
              src={ProductEngineer1}
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
          <p className={styles["title"]}>Our Services</p>
          <p className={styles["content"]}>
            IT Staff Augmentation is a strategic approach that elevates your
            tech team with specialized talent on-demand
          </p>
          <Row className={styles["product-engineer-2"]}>
            <Col className={styles["col-box"]} lg={8} xs={24}>
              <Image
                className={styles["col-image"]}
                src={ProductEngineer2}
                alt=""
              />
              <p className={styles["col-title"]}>Low-code Development</p>
              <p className={styles["col-content"]}>
                We build your app by code generation from pre-built components
              </p>
              <p className={styles["learn-more"]}>Learn More</p>
            </Col>
            <Col className={styles["col-box-center"]} lg={8} xs={24}>
              <Image
                className={styles["col-image"]}
                src={ProductEngineer3}
                alt=""
              />
              <p className={styles["col-title"]}>Fractional CTO</p>
              <p className={styles["col-content"]}>
                Our tech leads can be CTO for your startups
              </p>
              <p className={styles["learn-more"]}>Learn More</p>
            </Col>
            <Col className={styles["col-box"]} lg={8} xs={24}>
              <Image
                className={styles["col-image"]}
                src={ProductEngineer4}
                alt=""
              />
              <p className={styles["col-title"]}>Managed IT services</p>
              <p className={styles["col-content"]}>We build AI Solution</p>
              <p className={styles["learn-more"]}>Learn More</p>
            </Col>
          </Row>
        </div>
        <div className={styles["models"]}>
          <p className={styles["title"]}>
            Which models is best suitable for you?
          </p>
          <div className={styles["table-contatiner"]}>
            <Table
              bordered={true}
              className={styles["models-table"]}
              pagination={false}
              columns={columnsOther}
              dataSource={data}
            />
          </div>
        </div>
        <div className={styles["book-container"]}>
          <CalendlyLinkWidget buttonStyle="book" buttonName="Schedule a call" />
        </div>
        <div className={styles["benefit"]}>
          <p className={styles["title"]}>Benefits of IT Staff Augmentation</p>
          <Row className={styles["benefit-row"]}>
            <Col xs={24} lg={8} className={styles["benefit-col"]}>
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
                      <p>High Quality</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>High Quality</p>
                        <Image width={24} height={24} src={Benefit1} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          With over 10 years of industry expertise, our seasoned
                          professionals bring a wealth of knowledge and best
                          practices to ensure every project we undertake meets
                          the highest standards.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8} className={styles["benefit-col"]}>
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
                      <p>Flexible Price</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Flexible Price</p>
                        <Image width={24} height={24} src={Benefit2} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          We've made our pricing model extremely adaptable. Not
                          only do we tailor our costs to fit your budget, but we
                          also offer convenient installment options to further
                          ease any payment concerns
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8} className={styles["benefit-col"]}>
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
                      <p>Fast delivery</p>
                    </>
                  ) : (
                    <>
                      <div className={styles["card-back-flex"]}>
                        <p>Fast delivery</p>
                        <Image width={24} height={24} src={Benefit4} alt="" />
                      </div>
                      <div className={styles["card-back-content"]}>
                        <p>
                          We've integrated automated systems to enhance and
                          expedite our delivery process. By optimizing our
                          manual procedures, we ensure that projects are
                          delivered in the shortest time frame without
                          sacrificing quality
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles["assist"]}>
          <p className={styles["title"]}>
            We assist you through every phase of product development
          </p>
          <p className={styles["content"]}>
            We use Agile and Scrum for efficient, tailored software development
          </p>
          <div>
            <Image priority src={Assist} alt="" />
          </div>
        </div>
        <div className={styles["process"]}>
          <p className={styles["title"]}>
            Speed, Simplicity, and Steady Progress
          </p>
          <div className={styles["desktop"]}>
            <div>
              <Image
                className={styles["process-1"]}
                src={Process1}
                alt=""
                priority
              />
            </div>
            <div>
              <Image src={Process2} alt="" priority />
            </div>
          </div>
          <div className={styles["mobile"]}>
            <div>
              <Image src={Process3} alt="" priority />
            </div>
            <div>
              <Image src={Process4} alt="" priority />
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

export default ProductEngineer;
