import * as React from "react";
import { Layout } from "antd";
import CustomHeader from "../Header";
import CustomFooter from "../Footer";
import styles from "./layout.module.scss";

const { Content } = Layout;

const CustomLayout = ({ link, children, isBack, onClickTitle }) => {
  let layout = null;

  switch (link) {
    case "features":
      layout = (
        <React.Fragment>
          <CustomHeader link={link} />
          <Content className={styles["custom-content"]}>{children}</Content>
        </React.Fragment>
      );
      break;
    case "talents":
      layout = (
        <React.Fragment>
          <CustomHeader link={link} />
          <Content className={styles["custom-content"]}>{children}</Content>
        </React.Fragment>
      );
      break;
    case "search":
      layout = (
        <React.Fragment>
          <CustomHeader link={link} title="Search" isBack={isBack} />
          <Content className={styles["custom-content"]}>{children}</Content>
        </React.Fragment>
      );
      break;
    case "filter":
      layout = (
        <React.Fragment>
          <CustomHeader link={link} title="Filter" isBack={isBack} onClickTitle={onClickTitle} />
          <Content className={styles["custom-content"]}>{children}</Content>
        </React.Fragment>
      );
      break;
    case "studies":
      layout = (
        <React.Fragment>
          <CustomHeader
            link={link}
            title="Case study detailed"
            isBack={isBack}
          />
          <Content className={styles["custom-content"]}>{children}</Content>
          <CustomFooter />
        </React.Fragment>
      );
      break;
    default:
      layout = (
        <React.Fragment>
          <CustomHeader link={link} />
          <Content className={styles["custom-content"]}>{children}</Content>
          <CustomFooter />
        </React.Fragment>
      );
      break;
  }
  return <Layout className={styles["custom-layout"]}>{layout}</Layout>;
};

export default CustomLayout;
