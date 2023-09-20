"use client";
import React from "react";
import { Button, Col, Row, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/index.module.scss";
import { useSelector, useDispatch } from "@/context";
import { setItemCaseStudy } from "@/context/actions/case-studies";

import Card from "@/components/Card";
import CustomLayout from "@/components/Layout";

const HomePage = () => {
  const caseStudies = useSelector((state) => state?.caseStudies?.caseStudies);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnClickCard = (item) => {
    router.push(`/case-studies/${item.id}`);
    dispatch(setItemCaseStudy(item));
    localStorage.setItem("itemDetail", JSON.stringify(item));
  };

  return (
    <CustomLayout link={"solutions"}>
      <div className={styles["homepage"] + " " + styles["fonts"]}>
        <div
          className={styles["case-studies"]}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <h3>Case studies</h3>
          <Link href={"/case-studies"}>View all case studies</Link>
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
        <div className={styles["box-2"]}>
          <div
            className={styles["text-title"]}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            Why Companies Partner With Us?
          </div>
          <Row
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <Col className={styles["col-style"]} xs={24} sm={24} md={8}>
              <div className={styles["col-padding"]}>
                <img style={{ width: 80 }} src={"/clock.svg"} alt="clock" />
                <p className={styles["text-col-header"]}>
                  Development automation
                </p>
                <p className={styles["text-col-content"]}>
                  Our ultimate mission is to fully automate software development
                  work, saving our clients millions of dollar in development
                  cost.
                </p>
              </div>
            </Col>
            <Col className={styles["col-style"]} xs={24} sm={24} md={8}>
              <div className={styles["col-padding"]}>
                <img style={{ width: 80 }} src={"/cloud.svg"} alt="cloud" />
                <p className={styles["text-col-header"]}>
                  Accumulative Expertise & Diverse Capabilities
                </p>
                <p className={styles["text-col-content"]}>
                  We have accumulated ten-plus years of software development
                  experience for our clients and organized our expertises into
                  reusable modules to save time and effort for new developments.
                </p>
              </div>
            </Col>
            <Col className={styles["col-style"]} xs={24} sm={24} md={8}>
              <div className={styles["col-padding"]}>
                <img style={{ width: 80 }} src={"/pin.svg"} alt="pin" />
                <p className={styles["text-col-header"]}>
                  Frontier Tech & Cloud Native
                </p>
                <p className={styles["text-col-content"]}>
                  We are always ahead of the technologies to deliver our
                  partners the most powerful capabilities, allowing them to stay
                  ahead of the competition. Additionally, we embrace Cloud
                  Native solutions to ensure the systems can scale when our
                  clients need.
                </p>
              </div>
            </Col>
          </Row>
          <div id="rockship-solution" className={styles["box-3"]}>
            <p
              className={styles["text-title"]}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
            >
              Our Solutions
            </p>
            <Row className={styles["row"]}>
              <Col sm={24} md={0}>
                <img
                  src="/solutions.svg"
                  alt="solutions"
                  className={styles["col-image"]}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                />
              </Col>
              <Col
                className={styles["col-box"] + " " + styles["left-box"]}
                sm={24}
                md={12}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className={styles["title"]}>
                  BUILD SOFTWARES FASTER <br></br>WITH OUR AI
                </p>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    We have done <b>1000+ of software features</b> and can
                    quickly build new features for you with accurate estimation.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    AI & Automation powers our workflow: technical design to
                    codes, tests from specifications enabling us to build
                    software faster with high quality.
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/features")}
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                  id="homepage-browse-modules"
                >
                  BROWSE OUR MODULES
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
              <Col sm={0} md={12}>
                <img
                  src="/solutions.svg"
                  alt="solutions"
                  className={styles["col-image"]}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                />
              </Col>
            </Row>
            <Row className={styles["row"]}>
              <Col sm={0} md={12}>
                <div className={styles["left-box"]}>
                  <img
                    src="/services.svg"
                    alt="services"
                    className={styles["col-image"]}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                  />
                </div>
              </Col>
              <Col
                className={styles["col-box"] + " " + styles["right-box"]}
                sm={24}
                md={12}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className={styles["title"]}>TEAM AS A SERVICE</p>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Our AI-powered hiring pipeline enables you hire top
                    Vietnamese developers on-demand to solve your tech problems.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    We adopt management tools and frameworks for team to deliver
                    work progressively.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Our developer training tools enable us to train, support and
                    grow the developers continuously.
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/talent-as-a-service")}
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="bottom-bottom"
                  id="homepage-talent-as-service"
                >
                  HIRE TALENTS
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
            </Row>
            <Row className={styles["row"]}>
              <Col sm={24} md={0}>
                <img
                  src="/data.svg"
                  alt="data"
                  className={styles["col-image"]}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                />
              </Col>
              <Col
                className={styles["col-box"] + " " + styles["left-box"]}
                sm={24}
                md={12}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className={styles["title"]}>AI AS A SERVICE</p>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Prototype AI for use cases: Key Information Extraction,
                    Chatbot for Customer Service & AI For Educational Content
                    Generation
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Build and maintain MLOps infrastructure (
                    <b>Feature Store</b>, <b>ML Model Store</b>, <b>LLM Apps</b>
                    ) to serve business critical applications requiring
                    real-time data: recommendation system, ads bidding.
                  </p>
                </div>
                <Button
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  onClick={() => router.push("/build-your-ai")}
                  id="homepage-build-your-ai"
                >
                  BUILD YOUR AI
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
              <Col xs={0} md={12}>
                <img
                  src="/data.svg"
                  alt="data"
                  className={styles["col-image"]}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                />
              </Col>
            </Row>
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
              Real Stories from
            </p>

            <p className={styles["text-title"] + " " + styles["title-2"]}>
              Real Customers
            </p>
          </div>
          <Row>
            <Col className={styles["text-start"]} xs={24} md={12}>
              <div
                className={styles["text-end"]}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                <img
                  src="/meta_dotus.svg"
                  alt="quote"
                  className={styles["client_icon"]}
                />
                <div className={styles["meta-testimony"]}>
                  <img
                    src="/quote.svg"
                    alt="quote"
                    className={styles["quote_icon"]}
                  />
                  <div className={styles["client_test"]}>
                    Rockship helped us with the development of our frontend for
                    meta.us. I have found them to be flexible and willing to go
                    the extra mile in meeting client needs.
                    <div className={styles["client"]}>
                      <a
                        href="https://www.linkedin.com/in/alantchou/"
                        target="_blank"
                      >
                        <p className={styles["client_name"]}>
                          <b>Alan Chou</b>
                        </p>
                        <p className={styles["client_position"]}>
                          CEO | Meta.us
                        </p>
                      </a>
                      <div className={styles["client_bottom"]}>
                        {" "}
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              className={styles["text-start"] + " " + styles["mt-2"]}
              xs={24}
              md={12}
            >
              <div
                className={styles["rovo-testimony"]}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
              >
                <img
                  src="/rovo.svg"
                  alt="quote"
                  className={styles["client_icon"]}
                />
                <br></br>
                <div className={styles["client_rovo"]}>
                  <img
                    src="/quote.svg"
                    alt="quote"
                    className={styles["quote_icon"]}
                  />
                  <div className={styles["client_test"]}>
                    Rockship is a great choice for extended your development
                    team. With their talented developer pool, they helped us
                    release key features fast by supplementing our team. Their
                    work was top notch.
                    <div className={styles["client_info"]}>
                      <a
                        href="https://www.linkedin.com/in/ringular/"
                        target="_blank"
                      >
                        <p className={styles["client_name"]}>
                          <b>Ritesh</b>
                        </p>
                        <p className={styles["client_position"]}> CEO | Rovo</p>
                      </a>
                      <div className={styles["client_bottom"]}>
                        {" "}
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles["sybit-testimony"]}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
              >
                <img
                  src="/sybit.svg"
                  alt="quote"
                  className={styles["client_icon"]}
                />
                <br></br>
                <div className={styles["client_sybit"]}>
                  <img
                    src="/quote.svg"
                    alt="quote"
                    className={styles["quote_icon"]}
                  />
                  <div className={styles["client_test"]}>
                    The team at Rockship has played a key role in bringing You
                    Predict to market. Technically strong & driven, they've been
                    responsive to the shifting priorities that are innate to the
                    startup process.
                    <div className={styles["client_info"]}>
                      <a
                        href="https://www.linkedin.com/in/theo-sanders/"
                        target="_blank"
                      >
                        <p className={styles["client_name"]}>
                          {" "}
                          <b>Theo Sanders</b>
                        </p>
                        <p className={styles["client_position"]}>
                          CEO | Sybil Entertainment
                        </p>
                      </a>
                      <div className={styles["client_bottom"]}>
                        {" "}
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </CustomLayout>
  );
};

export default HomePage;
