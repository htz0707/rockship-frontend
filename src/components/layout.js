import { Layout, Divider, Button } from 'antd';
import styles from '../styles/layout.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color: '#fff',
  backgroundColor: '#00218F',
  display: 'flex',
  alignItems: 'center'
};
const contentStyle = {
  textAlign: 'center',
  color: '#fff',
};
const footerStyle = {
  color: '#fff',
  backgroundColor: '#00218F',
};
const titleStyle = {
  color: '#FFFFFF',
  marginLeft: 20,
  marginRight: 20,
};

const MyLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header style={headerStyle}>
        <Image src={'/rockship.svg'} height={50} width={100} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Link
            style={titleStyle}
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
                color: '#1F1F1F',
                fontWeight: 800,
                padding: '16 20 16 20',
                borderRadius: '2px',
                backgroundColor: '#5FFE9F'
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
          <Image src={'/rockship.svg'} height={50} width={100} />
          <p>contact@rockship.co</p>
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