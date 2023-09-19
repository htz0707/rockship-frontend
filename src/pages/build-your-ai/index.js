"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Button } from "antd";
import CustomLayout from "@/components/Layout";
import MetaTags from "@/components/MetaTags";

const buildYourAI = () => {
  return (
    <>
      <MetaTags
        title={"Rockship | Build Your AI"}
        description={
          "Build your app in 3 weeks with our AI-assisted code generation"
        }
        image={"/build-your-ai-thumb.png"}
      />
      <CustomLayout link={"build-your-ai"}>
        <div className={styles["build-your-ai"]}>
          <div className={styles["box-1"]}>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} className={styles["box-1-left"]}>
                <p className={styles["grey-text"]}>
                  {" "}
                  ROCKSHIP AI AS A SERVICE{" "}
                </p>
                <h3> Build Your AI with Rockship</h3>
                <p className={styles["sub-text"]}>
                  {" "}
                  We customize solutions from the cutting edge AI technology to
                  solve your business requirements.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/rockship-co/30min-free-consulting",
                      "_blank"
                    )
                  }
                  className={styles["homepage-button-1"]}
                  id="buildai-call-book-a-call"
                >
                  Talk with our experts
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className={styles["arrow-icon"]}
                  />
                </Button>
              </Col>
              <Col xs={24} sm={12}>
                <img
                  src="/robot-hands.png"
                  alt="robot-hands"
                  className={styles["robot-hands"]}
                />
              </Col>
            </Row>
          </div>
          <div className={styles["box-2"]}>
            <div className={styles["box-2-color"]}>
              <h3>Key Information Extraction</h3>
              <div className={styles["col-style"]}>
                <p className={styles["sub-text"]}>
                  Extract <i>unstructured</i> data from various documents like
                  financial statements, CVs, invoices & receipts to run further
                  analysis or ingest the data into your <i>structured</i> data
                  pipeline and do further analysis.
                </p>
              </div>
              <img className={styles["box-2-image"]} src="/key-info-extract.png" alt="key-info-extract" />
            </div>
          </div>
          <div className={styles["box-3"]}>
            <h3>AI Chatbots</h3>
            <Row>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 12, order: 2 }}
                className={styles["box-3-left"]}
              >
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Ingest your company specific knowledge as the context to LLM
                    to automate customer service tasks or provide consultation.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Implement caching of requests to LLMs to help you save cost
                    on your chatbot.
                  </p>
                </div>
                <div className={styles["contents"]}>
                  <img src="/tick.svg" alt="tick" />
                  <p>
                    Chatbot system is able to plug in various LLM backend for
                    question types.
                  </p>
                </div>
              </Col>
              <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 1 }}>
                <img
                  src="/ai-chat-visualizer.png"
                  alt="ai-chat-bot"
                  className={styles["col-image"]}
                />
              </Col>
            </Row>
          </div>
          <div className={styles["box-4"]}>
            <Row className={styles["box-GenAI"]}>
              <Col xs={24} sm={24}>
                <h3>GenAI For Content Creation</h3>
                <p>
                  Rockship helps companies build full-fledged content creation
                  pipeline from research, ideation to publication. Real data and
                  insights collected from running the content campaign can
                  improve the content research project. Our system also support
                  various formats of the content to be suitable to be listed on
                  the communities in various social media platforms.
                </p>
              </Col>
              <Col xs={0} sm={24}>
                <img src="/genai-desktop.png" alt="genai-content-creation" />
              </Col>
              <Col xs={24} sm={0}>
                <img src="/genAI-mobile.png" alt="genai-content-creation" />
              </Col>
            </Row>
          </div>
          <div className={styles["box-AI-Stack"]}>
              <h3>Rockship Unified AI Stack</h3>
              <img src="/ai-stack.png" alt="unified-ai-stack" />
            </div>
          <div className={styles["box-5"]}>
            <Row className={styles["box-5-row"]}>
              <Col xs={3} sm={3}>
                <img src="/twitter-original.svg" />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/github-original.svg"
                  className={styles["github-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/isense-original.svg"
                  className={styles["isense-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/linkedin-original.svg"
                  className={styles["linkedin-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/facebook-original.svg"
                  className={styles["fb-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/tedez-original.svg"
                  className={styles["tedez-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/figma-original.svg"
                  className={styles["figma-logo"]}
                />
              </Col>
              <Col xs={3} sm={3}>
                <img
                  src="/worknow-original.svg"
                  className={styles["worknow-logo"]}
                />
              </Col>
            </Row>
          </div>
          <div className={styles["box-6"]}>
            <Row gutter={[24, 24]}>
              <Col xs={8} sm={8}>
                <h1>5+</h1>
                <p>Industries</p>
              </Col>
              <Col xs={8} sm={8}>
                <h1>10+</h1>
                <p>AI Prototypes</p>
              </Col>
              <Col xs={8} sm={8}>
                <h1>1+</h1>
                <p>Hackathons</p>
              </Col>
            </Row>
          </div>
          <div className={styles["consultant"]}>
            <h3>Solution Architect Consultants</h3>
            <div className={styles["row-consultant"]}>
              <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}>
                <Col
                  xs={{ order: 1, span: 12 }}
                  sm={{ order: 1, span: 4 }}
                  lg={{ order: 1, span: 4 }}
                >
                  <img src="/ngoc-tran.png" alt="ngoc-tran" />
                </Col>
                <Col
                  xs={{ order: 3, span: 12 }}
                  sm={{ order: 1, span: 8 }}
                  lg={{ order: 1, span: 8 }}
                  className={styles["consultant-info"]}
                >
                  <p className={styles["name"]}>Ngoc Tran</p>
                  <p className={styles["position"]}>CEO Rockship</p>
                  <p className={styles["description"]}>
                    11 Years Of Experience
                  </p>
                  <p className={styles["tag-box"]}>
                    <span className={styles["tag"]}>E-commerce</span>
                    <span className={styles["tag"]}>FinTech</span>
                    <span className={styles["tag"]}>HRTech</span>
                  </p>
                </Col>
                <Col
                  xs={{ order: 2, span: 12 }}
                  sm={{ order: 1, span: 4 }}
                  lg={{ order: 1, span: 4 }}
                >
                  <img src="/quan-do.png" alt="quan-do" />
                </Col>
                <Col
                  xs={{ order: 4, span: 12 }}
                  sm={{ order: 1, span: 8 }}
                  lg={{ order: 1, span: 8 }}
                  className={styles["consultant-info"]}
                >
                  <p className={styles["name"]}>Quan Do</p>
                  <p className={styles["position"]}>Head Of Engineering</p>
                  <p className={styles["description"]}>9 Years Of Experience</p>
                  <p className={styles["tag-box"]}>
                    <span className={styles["tag"]}>EdTech</span>
                    <span className={styles["tag"]}>eSports</span>
                    <span className={styles["tag"]}>Blockchain</span>
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CustomLayout>
    </>
  );
};
export default buildYourAI;

export const getStaticProps = async () => {
  return {
    props: {
      overwriteMetaTag: true,
    },
  };
};
