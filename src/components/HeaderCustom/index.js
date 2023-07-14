"use client"

import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Layout } from "antd";
import styles from "./header-custom.module.scss";
import arrowLeft from "../../../public/arrow-left.svg";
const { Header } = Layout;

const HeaderCustom = ({ title, onClick }) => {
  const router = useRouter();
  const handleOnClickTitle = () => {
    if (onClick) {
      return onClick();
    }
    router.back();
  };
  return (
    <Header className={styles["custom-header"]}>
      <div
        className={styles["custom-header-navbar"]}
        onClick={handleOnClickTitle}
      >
        <Image src={arrowLeft} alt="back" priority />
        <p>{title}</p>
      </div>
    </Header>
  );
};

export default HeaderCustom;
