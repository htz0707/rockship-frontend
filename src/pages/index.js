"use client";
import React, { useEffect } from "react";
import { Button, Col, Row, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/index.module.scss";
import useTrackingBrowser from "@/hooks/useTrackingBrowser";
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
    localStorage.setItem('itemDetail', JSON.stringify(item))
  };

  useEffect(() => {
    useTrackingBrowser("HomePage");
  }, []);

  return (
    <CustomLayout link={"solutions"}>
      <div className={styles["homepage"] + " " + styles["fonts"]}>
        <div className={styles["case-studies"]}>
          <h3>Case studies</h3>
          <Link href={"/case-studies"}>View all case studies</Link>
        </div>

        <Row gutter={[24, 24]} className={styles["case-studies-row"]}>
          {caseStudies?.map((item, index) => {
            return (
              <Col xs={24} sm={12} md={8} key={item.id || index}>
                <Card
                  title={item.title}
                  imageSrc={item.src}
                  description={item.description}
                  lsValue={item.hashtags}
                  handleOnClickCard={() => handleOnClickCard(item)}
                />
              </Col>
            );
          })}
        </Row>

        <div className={styles["box-2"]}>
          <div className={styles["text-title"]}>
            Why Companies Partner With Us?
          </div>
          <Row>
            <Col className={styles["col-style"]} xs={24} sm={24} md={8}>
              <div className={styles["col-padding"]}>
                <img src={"/clock.svg"} alt="clock" />
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
                <img src={"/cloud.svg"} alt="cloud" />
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
                <img src={"/pin.svg"} alt="pin" />
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
            <p className={styles["text-title"]}>Our Solutions</p>
            <Row align={"center"} className={styles["row"]}>
              <Col sm={24} md={0}>
                <img
                  src="/solutions.svg"
                  alt="solutions"
                  className={styles["col-image"]}
                />
              </Col>
              <Col className={styles["col-box"]} sm={24} md={13}>
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
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
                  href="#chat_bot"
                >
                  BROWSE OUR MODULES
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
              <Col xs={0} md={11}>
                <img 
                src="/solutions.svg" 
                alt="solutions"
                className={styles["col-image"]}
                />
              </Col>
            </Row>
            <Row align={"center"} className={styles["row"]}>
              <Col sm={24} md={11}>
                <img
                  src="/services.svg"
                  alt="services"
                  className={styles["col-image"]}
                />
              </Col>
              <Col
                className={styles["col-box"] + " " + styles["col-box-right"]}
                sm={24}
                md={13}
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
                  onClick={() => router.push("/talents")}
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
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
            <Row align={"center"} className={styles["row"]} >
              <Col sm={24} md={0}>
                <img
                  src="/data.svg"
                  alt="data"
                  className={styles["col-image"]}
                />
              </Col>
              <Col className={styles["col-box"]} sm={24} md={13}>
                <p className={styles["title"]}>DATA & MLOPS</p>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Data Collection via scraping & convert unstructured data to
                    structured data by capturing key information.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Architecture the Data Pipeline & Data Warehouse for your
                    organization: setting up <b>ETL process</b>, data modeling
                    for <b>Data Warehouse</b>, <b>Data Lake </b>
                    and <b>Data Mart</b>, build beautiful <b>visualizations</b>.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Build and maintain real-time data architecture (Feature
                    Store, ML Model Store) to serve business critical
                    application required to have the fresh updates of user
                    information: recommendation system, ads bidding.
                  </p>
                </div>
                <Button
                  className={
                    styles["homepage-button-1"] + " " + styles["custom-button"]
                  }
                >
                  ARCHITECT WITH US
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
              <Col xs={0} md={11}>
                <img 
                src="/data.svg" 
                alt="data" 
                className={styles["col-image"]}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles["box-6"]}>
          <Row className={styles["custom-row"]}>
            <Col xs={24} md={16}>
              <p className={styles["title"]}>
                WE BUILD FASTER WITH OUR <br></br>
                AI & AUTOMATION
              </p>
            </Col>
            <Col xs={24} md={8} className={styles["custom-col"]}>
              <p className={styles["custom-label"]}>Email</p>
              <Input
                className={styles["custom-input"]}
                placeholder="Enter your email"
              />
              <p className={styles["custom-label"]}>Message</p>
              <textarea placeholder="What are you say?" />
              <Button
                className={
                  styles["homepage-button-1"] + " " + styles["custom-button-1"]
                }
              >
                CONTACT US
              </Button>
            </Col>
          </Row>
        </div>
        <div className={styles["box-7"]}>
          <Row>
            <Col className={styles["text-start"]} xs={24} md={12}>
              <div>
                <p className={styles["text-title"] + " " + styles["title-1"]}>
                  Real Stories from
                </p>
                <p className={styles["text-title"] + " " + styles["title-2"]}>
                  Real Customers
                </p>
              </div>

              <p className={styles["content"]}>
                Get inspired by these stories.
              </p>
              <div className={styles["text-end"]}>
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
              <div className={styles["rovo-testimony"]}>
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
              <div className={styles["sybit-testimony"]}>
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
