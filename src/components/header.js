import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Button } from 'antd';
import styles from '@/styles/header.module.scss';

const { Header } = Layout;

const CustomHeader = (props) => {
  return (
    <Header className={styles['custom-header']}>
      <Image src={'/rockship.svg'} alt='rockship' width={196} height={42} />
      <div className={styles['custom-header-container']}>
        <Link
          className={styles['text-header'] + (props.home ? ' ' + styles['font-700'] : '')}
          href='/'
        >
          Home
        </Link>
        <Link
          className={styles['text-header'] + (props.product ? ' ' + styles['font-700'] : '')}
          href='/'
        >
          Product
        </Link>
        <Link
          className={styles['text-header'] + (props.faq ? ' ' + styles['font-700'] : '')}
          href='/'
        >
          FAQ
        </Link>
        <Link
          className={styles['text-header'] + (props.blog ? ' ' + styles['font-700'] : '')}
          href='/'
        >
          Blog
        </Link>
        <Link
          className={styles['text-header'] + (props.about ? ' ' + styles['font-700'] : '')}
          href='/'
        >
          About Us
        </Link>
        <Button
          className={styles['start-building-button']}
        >
          START BUILDING
        </Button>
      </div>
    </Header>
  )
}

export default CustomHeader;