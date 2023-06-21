import * as React from 'react';
import { Button, Col, Row, Input } from 'antd';
import constant from '@/constant/constant';
const { TextArea } = Input;

const colStyle = {
  padding: '8px 0',
};

const text = {
  colHeader: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '30px',
    marginBottom: 0,
  },
  colContent: {
    margin: 0,
    fontSize: '16px'
  },
  title: {
    color: constant.colors.black,
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '50px',
  },
};

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          color: constant.colors.white,
          backgroundColor: '#00218F',
          paddingTop: 40,
          marginBottom: 40,
          borderBottomRightRadius: '100px',
          borderBottomLeftRadius: '100px',
        }}
      >
        <p style={constant.bigText}>Bring Your <span style={{ color: constant.colors.green }}>Software Idea</span> To</p>
        <p style={constant.bigText}>Life In High Quality.</p>
        <p style={{ marginBottom: 0, lineHeight: '32px' }}>
          We provide many features that you can use cheaply and easily.
        </p>
        <p style={{ marginTop: 0, marginBottom: '48px' }}>
          Try it now and get an interesting promo
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Button
            style={{
              color: constant.colors.black,
              fontWeight: 800,
              fontSize: '16px',
              lineHeight: '16.8px',
              height: '49px',
              borderRadius: '2px',
              backgroundColor: constant.colors.green,
              marginRight: '20px'
            }}
          >
            START BUILDING
          </Button>
          <Button
            style={{
              color: constant.colors.white,
              lineHeight: '16.8px',
              height: '49px',
              borderRadius: '2px',
              backgroundColor: constant.colors.blue,
            }}
          >
            Watch A Demo
          </Button>
        </div>
        <div
          style={{
            minHeight: 300,
            backgroundColor: '#00218F',
            position: 'relative',
            borderBottomRightRadius: '100px',
            borderBottomLeftRadius: '100px',
          }}
        >
          <img
            src={'/chat.svg'}
            alt='chat'
            style={{
              position: 'absolute',
              transform: 'translate(-50%, 10%)'
            }}
          />
        </div>
      </div>
      <div style={{ ...text.title, marginTop: '400px' }}>
        More than 25,000 Clients Trust Us
      </div>
      <img
        src={'/clients.svg'}
        alt='clients'
        style={{
          marginTop: '48px',
          marginBottom: '48px',
        }}
      />
      <div
        style={{
          marginLeft: '120px',
          marginRight: '120px'
        }}
      >
        <Row>
          <Col span={6}>
            <div style={colStyle}>
              <img
                src={'/clock.svg'}
                alt='clock'
              />
              <p style={text.colHeader}>
                99.9% Up Time
              </p>
              <p style={text.colContent}>
                We Keep Your Web build Online 24x7x365.
              </p>
              <p style={text.colContent}>
                Downtime not only costs you lost visitors
              </p>
              <p style={text.colContent}>
                but also damages your reputation and
              </p>
              <p style={text.colContent}>
                search engine rankings.
              </p>
            </div>
          </Col>
          <Col span={6}>
            <div style={colStyle}>
              <img
                src={'/cloud.svg'}
                alt='cloud'
              />
              <p style={text.colHeader}>
                Blazing Fast Web Hosting
              </p>
              <p style={text.colContent}>
                We Keep Your Web build Online 24x7x365.
              </p>
              <p style={text.colContent}>
                Downtime not only costs you lost visitors
              </p>
              <p style={text.colContent}>
                but also damages your reputation and
              </p>
              <p style={text.colContent}>
                search engine rankings.
              </p>
            </div>
          </Col>
          <Col span={6}>
            <div style={colStyle}>
              <img
                src={'/pin.svg'}
                alt='pin'
              />
              <p style={text.colHeader}>
                Free SSL Certificates
              </p>
              <p style={text.colContent}>
                We Keep Your Web build Online 24x7x365.
              </p>
              <p style={text.colContent}>
                Downtime not only costs you lost visitors
              </p>
              <p style={text.colContent}>
                but also damages your reputation and
              </p>
              <p style={text.colContent}>
                search engine rankings.
              </p>
            </div>
          </Col>
          <Col span={6}>
            <div style={colStyle}>
              <img
                src={'/headphone.svg'}
                alt='headphone'
              />
              <p style={text.colHeader}>
                24x7 Friendly Support
              </p>
              <p style={text.colContent}>
                We Keep Your Web build Online 24x7x365.
              </p>
              <p style={text.colContent}>
                Downtime not only costs you lost visitors
              </p>
              <p style={text.colContent}>
                but also damages your reputation and
              </p>
              <p style={text.colContent}>
                search engine rankings.
              </p>
            </div>
          </Col>
        </Row>
        <div
          style={{
            marginTop: '103px',
            marginBottom: '51px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <p
            style={{
              justifyContent: 'flex-start',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '50px',
              margin: 0
            }}
          >
            Our product
          </p>
          <Button
            style={{
              color: constant.colors.black,
              fontWeight: 800,
              fontSize: '16px',
              lineHeight: '16.8px',
              height: '49px',
              borderRadius: '2px',
              backgroundColor: constant.colors.green,
              marginRight: '20px',
              justifyContent: 'flex-end',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            View all
            <img
              src='/arrow.svg'
              alt='arrow'
              style={{
                marginLeft: '10px'
              }}
            />
          </Button>
        </div>
        <Row>
          <Col
            style={{
              textAlign: 'start'
            }}
            span={12}
          >
            <img
              src='/isense.svg'
              alt='isense'
              style={{
                width: 'calc(100% - 72px)'
              }}
            />
            <p style={{ ...text.title, marginTop: '36px', marginBottom: '36px' }}>
              E-Pay App
            </p>
            <p style={{ margin: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p style={{ margin: 0 }}>
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p style={{ marginTop: 0, marginBottom: '64px' }}>
              text ever
            </p>
            <img
              src='/isense2.svg'
              alt='isense2'
              style={{
                width: 'calc(100% - 72px)',
              }}
            />
            <p style={{ ...text.title, marginTop: '36px', marginBottom: '36px' }}>
              E-Pay App
            </p>
            <p style={{ margin: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p style={{ margin: 0 }}>
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p style={{ marginTop: 0, marginBottom: '64px' }}>
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
              style={{
                width: 'calc(100% - 72px)',
              }}
            />
            <p style={{ ...text.title, marginTop: '36px', marginBottom: '36px' }}>
              E-Pay App
            </p>
            <p style={{ margin: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p style={{ margin: 0 }}>
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p style={{ marginTop: 0, marginBottom: '64px' }}>
              text ever
            </p>
            <img
              src='/isense.svg'
              alt='isense'
              style={{
                width: 'calc(100% - 72px)',
              }}
            />
            <p style={{ ...text.title, marginTop: '36px', marginBottom: '36px' }}>
              E-Pay App
            </p>
            <p style={{ margin: 0 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <p style={{ margin: 0 }}>
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <p style={{ marginTop: 0, marginBottom: '64px' }}>
              text ever
            </p>
          </Col>
        </Row>
        <div
          style={{
            marginBottom: '51px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <p
            style={{
              justifyContent: 'flex-start',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '50px',
              margin: 0,
            }}
          >
            About Us
          </p>
          <Button
            style={{
              color: constant.colors.black,
              fontWeight: 800,
              fontSize: '16px',
              lineHeight: '16.8px',
              height: '49px',
              borderRadius: '2px',
              backgroundColor: constant.colors.green,
              marginRight: '20px',
              justifyContent: 'flex-end',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Read more
            <img
              src='/arrow.svg'
              alt='arrow'
              style={{
                marginLeft: '10px'
              }}
            />
          </Button>
        </div>
        <div
          style={{
            position: 'relative',
            marginBottom: '100px'
          }}
        >
          <img
            src='/background_with_people.png'
            alt='bg-w-people'
            style={{
              width: '100%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '70%',
              bottom: '-10%',
              borderRadius: '7px',
              color: constant.colors.white,
              background: constant.colors.blue,
              textAlign: 'start',
              padding: '30px'
            }}
          >
            <p
              style={{
                fontWeight: 700,
                marginTop: 0
              }}
            >
              Lorem Ipsum is simply dummy
            </p>
            <p
              style={{
                margin: 0,
              }}
            >
              Lorem Ipsum is simply dummy text of
            </p>
            <p
              style={{
                margin: 0,
              }}
            >
              the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/bg_blue_white.svg')`,
          backgroundSize: 'cover'
        }}
      >
        <Row
          style={{
            textAlign: 'start',
            marginBottom: '100px',
            marginLeft: '120px',
            marginRight: '120px',
            paddingTop: '120px',
            paddingBottom: '120px'
          }}
        >
          <Col span={12}>
            <div style={text.title}>
              Contact us to help
            </div>
            <div style={text.title}>
              your business
            </div>
            <p
              style={{
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Email
            </p>
            <Input
              style={{
                maxWidth: '440px'
              }}
              placeholder="Enter your email"
            />
            <p
              style={{
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Message
            </p>
            <TextArea
              style={{
                maxWidth: '440px'
              }}
              placeholder="What are you say?"
            />
            <Button
              style={{
                color: constant.colors.black,
                fontWeight: 800,
                fontSize: '16px',
                lineHeight: '16.8px',
                height: '49px',
                width: '440px',
                borderRadius: '2px',
                backgroundColor: constant.colors.green,
                marginRight: '20px',
                marginTop: '24px'
              }}
            >
              START BUILDING
            </Button>
          </Col>
          <Col span={12}>
            <div style={colStyle}>
              <img
                src={'/dashboard.png'}
                alt='db'
                width={'100%'}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginLeft: '308px',
          marginRight: '308px'
        }}
      >
        <Row>
          <Col
            style={{
              textAlign: 'start'
            }}
            span={12}>
            <p style={{ ...text.title, marginTop: 0, marginBottom: '20px' }}>
              Real Stories from
            </p>
            <p style={{ ...text.title, margin: 0 }}>
              Real Customers
            </p>
            <p
              style={{
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Get inspired by these stories.
            </p>
            <div
              style={{
                textAlign: 'end'
              }}
            >
              <img
                src={'/quote3.svg'}
                alt='quote3'
              />
            </div>
          </Col>
          <Col
            style={{
              textAlign: 'start',
              marginTop: '50px'
            }}
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
    </div>
  );
};

export default HomePage;