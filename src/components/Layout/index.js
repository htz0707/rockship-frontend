import * as React from "react";
import { Layout } from "antd";
import CustomHeader from "../Header";
import HeaderCustom from "../HeaderCustom";
import CustomFooter from "../Footer";
import styles from "./layout.module.scss";

const { Content } = Layout;

const CustomLayout = ({ link, children, isShowFooter, isBack }) => {
  let layout = null;
  switch (link) {
    case "filter":
      layout = (
        <>
          <CustomHeader link={link} title="Filter" isBack={isBack} />
          <Content className={styles["custom-content"]}>{children}</Content>
        </>
      );
      break;
    case "studies":
      layout = (
        <>
          <CustomHeader link={link} title="Case study detailed" isBack={isBack} />
          <Content className={styles["custom-content"]}>{children}</Content>
          {isShowFooter && <CustomFooter />}
        </>
      );
      break;
    default:
      layout = (
        <>
          <CustomHeader link={link} />
          <Content className={styles["custom-content"]}>{children}</Content>
          <CustomFooter />
        </>
      );
      break;
  }
  return <Layout className={styles["custom-layout"]}>{layout}</Layout>;
};

export default CustomLayout;
