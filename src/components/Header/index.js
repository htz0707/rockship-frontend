"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, Button, Drawer } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

import Chatbot from "../ChatBot";
import styles from "./header.module.scss";
import arrowLeft from "../../../public/arrow-left.svg";

const { Header } = Layout;

const MenuNavbar = ({ link }) => {
  return (
    <div className={styles["menu-navbar"]}>
      <Link
        className={
          styles["text-header"] +
          (link === "build-your-ai" ? " " + styles["font-700"] : "")
        }
        href="/build-your-ai"
        scroll={false}
        id="header-build-your-ai"
      >
        Build Your AI
      </Link>
      <Link
        className={
          styles["text-header"] +
          (link === "studies" ? " " + styles["font-700"] : "")
        }
        href="/case-studies"
        id="header-case-studies"
      >
        Case Studies
      </Link>
      <Link
        className={
          styles["text-header"] +
          (link === "talent-as-a-service" || link === "talents" ? " " + styles["font-700"] : "")
        }
        href="/talent-as-a-service"
        id="header-talent-as-service"
      >
        Hire Talents
      </Link>
      <Link
        className={
          styles["text-header"] +
          (link === "blogs" ? " " + styles["font-700"] : "")
        }
        href="/blogs"
        id="header-blogs"
      >
        Blogs
      </Link>
      <Button
        id="button-start-building-mobile"
        className={styles["homepage-button-1"]}
        href="#chat_bot"
      >
        START BUILDING
      </Button>
    </div>
  );
};

const CustomHeader = ({ link, isBack, title, onClick }) => {
  useEffect(() => {
    AOS.init();
  });
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleOnClickLogo = () => {
    router.push("/");
  };

  const handleOnClickMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  const handleOnClickTitle = () => {
    if (onClick) {
      return onClick();
    }
    router.back();
  };
  return (
    <Header className={styles["custom-header"]}>
      {isBack && (
        <div
          className={styles["custom-header-navbar"]}
          onClick={handleOnClickTitle}
        >
          <Image src={arrowLeft} alt="back" priority />
          <p>{title}</p>
        </div>
      )}
      {!isBack && (
        <>
          <div className={styles["custom-header-bar"]}>
            <Image
              src={"/rockship.svg"}
              alt="rockship"
              width={196}
              height={42}
              onClick={handleOnClickLogo}
              style={{ cursor: "pointer" }}
              priority
            />
            <div className={styles["custom-header-container"]}>
              <MenuNavbar link={link} />
            </div>
            <div
              className={styles["custom-header-container-mobile"]}
              id="custom-header-container-mobile"
            >
              <Image
                src={"/menu.svg"}
                alt="menu"
                onClick={handleOnClickMenu}
                width={32}
                height={32}
              />
              <Drawer
                getContainer={() =>
                  document.getElementById("custom-header-container-mobile")
                }
                placement={"left"}
                closable
                onClose={handleOnClickMenu}
                open={isShowMenu}
                key={"left"}
              >
                <MenuNavbar link={link} />
              </Drawer>
            </div>
          </div>
          {link === "solutions" && (
            <div className={styles["custom-header-content"]}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className={styles["homepage-big-text"]}>
                  We Build Your <span>Software</span>
                </p>
                <p className={styles["homepage-big-text"]}>
                  Using <span>AI</span>
                </p>
                <p className={styles["homepage-small-text"]}>
                  We embed many AI solutions in our development process{" "}
                  <br></br>
                  to help you build software faster with higher quality
                </p>
              </div>
              <div
                className={styles["button-group"]}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Button
                  id="banner-start-building-web"
                  className={styles["homepage-button-1"]}
                  href="#chat_bot"
                >
                  START BUILDING
                </Button>
                <a href="https://calendly.com/rockship-co/30min-free-consulting">
                  <Button
                    className={styles["homepage-button-2"]}
                    id="banner-book-a-call"
                  >
                    Book a call
                  </Button>
                </a>
              </div>
              <div
                className={styles["chatbot-box"]}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                id="chat_bot"
              >
                <Chatbot />
              </div>
            </div>
          )}
        </>
      )}
    </Header>
  );
};

export default CustomHeader;
