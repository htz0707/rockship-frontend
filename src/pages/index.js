import * as React from 'react';
import { Button, Col, Row, Input } from 'antd';
import CustomLayout from '@/components/layout';
import Chatbot from '@/components/chatbot';
import styles from '@/styles/index.module.scss';

const { TextArea } = Input;

const HomePage = () => {

  return (
    <CustomLayout link={'head'}>
      <div className={styles['homepage']}>
        <div className={styles['box-1']}>
          <p className={styles['homepage-big-text']}>Bring Your <span>Software Idea</span> To</p>
          <p className={styles['homepage-big-text']}>Life In High Quality.</p>
          <p className={styles['homepage-small-text']}>
            We provide many features that you can use cheaply and easily.
          </p>
          <p>
            Try it now and get an interesting promo
          </p>
          <div className={styles['button-group']}>
            <Button className={styles['homepage-button-1']}
            >
              START BUILDING
            </Button>
            <Button className={styles['homepage-button-2']}>
              Watch A Demo
            </Button>
          </div>
          <div className={styles['box-relative']}>
            <Chatbot />
          </div>
        </div>
        <div className={styles['text-title']}>
          More than 25,000 Clients Trust Us
        </div>
        <img
          src={'/clients.svg'}
          alt='clients'
          className={styles['clients-image']}
        />
        <div className={styles['box-2']}>
          <Row>
            <Col span={6}>
              <div className={styles['col-padding']}>
                <img
                  src={'/clock.svg'}
                  alt='clock'
                />
                <p className={styles['text-col-header']}>
                  Development automation
                </p>
                <p className={styles['text-col-content']}>
                  Our ultimate mission is to fully automate software development work, saving our clients millions of dollar in development cost.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles['col-padding']}>
                <img
                  src={'/cloud.svg'}
                  alt='cloud'
                />
                <p className={styles['text-col-header']}>
                  Accumulative Expertise
                </p>
                <p className={styles['text-col-content']}>
                  We have accumulated six-plus years of software development experience and organized our expertise into reusable modules to save time and effort for our clients.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles['col-padding']}>
                <img
                  src={'/pin.svg'}
                  alt='pin'
                />
                <p className={styles['text-col-header']}>
                  Frontier Tech & Cloud Native
                </p>
                <p className={styles['text-col-content']}>
                  We leverage the latest technologies to deliver our clients the most powerful capabilities, allowing them to stay ahead of the competition. Additionally, we utilize Cloud Native solutions to ensure the systems can easily scale.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles['col-padding']}>
                <img
                  src={'/headphone.svg'}
                  alt='headphone'
                />
                <p className={styles['text-col-header']}>
                  24x7 Friendly Support
                </p>
                <p className={styles['text-col-content']}>
                  Our developer community is versatile in various technology stacks, enabling us to solve diverse set o problems.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles['box-3']}>
            <p className={styles['title']}>
              Our Solutions
            </p>
            <Row className={styles['contents']}>
              <Col
                className={styles['text-start']}
                span={14}
              >
                <p className={styles['header']}>
                  BUILD SOFTWARES FAST WITH OUR AI
                </p>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    We have done thousands+ of software features and can quickly build new features for you with accurate estimation
                  </p>
                </div>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    We made some important automation in our process: idea to requirements, technical design to codes, tests from specifications
                  </p>
                </div>
                <Button className={styles['homepage-button-1'] + ' ' + styles['arrow-button']}>
                  START BUILDING
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                  />
                </Button>
              </Col>
              <Col
                span={10}
              >
                <img
                  src='/solution.svg'
                  alt='solution'
                />
              </Col>
            </Row>
            <Row className={styles['contents']}>
              <Col
                className={styles['pr-2']}
                span={10}
              >
                <img
                  src='/service.svg'
                  alt='service'
                />
              </Col>
              <Col
                className={styles['text-start']}
                span={14}
              >
                <p className={styles['header']}>
                  TEAM AS A SERVICE
                </p>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    Leverage our platform to hire on-demand developers to get the top talents from different countries to solve your tech problems
                  </p>
                </div>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    We provide tools and frameworks for team to deliver work progressively for our clients
                  </p>
                </div>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    Our infrastructure & AI tools enable us to train, support and grow the developers continuously
                  </p>
                </div>
                <Button className={styles['homepage-button-1'] + ' ' + styles['arrow-button']}>
                  START BUILDING
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                  />
                </Button>
              </Col>
            </Row>
            <Row className={styles['contents']}>
              <Col
                className={styles['text-start']}
                span={14}
              >
                <p className={styles['header']}>
                  DATA & MLOPS
                </p>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    Data Collection via scraping & convert unstructured data to structured data by capturing key information
                  </p>
                </div>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    Architecture the Data Pipeline & Data Warehouse for your organization from setting up Airflow, data modeling for Data Warehouse and Data Mart according to your business requirements
                  </p>
                </div>
                <div className={styles['line']}>
                  <img
                    src={'/stick.svg'}
                    alt='stick'
                  />
                  <p>
                    Build and maintain real-time data architecture (Feature Store, ML Model Store) to serve business critical application required to have the fresh updates of user information: recommendation system, ads bidding
                  </p>
                </div>
                <Button className={styles['homepage-button-1'] + ' ' + styles['arrow-button']}>
                  START BUILDING
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                  />
                </Button>
              </Col>
              <Col
                span={10}
              >
                <img
                  src='/solution.svg'
                  alt='solution'
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles['box-6']}>
          <Row className={styles['custom-row']}>
            <Col span={14}>
              <div className={styles['text-title']}>
                WE BUILD FASTER WITH OUR AI & AUTOMATION!
              </div>
            </Col>
            <Col span={10}>
              <p className={styles['custom-label']}>
                Email
              </p>
              <Input
                className={styles['custom-input']}
                placeholder="Enter your email"
              />
              <p className={styles['custom-label']}>
                Message
              </p>
              <TextArea
                className={styles['custom-input']}
                placeholder="What are you say?"
              />
              <Button className={styles['homepage-button-1'] + ' ' + styles['custom-button']}>
                START BUILDING
              </Button>
            </Col>
          </Row>
        </div>
        <div className={styles['box-7']}>
          <Row>
            <Col
              className={styles['text-start']}
              span={12}>
              <p className={styles['text-title'] + ' ' + styles['title-1']}>
                Real Stories from
              </p>
              <p className={styles['text-title'] + ' ' + styles['title-2']}>
                Real Customers
              </p>
              <p className={styles['content']}>
                Get inspired by these stories.
              </p>
              <div className={styles['text-end']}>
                <img
                  src={'/quote3.svg'}
                  alt='quote3'
                />
              </div>
            </Col>
            <Col className={styles['text-start'] + ' ' + styles['mt-2']}
              span={12}>
              <img
                src={'/quote1.svg'}
                alt='quote1'
              />
              <img
                src={'/quote2.svg'}
                alt='quote2'
              />
            </Col>
          </Row>
        </div>
      </div >
    </CustomLayout>
  );
};

export default HomePage;