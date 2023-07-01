import * as React from 'react';
import {Button, Col, Row, Input } from 'antd';
import CustomLayout from '@/components/layout';
import styles from '@/styles/index.module.scss';


const { TextArea } = Input;

const HomePage = () => {

  return (
    
    <CustomLayout link={'solutions'}>
    
      <div className={styles['homepage'] + ' ' + styles['fonts'] } >
        <div className={styles['text-title']}>
          Technologies
        </div>
        <img
          src={'/technologies.svg'}
          alt='technologies'
          className={styles['clients-image']}
        />
        <div className={styles['box-2']}>
        <div className={styles['text-title']}>
        Why Companies Partner With Us?
        </div>
          <Row>
            <Col className={styles['col-style']} span={8}>
              <div className={styles['col-padding']}>
                <img
                  src={'/clock.svg'}
                  alt='clock'
                />
                <p className={styles['text-col-header']}>
                  Development automation
                </p>
                <p className={styles['text-col-content']}>
                  Our ultimate mission is to fully
                  automate software development
                  work, saving our clients millions of
                  dollar in development cost.
                </p>
              </div>
            </Col>
            <Col className={styles['col-style']} span={8}>
              <div className={styles['col-padding']}>
                <img
                  src={'/cloud.svg'}
                  alt='cloud'
                />
                <p className={styles['text-col-header']}>
                  Accumulative Expertise & Diverse Capabilities
                </p>
                <p className={styles['text-col-content']}>
                  We have accumulated ten-plus years
                  of software development experience for our clients
                  and organized our expertises into
                  reusable modules to save time and
                  effort for new developments.
                </p>
              </div>
            </Col>
            <Col className={styles['col-style']} span={8}>
              <div className={styles['col-padding']}>
                <img
                  src={'/pin.svg'}
                  alt='pin'
                />
                <p className={styles['text-col-header']}>
                  Frontier Tech & Cloud Native
                </p>
                <p className={styles['text-col-content']}>
                  We are always ahead of the technologies
                  to deliver our partners the most
                  powerful capabilities, allowing
                  them to stay ahead of the competition.
                  Additionally, we embrace Cloud Native
                  solutions to ensure the systems can
                  scale when our clients need.
                </p>
              </div>
            </Col>
          </Row>
          <div id = "Rockship_Solutions" className={styles['box-3']}>
            <p className={styles['title']}>
              Our Solutions
            </p>
            <Row >
              <Col className={styles['col-box']} span={13}>
                <p className={styles['title']}>
                  BUILD SOFTWARES FAST WITH OUR AI
                </p>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    We have done 1000+ of software features and can quickly build
                    new features for you with accurate estimation
                  </p>
                </div>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    We made some important automation in our process: idea to
                    requirements, technical design to codes, tests from specifications
                  </p>
                </div>
                <Button 
                className={styles['homepage-button-1'] + ' ' + styles['custom-button']}
                href = "#chat_bot"
                >
                  START BUILDING
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                    
                  />
                </Button>
              </Col>
              <Col span={11}>
                <img src='/solutions.svg' alt='solutions' />
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <img src='/services.svg' alt='services' />
              </Col>
              <Col className={styles['col-box'] + ' ' + styles['col-box-right']} span={13}>
                <p className={styles['title']}>
                  TEAM AS A SERVICE
                </p>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    Leverage our platform to hire on-demand developers to get the top talents
                    from different countries to solve your tech problems
                  </p>
                </div>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    We provide tools and frameworks for team to deliver work
                    progressively for our clients
                  </p>
                </div>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    Our infrastructure & AI tools enable us to train, support and grow the
                    developers continuously
                  </p>
                </div>
                <Button className={styles['homepage-button-1'] + ' ' + styles['custom-button']}>
                  HIRE TALENTS
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className={styles['col-box']} span={13}>
                <p className={styles['title']}>
                  DATA & MLOPS
                </p>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    Data Collection via scraping & convert unstructured data to
                    structured data by capturing key information
                  </p>
                </div>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    Architecture the Data Pipeline & Data Warehouse for your organization
                    from setting up Airflow, data modeling for Data Warehouse and Data
                    Mart according to your business requirements
                  </p>
                </div>
                <div className={styles['contents']}>
                  <img src='/tick.svg' alt='tick' />
                  <p>
                    Build and maintain real-time data architecture (Feature Store, ML
                    Model Store) to serve business critical application required to have
                    the fresh updates of user information: recommendation system, ads
                    bidding
                  </p>
                </div>
                <Button className={styles['homepage-button-1'] + ' ' + styles['custom-button']}>
                  ARCHITECT WITH US
                  <img
                    src='/arrow.svg'
                    alt='arrow'
                    className={styles['arrow-icon']}
                  />
                </Button>
              </Col>
              <Col span={11}>
                <img src='/data.svg' alt='data' />
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles['box-6']}>
          <Row className={styles['custom-row']}>
            <Col span={16}>
              <p className={styles['title']}>
                WE BUILD FASTER WITH OUR <br></br>
              AI & AUTOMATION
              </p>
            </Col>
            <Col span={8}>
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
              <textarea 
                placeholder="What are you say?"
              />
              <Button className={styles['homepage-button-1'] + ' ' + styles['custom-button-1']}>
                GET IN TOUCH
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
                  src={'/meta_test.svg'}
                  alt='quote3'
                />
              </div>
            </Col>
            <Col className={styles['text-start'] + ' ' + styles['mt-2']}
              span={12}>
              <img
                src={'/rovo_test.svg'}
                alt='quote1'
              />
              <img
                src={'/sybit_test.svg'}
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