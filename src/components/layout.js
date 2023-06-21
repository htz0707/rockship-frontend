import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Divider, Button } from 'antd';
import constant from '@/constant/constant';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  backgroundColor: '#00218F',
  display: 'flex',
  alignItems: 'center',
  padding: '55px 120px',
  fontSize: '16px',
};
const contentStyle = {
  minHeight: '100vh',
  textAlign: 'center',
  fontSize: '16px',
};
const footerStyle = {
  color: constant.colors.white,
  backgroundColor: '#00218F',
  fontSize: '16px'
};
const titleStyle = {
  color: constant.colors.white,
  marginLeft: 20,
  marginRight: 20,
};

const MyLayout = ({ children }) => {
  return (
    <Layout
      style={{ fontSize: '16px' }}
    >
      <Header style={headerStyle}>
        <Image src={'/rockship.svg'} alt='rockship' width={196} height={50} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Link
            style={{ ...titleStyle, fontWeight: 700 }}
            href='/'
          >
            Home
          </Link>
          <Link
            style={titleStyle}
            href='/'
          >
            Product
          </Link>
          <Link
            style={titleStyle}
            href='/'
          >
            FAQ
          </Link>
          <Link
            style={titleStyle}
            href='/'
          >
            Blog
          </Link>
          <Link
            style={titleStyle}
            href='/'
          >
            About Us
          </Link>
          <div>
            <Button
              style={{
                color: constant.colors.black,
                fontWeight: 800,
                fontSize: '16px',
                lineHeight: '16.8px',
                height: '49px',
                borderRadius: '2px',
                backgroundColor: constant.colors.green
              }}
            >
              START BUILDING
            </Button>
          </div>
        </div>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>
        <div>
          <Image src={'/rockship.svg'} alt='rockship' width={196} height={50} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              // justifyContent: 'center'
            }}
          >
            <img src='/mail.svg' alt='mail' style={{ marginRight: '10px' }}></img><p>contact@rockship.co</p>
          </div>
          <p>+1 234 456 678 89</p>
        </div>
        <Divider
          style={{
            backgroundColor: '#FFFFFF'
          }}
        />
        <p
          style={{
            textAlign: 'center'
          }}
        >
          Copyright 2022 Rockship.co all rights reserved
        </p>
      </Footer>
    </Layout>
  );
};

export default MyLayout;