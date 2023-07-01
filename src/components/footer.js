import * as React from 'react';
import Image from 'next/image';
import { Layout, Divider, Row, Col, Button} from 'antd';
import {Input} from 'antd';
import styles from '@/styles/footer.module.scss'

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className={styles['custom-footer']}>
      <Row>
        <Col span={8}>
          <Image src={'/rockship.svg'} alt='rockship' width={196} height={50} />
          <a href = "mailto:ngoc@rockship.co">
          <div className={styles['group-contact']}>
            <img src='/mail.svg' alt='mail' /><div>ngoc@rockship.co</div>
          </div>
          </a>
          <a href = "https://wa.me/6584298483">
          <div className={styles['group-contact']}>
            <img src='/phone.svg' alt='phone' /><div >+65 8429 8483</div>
          </div>
          </a>
          <a href = "https://www.linkedin.com/company/rockship/">
          <div className={styles['group-contact']}>
            <img src='/linkedin-3.svg' alt='linkedin' /><div id = "contact">   Rockship</div>   
          </div>
          </a> 
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
              <Input className = {styles['your_email']}
              placeholder = "Your Email" 
              />
            </Col>
            <Col span={12}>
              <Button>SUBSCRIBE</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider className={styles['bg-white']} />
      <p className={styles['text-center']}>
      © Copyright 2023 Rockship.co. All rights reserved
      </p>
    </Footer>
  )
}

export default CustomFooter;