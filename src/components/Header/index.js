"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, Button, Drawer, Dropdown, Space } from "antd";

import Chatbot from "../ChatBot";
import styles from "./header.module.scss";
import arrowLeft from "../../../public/arrow-left.svg";
import useScrollToElement from "@/hooks/useScrollToElement";
import { analytics } from "@/segment/segment";

import { DownOutlined } from "@ant-design/icons";
import ItStaff from "../../../public/it-staff.svg";
import Engineer from "../../../public/product-engineer.svg";
import AISol from "../../../public/ai-sol.svg";

const { Header } = Layout;

const CalendlyLinkWidget = ({
  analytics,
  eventName,
  buttonName,
  buttonStyle,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Button
        className={styles[buttonStyle]}
        onClick={() => {
          analytics.track(eventName);
          Calendly.initPopupWidget({
            url: "https://calendly.com/binhngoc17/rockship-app-builder",
          });
          return false;
        }}
      >
        <span>{buttonName}</span>
      </Button>
    </div>
  );
};

const MenuNavbar = ({ link, onClickStartBuilding }) => {
  const items = [
    {
      label: (
        <Link
          href="tech-team-augmentation"
          className={
            styles["our-solution-custom-label"] +
            (link === "tech-team-augmentation" ? " " + styles["font-600"] : "")
          }
        >
          Tech Team Augmentation
        </Link>
      ),
      icon: (
        <Image
          className={
            styles["our-solution-custom-icon"] +
            (link === "tech-team-augmentation" ? " " + styles["font-600"] : "")
          }
          src={ItStaff}
          alt=""
          priority
        />
      ),
      key: "0",
    },
    {
      label: (
        <Link
          href="/product-engineer"
          className={
            styles["our-solution-custom-label"] +
            (link === "product-engineer" ? " " + styles["font-600"] : "")
          }
        >
          Product Engineering
        </Link>
      ),
      icon: (
        <Image
          className={
            styles["our-solution-custom-icon"] +
            (link === "product-engineer" ? " " + styles["font-600"] : "")
          }
          src={Engineer}
          alt=""
          priority
        />
      ),
      key: "1",
    },
    {
      label: (
        <Link
          href="/build-your-ai"
          className={
            styles["our-solution-custom-label"] +
            (link === "build-your-ai" ? " " + styles["font-600"] : "")
          }
        >
          AI Solution
        </Link>
      ),
      icon: (
        <Image
          className={
            styles["our-solution-custom-icon"] +
            (link === "build-your-ai" ? " " + styles["font-600"] : "")
          }
          src={AISol}
          alt=""
          priority
        />
      ),
      key: "2",
    },
  ];
  return (
    <div className={styles["menu-navbar"]}>
      <Link
        className={
          styles["text-header"] +
          (link === "tech-team-augmentation" ||
          link === "product-engineer" ||
          link === "build-your-ai"
            ? " " + styles["font-700"]
            : "")
        }
        href="#"
        scroll={false}
      >
        <Dropdown
          overlayClassName={styles["our-solution-dropdown"]}
          menu={{ items }}
        >
          <Space>
            Our Solution
            <DownOutlined />
          </Space>
        </Dropdown>
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

const CustomHeader = ({ link, isBack, title, onClickTitle }) => {
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
      window.open('https://t.me/Test_Rockship_Chatbot')
    } else {
      window.open('https://t.me/Test_Rockship_Chatbot')
    }
  };

  const handleOnClickTitle = () => {
    if (onClickTitle) {
      return onClickTitle();
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
              // data-aos="fade-up"
              // data-aos-duration="500"
              // data-aos-anchor-placement="bottom-bottom"
              >
                <br />
                <p className={styles["homepage-big-text"]}>
                  Build your app <span>in 3 weeks</span>
                </p>
                <p className={styles["homepage-big-text"]}>
                  with our <span>AI-assisted</span> code generation.
                </p>
                <p className={styles["homepage-small-text"]}>
                  <span>Start faster</span> with AI-assisted code generation.
                  <br />
                  <span>Scale effectively</span> with AI-powered hiring
                  solution.
                  <br />
                  <span>Stay ahead</span> in emerging tech leveraging our tech
                  experts network.
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
                {/* <a 
                    href="https://calendly.com/rockship-co/30min-free-consulting"
                    target = "_blank"
                >
                  <Button
                    className={styles["homepage-button-2"]}
                    id="banner-book-a-call"
                  >
                    Book a call
                  </Button>
                </a> */}
                <CalendlyLinkWidget
                  analytics={analytics}
                  eventName="call-homepage"
                  buttonName="Book a call"
                  buttonStyle="homepage-button-2"
                />
              </div>
              {/* <div
                className={styles["chatbot-box"]}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                id="chat_bot"
              >
                <Chatbot />
              </div> */}
            </div>
          )}
        </>
      )}
    </Header>
  );
};

export default CustomHeader;
