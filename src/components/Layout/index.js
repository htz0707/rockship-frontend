import * as React from "react";
import { Layout, Button } from "antd";
import CustomHeader from "../Header";
import CustomFooter from "../Footer";
import FormModal from "../FormModal";
import styles from "./layout.module.scss";

const { Content } = Layout;

const CustomLayout = ({ link, children, isBack, selectedNumber }) => {
  let layout = null;
  const [open, setOpen] = React.useState(false);

  const displayMemberNumber = (number) =>
    `${selectedNumber} selected member${number > 1 ? "s" : ""}`;

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
          <div
            className={
              styles["sticky-bar"] +
              (selectedNumber < 3 ? " " : ` ${styles["able"]}`)
            }
          >
            <div className={styles["flex-left"]}>
              <b>{selectedNumber > 0 && displayMemberNumber(selectedNumber)}</b>
              {selectedNumber > 0 && selectedNumber < 3 && <span> - </span>}
              {selectedNumber < 3 && (
                <span>Select at least 3 members to ramp up</span>
              )}
            </div>
            <Button
              disabled={selectedNumber < 3}
              className={
                styles["flex-right"] +
                (selectedNumber < 3 ? " " : ` ${styles["able"]}`)
              }
              onClick={() => setOpen(true)}
            >
              HIRE A TEAM
            </Button>
          </div>
          <FormModal open={open} setOpen={setOpen} />
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
          <CustomHeader link={link} title="Filter" isBack={isBack} />
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
