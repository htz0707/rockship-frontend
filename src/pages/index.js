import * as React from 'react';
import { Button, Col, Row, Input } from 'antd';
import CustomLayout from '@/components/layout';
// import '@/styles/global.css';
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
            <img
              src={'/chat.svg'}
              alt='chat'
            />
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
                  99.9% Up Time
                </p>
                <p className={styles['text-col-content']}>
                  We Keep Your Web build Online 24x7x365.
                </p>
                <p className={styles['text-col-content']}>
                  Downtime not only costs you lost visitors
                </p>
                <p className={styles['text-col-content']}>
                  but also damages your reputation and
                </p>
                <p className={styles['text-col-content']}>
                  search engine rankings.
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
                  Blazing Fast Web Hosting
                </p>
                <p className={styles['text-col-content']}>
                  We Keep Your Web build Online 24x7x365.
                </p>
                <p className={styles['text-col-content']}>
                  Downtime not only costs you lost visitors
                </p>
                <p className={styles['text-col-content']}>
                  but also damages your reputation and
                </p>
                <p className={styles['text-col-content']}>
                  search engine rankings.
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
                  Free SSL Certificates
                </p>
                <p className={styles['text-col-content']}>
                  We Keep Your Web build Online 24x7x365.
                </p>
                <p className={styles['text-col-content']}>
                  Downtime not only costs you lost visitors
                </p>
                <p className={styles['text-col-content']}>
                  but also damages your reputation and
                </p>
                <p className={styles['text-col-content']}>
                  search engine rankings.
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
                  We Keep Your Web build Online 24x7x365.
                </p>
                <p className={styles['text-col-content']}>
                  Downtime not only costs you lost visitors
                </p>
                <p className={styles['text-col-content']}>
                  but also damages your reputation and
                </p>
                <p className={styles['text-col-content']}>
                  search engine rankings.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles['box-3']}>
            <p className={styles['title']}>
              Our product
            </p>
            <Button className={styles['homepage-button-1'] + ' ' + styles['arrow-button']}>
              View all
              <img
                src='/arrow.svg'
                alt='arrow'
                className={styles['arrow-icon']}
              />
            </Button>
          </div>
          <Row>
            <Col
              className={styles['text-start']}
              span={12}
            >
              <img
                src='/isense.svg'
                alt='isense'
                className={styles['app-image']}
              />
              <p className={styles['text-title'] + ' ' + styles['text-title-app']}>
                E-Pay App
              </p>
              <p className={styles['text-app']}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <p className={styles['text-app']}>
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className={styles['text-app'] + ' ' + styles['text-app-last']}>
                text ever
              </p>
              <img
                src='/isense2.svg'
                alt='isense2'
                className={styles['app-image']}
              />
              <p className={styles['text-title'] + ' ' + styles['text-title-app']}>
                E-Pay App
              </p>
              <p className={styles['text-app']}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <p className={styles['text-app']}>
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className={styles['text-app'] + ' ' + styles['text-app-last']}>
                text ever
              </p>
            </Col>
            <Col
              style={{
                textAlign: 'start',
              }}
              span={12}
            >
              <img
                src='/isense2.svg'
                alt='isense2'
                className={styles['app-image']}
              />
              <p className={styles['text-title'] + ' ' + styles['text-title-app']}>
                E-Pay App
              </p>
              <p className={styles['text-app']}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <p className={styles['text-app']}>
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className={styles['text-app'] + ' ' + styles['text-app-last']}>
                text ever
              </p>
              <img
                src='/isense.svg'
                alt='isense'
                className={styles['app-image']}
              />
              <p className={styles['text-title'] + ' ' + styles['text-title-app']}>
                E-Pay App
              </p>
              <p className={styles['text-app']}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
              <p className={styles['text-app']}>
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className={styles['text-app'] + ' ' + styles['text-app-last']}>
                text ever
              </p>
            </Col>
          </Row>
          <div className={styles['box-4']}>
            <p className={styles['title']}>
              About Us
            </p>
            <Button className={styles['homepage-button-1'] + ' ' + styles['arrow-button']}>
              Read more
              <img
                src='/arrow.svg'
                alt='arrow'
                className={styles['arrow-icon']}
              />
            </Button>
          </div>
          <div className={styles['box-5']}>
            <img
              src='/background_with_people.png'
              alt='bg-w-people'
            />
            <div>
              <p className={styles['header']}>
                Lorem Ipsum is simply dummy
              </p>
              <p className={styles['content']}>
                Lorem Ipsum is simply dummy text of
              </p>
              <p className={styles['content']}>
                the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className={styles['box-6']}>
          <Row className={styles['custom-row']}>
            <Col span={12}>
              <div className={styles['text-title']}>
                Contact us to help
              </div>
              <div className={styles['text-title']}>
                your business
              </div>
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
            <Col span={12}>
              <div className={styles['col-padding']}>
                <img
                  src={'/dashboard.png'}
                  alt='db'
                />
              </div>
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