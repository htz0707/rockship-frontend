import * as React from 'react';
import { Layout, Divider, Button } from 'antd';
import CustomHeader from './header';
import CustomFooter from './footer';
import styles from '@/styles/layout.module.scss'

const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout className={styles['custom-layout']}>
      <CustomHeader home />
      <Content className={styles['custom-content']}>
        {children}
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default CustomLayout;