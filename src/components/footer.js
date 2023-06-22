import * as React from 'react';
import Image from 'next/image';
import { Layout, Divider, Row, Col, Button } from 'antd';
import styles from '@/styles/footer.module.scss'

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className={styles['custom-footer']}>
      <Row>
        <Col span={8}>
          <Image src={'/rockship.svg'} alt='rockship' width={196} height={50} />
          <div className={styles['group-contact']}>
            <img src='/mail.svg' alt='mail' /><div>contact@rockship.co</div>
          </div>
          <div className={styles['group-contact']}>
            <img src='/phone.svg' alt='phone' /><div>+1 234 456 678 89</div>
          </div>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <p className={styles['title']}>
                Links
              </p>
              <p className={styles['content']}>
                Home
              </p>
              <p className={styles['content']}>
                About Us
              </p>
              <p className={styles['content']}>
                Our Solutions
              </p>
              <p className={styles['content']}>
                Case Studies
              </p>
            </Col>
            <Col span={12}>
              <p className={styles['title']}>
                Legal
              </p>
              <p className={styles['content']}>
                Terms Of Use
              </p>
              <p className={styles['content']}>
                Privacy Policy
              </p>
              <p className={styles['content']}>
                Cookie Policy
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <p className={styles['title']}>
            Newsletter
          </p>
          <Row className={styles['button-group']}>
            <Col span={12}>
              <p>Your Email</p>
            </Col>
            <Col span={12}>
              <Button>SUBSCRIBE</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider className={styles['bg-white']} />
      <p className={styles['text-center']}>
        Copyright 2022 Rockship.co all rights reserved
      </p>
    </Footer>
  )
}

export default CustomFooter;