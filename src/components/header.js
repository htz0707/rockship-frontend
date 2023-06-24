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
      <div className={styles['custom-header-bar']}>
        <Image src={'/rockship.svg'} alt='rockship' width={196} height={42} />
        <div className={styles['custom-header-container']}>
          <Link
            className={styles['text-header'] + (link === 'solutions' ? ' ' + styles['font-700'] : '')}
            href='/'
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
          >
            START BUILDING
          </Button>
        </div>
      </div>
      <div className={styles['custom-header-content']}>
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
        <div className={styles['chatbot-box']}>
          <Chatbot />
        </div>
      </div>
    </Header>
  )
}

export default CustomHeader;