"use client";

import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

import CustomLayout from "@/components/Layout";
import styles from "@/styles/filter.module.scss";
import SelectCustom from "@/components/SelectCustom";
import useWindowSize from "@/hooks/useWindowSize";

const Filter = () => {
  const size = useWindowSize();
  const router = useRouter();

    useEffect(() => {
    const handleResize = () => {
      if (size.width > 768) {
        router.push('/case-studies')
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  return (
    <CustomLayout link={"filter"} isBack>
      <Row>
        <Col span={24}>
          <div className={styles["filter"]}>
            <SelectCustom className={styles["select"]} value="All Industry" />
            <SelectCustom
              className={styles["select"]}
              value="All Company Size"
            />
            <SelectCustom className={styles["select"]} value="All Market" />
          </div>
        </Col>
      </Row>
    </CustomLayout>
  );
};

export default Filter;
