import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Button } from 'antd';
import Chatbot from './chatbot';
import styles from '@/styles/header.module.scss';

const { Header } = Layout;

const CustomHeader = ({ link }) => {
  return (
    <Header className={styles['custom-header']}>
      <div  className={styles['custom-header-bar']}>
        <Image src={'/rockship.svg'} alt='rockship' width={196} height={42}/>
        <div  className={styles['custom-header-container' ]}>
          <Link
            className={styles['text-header'] + (link === 'solutions' ? ' ' + styles['font-700'] : '')}
            href = '#Rockship_Solutions'
            scroll = {false}
          >
            Our Solutions
          </Link>
          <Link
            className={styles['text-header'] + (link === 'studies' ? ' ' + styles['font-700'] : '')}
            href='/'
          >
            Case Studies
          </Link>
          <Link
            className={styles['text-header'] + (link === 'about' ? ' ' + styles['font-700'] : '')}
            href='/'
          >
            About Us
          </Link>
          <Button
            className={styles['homepage-button-1']}
            href = "#chat_bot"
           >
            START BUILDING
          </Button>
        </div>
      </div>
      <div className={styles['custom-header-content']}>
        <p className={styles['homepage-big-text']}>We Build Your <span>Software</span></p>
        <p className={styles['homepage-big-text']}>Using <span>AI</span></p>
        <p className={styles['homepage-small-text']}>
        We embed many AI solutions in our development process <br></br> 
        to help you build software faster with higher quality
                </p>
        <p></p>
        <div className={styles['button-group']}>
          <Button className={styles['homepage-button-1']}
          href = "#chat_bot"
          >
            START BUILDING
          </Button>
          <a href = "https://calendly.com/rockship-co/30min-free-consulting">
          <Button className={styles['homepage-button-2']}>
            Book a call
                      </Button>
          </a>
        </div>
        <div id = "chat_bot" className={styles['chatbot-box']}>
          <Chatbot />
        </div>
      </div>
    </Header>
  )
}

export default CustomHeader;