"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, Button, Drawer } from "antd";

import Chatbot from "../ChatBot";
import styles from "./header.module.scss";
import arrowLeft from "../../../public/arrow-left.svg";
import useScrollToElement from "@/hooks/useScrollToElement";
const { Header } = Layout;

const MenuNavbar = ({ link, onClickStartBuilding }) => {
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
          (link === "talent-as-a-service" || link === "talents"
            ? " " + styles["font-700"]
            : "")
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
        Knowledge Hub
      </Link>
      <Button
        id="banner-start-building-mobile"
        className={styles["homepage-button-1"]}
        onClick={onClickStartBuilding}
      >
        START BUILDING
      </Button>
    </div>
  );
};

const CustomHeader = ({ link, isBack, title, onClick }) => {
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { isOverHeader, atPositionElement, scrollToElement } =
    useScrollToElement("#chat_bot");
  const handleOnClickLogo = () => {
    router.push("/");
  };
  const handleOnClickMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  const onClickStartBuilding = () => {
    if (link !== "solutions") {
      router.push("/");
      scrollToElement("#chat_bot");
    } else {
      scrollToElement("#chat_bot");
    }
  };

  const handleOnClickTitle = () => {
    if (onClick) {
      return onClick();
    }
    router.back();
  };
  return (
    <Header
      className={`${styles["custom-header"]} ${
        isOverHeader ? styles["navbar-scroll"] : ""
      } ${atPositionElement ? styles["visible"] : ""}`}
    >
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
              <MenuNavbar
                link={link}
                onClickStartBuilding={onClickStartBuilding}
              />
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
                <br/>
                <p className={styles["homepage-big-text"]}>
                Build your app <span>in 3 weeks</span>
                </p>
                <p className={styles["homepage-big-text"]}>
                  with our <span>AI-assisted</span> code generation.
                </p>
                <p className={styles["homepage-small-text"]}>
                <span>Start faster</span> with AI-assisted code generation.
                <br/>
                <span>Scale effectively</span> with AI-powered hiring solution.
                <br/>
                <span>Stay ahead</span> in emerging tech leveraging our tech experts network.
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
                  onClick={onClickStartBuilding}
                >
                  START BUILDING
                </Button>
                <a 
                    href="https://calendly.com/rockship-co/30min-free-consulting"
                    target = "_blank"
                >
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
