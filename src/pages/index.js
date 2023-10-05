"use client";
import React, { useState, useEffect } from "react";
import { Button, Col, Row, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/index.module.scss";
import { useSelector, useDispatch } from "@/context";
import { setItemCaseStudy } from "@/context/actions/case-studies";

import Card from "@/components/Card";
import CustomLayout from "@/components/Layout";
import { analytics } from "@/segment/segment";

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

const HomePage = () => {
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

  useEffect(() => {
    analytics.track("visit-homepage");
  }, []);

  return (
    <CustomLayout link={"solutions"}>
      <div className={styles["homepage"] + " " + styles["fonts"]}>
        <Row className={styles["rockship-company"]}>
          <Col className={styles["mobile-img"]} xs={24} md={0}>
            <img src="/rockship-company.svg" alt="" />
          </Col>
          <Col className={styles["col-left"]} xs={24} md={12}>
            <p className={styles["rockship-company-title"]}>ROCKSHIP COMPANY</p>
            <p className={styles["rockship-company-content"]}>
              With over 10+ of expertise, Rockship has consistently offered
              cutting-edge solutions and fosters innovation for a myriad of
              business domains. Our unwavering commitment ensures bespoke,
              top-notch results for our clients
            </p>
            <Row className={styles["row-small"]}>
              <Col className={styles["col-small"]} span={12}>
                <img src="/industries.svg" alt="" />
                <p className={styles["amount"]}>10+</p>
                <p className={styles["name"]}>Industries</p>
              </Col>
              <Col className={styles["col-small"]} span={12}>
                <img src="/projects.svg" alt="" />
                <p className={styles["amount"]}>50+</p>
                <p className={styles["name"]}>Projects</p>
              </Col>
              <Col className={styles["col-small"]} span={12}>
                <img src="/components.svg" alt="" />
                <p className={styles["amount"]}>1000+</p>
                <p className={styles["name"]}>Delivered components</p>
              </Col>
              <Col className={styles["col-small"]} span={12}>
                <img src="/clients-2.svg" alt="" />
                <p className={styles["amount"]}>100%</p>
                <p className={styles["name"]}>Satisfied Clients</p>
              </Col>
            </Row>
          </Col>
          <Col className={styles["col-right"]} xs={24} md={12}>
            <img src="/rockship-company.svg" alt="" />
          </Col>
        </Row>
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
        <div className={styles["our-services-background"]}>
          <div className={styles["our-services"]}>
            <p className={styles["title"]}>Our Services</p>
            <Row>
              <Col className={styles["col-our-services-left"]} xs={24} md={12}>
                <div className={styles["background"]}>
                  <img src="/staff.svg" alt="" />
                  <p className={styles["col-title"]}>IT Staff Augmentation</p>
                  <p className={styles["content"]}>
                    We assist your business in accessing top global tech talents
                    irrespective of your location. Find the expertise you need,
                    save time, and reduce costs by hiring on-demand.
                  </p>
                  <Button className={styles["explore-btn"]}>
                    Explore <img src="/our-services-arrow.svg" />
                  </Button>
                </div>
              </Col>
              <Col className={styles["col-our-services-right"]} xs={24} md={12}>
                <div className={styles["background"]}>
                  <img src="/production.svg" alt="" />
                  <p className={styles["col-title"]}>Production Engineering</p>
                  <p className={styles["content"]}>
                    We assist businesses in designing and launching innovative
                    products by understanding their needs and offering tailored
                    solutions
                  </p>
                  <Button className={styles["explore-btn"]}>
                    Explore <img src="/our-services-arrow.svg" />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles["our-tech"]}>
          <p className={styles["tech-title"]}>Our Tech Stack</p>
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
                  <div>
                    <img src="/mobile-5.svg" alt="" />
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
        <div className={styles["trust-us"]}>
          <p className={styles["trust-us-title"]}>Why Our Clients trust us?</p>
          <Row>
            <Col className={styles["col-trust-us"]} xs={24} md={6}>
              <div className={styles["col-trust-us-bg"]}>
                <img src="/trust-1.svg" alt="" />
                <p className={styles["col-trust-us-title"]}>Fast Delivery</p>
                <p className={styles["col-trust-us-content"]}>
                  We've successfully executed 1000+ software features. Our
                  streamlined processes mean you get results quickly
                </p>
              </div>
            </Col>
            <Col className={styles["col-trust-us"]} xs={24} md={6}>
              <div className={styles["col-trust-us-bg"]}>
                <img src="/trust-2.svg" alt="" />
                <p className={styles["col-trust-us-title"]}>
                  Fast Top Work Quality
                </p>
                <p className={styles["col-trust-us-content"]}>
                  Our experts, with 10+ years of experience, guarantee top-tier
                  work. We don't just meet standards; we set them
                </p>
              </div>
            </Col>
            <Col className={styles["col-trust-us"]} xs={24} md={6}>
              <div className={styles["col-trust-us-bg"]}>
                <img src="/trust-3.svg" alt="" />
                <p className={styles["col-trust-us-title"]}>
                  Economical Solution
                </p>
                <p className={styles["col-trust-us-content"]}>
                  By pushing for software development automation, we save our
                  clients significant money
                </p>
              </div>
            </Col>
            <Col className={styles["col-trust-us"]} xs={24} md={6}>
              <div className={styles["col-trust-us-bg"]}>
                <img src="/trust-4.svg" alt="" />
                <p className={styles["col-trust-us-title"]}>Effective Scale</p>
                <p className={styles["col-trust-us-content"]}>
                  By pushing for software development automation, we save our
                  clients significant money
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles["serve"]}>
          <p className={styles["serve-title"]}>
            Some of the Industries We Currently Serve
          </p>
          <div className={styles["desktop-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-1.svg" alt="" />
              <p>Social Media</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-2.svg" alt="" />
              <p>FnB</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-3.svg" alt="" />
              <p>Logistic</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-4.svg" alt="" />
              <p>Video Streaming</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-5.svg" alt="" />
              <p>Fintech</p>
            </div>
          </div>
          <div className={styles["desktop-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-6.svg" alt="" />
              <p>Healthcare</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-7.svg" alt="" />
              <p>Real Estate</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-8.svg" alt="" />
              <p>e-Commerce</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-9.svg" alt="" />
              <p>Education</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-10.svg" alt="" />
              <p>Travel</p>
            </div>
          </div>
          <div className={styles["mobile-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-6.svg" alt="" />
              <p>Healthcare</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-1.svg" alt="" />
              <p>Social Media</p>
            </div>
          </div>
          <div className={styles["mobile-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-7.svg" alt="" />
              <p>Real Estate</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-2.svg" alt="" />
              <p>FnB</p>
            </div>
          </div>
          <div className={styles["mobile-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-8.svg" alt="" />
              <p>e-Commerce</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-3.svg" alt="" />
              <p>Logistic</p>
            </div>
          </div>
          <div className={styles["mobile-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-9.svg" alt="" />
              <p>Education</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-4.svg" alt="" />
              <p>Video Streaming</p>
            </div>
          </div>
          <div className={styles["mobile-serve"]}>
            <div className={styles["serve-box"]}>
              <img src="/serve-10.svg" alt="" />
              <p>Travel</p>
            </div>
            <div className={styles["serve-box"]}>
              <img src="/serve-5.svg" alt="" />
              <p>Fintech</p>
            </div>
          </div>
        </div>
        <div className={styles["clients-2"]}>
          <p className={styles["clients-2-title"]}>Our clients</p>
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
            </div>
          </div>
        </div>
        <div className={styles["box-6"]}>
          <Row className={styles["custom-row"]}>
            <Col xs={24} md={16}>
              <p
                className={styles["title"]}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                WE BUILD FASTER WITH OUR <br></br>
                AI & AUTOMATION!
              </p>
            </Col>
            <Col xs={24} md={8} className={styles["custom-col"]}>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                className={styles["custom-label"]}
              >
                Email
              </p>
              <Input
                className={styles["custom-input"]}
                placeholder="Enter your email"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              />
              <p
                className={styles["custom-label"]}
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                Message
              </p>
              <textarea
                placeholder="Share with us your awesome app concept!"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              />
              <Button
                className={
                  styles["homepage-button-1"] + " " + styles["custom-button-1"]
                }
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                id="homepage-contact-us"
              >
                CONTACT US
              </Button>
            </Col>
          </Row>
        </div>
        <div className={styles["box-7"]}>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
            className={styles["header-testimony"]}
          >
            <p className={styles["text-title"] + " " + styles["title-1"]}>
              Client Testimonials
            </p>
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

export default HomePage;
