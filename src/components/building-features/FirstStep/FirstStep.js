"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import TechName from "./TechName";
import SimilarTechItem from "../SimilarTechItem/SimilarTechItem";
import styles from "./FirstStep.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let selectedTechLocal = "";

const FirstStep = ({
  getValue,
  listTech: listTechProps,
  getSelectedSimilarTechTitle,
  isMobile,
}) => {
  const [selectedTech, setSelectedTech] = useState(selectedTechLocal);
  const [similarApps, setSimilarApps] = useState({
    fintech: [
      {
        id: 1,
        logo: "/images/youholder.jpg",
        title: "YouHolder",
        description:
          "A Blockchain-based Financial Ecosystem focused on cryptocurrency-backed lending with fiat loans.",
      },
      {
        id: 2,
        logo: "/images/binance.png",
        title: "Binance",
        description:
          "A global cryptocurrency exchange that provides a platform for trading more than 100 cryptocurrrencies.",
      },
    ],
    edtech: [
      {
        id: 1,
        logo: "/images/coursera.jpeg",
        title: "Coursera",
        description:
          "An amrican online learning platform that offers massive open oline courses, specializations, and degrees.",
      },
      {
        id: 2,
        logo: "/images/duolingo.png",
        title: "Duolingo",
        description:
          "A platform that includers a language-learning website and app, as well as a digital language proficiency assessment exam.",
      },
    ],
    "e-commerce": [
      {
        id: 1,
        logo: "/images/ebay.png",
        title: "Ebay",
        description:
          "An online shopping site that’s best known for its auctions and consumer to consumer sales.",
      },
      {
        id: 2,
        logo: "/images/etsy.png",
        title: "Eatsy",
        description:
          "An app platform that allows diners to order-ahead and pay at their favourite local eateries and coffee shops, such that their orders are ready to pick up when they arrive.",
      },
    ],
    "legal-tech": [],
    "social-media": [
      {
        id: 1,
        logo: "/images/instagram.jpg",
        title: "Instagram",
        description:
          "An online photo-sharing application and social network platform.",
      },
      {
        id: 2,
        logo: "/images/facebook.png",
        title: "Facebook",
        description:
          "A social networking website where users can post comments, share photographs and post links to news or other interesting content on the web, chat live, and watch short-form video.",
      },
      {
        id: 3,
        logo: "/images/linkedIn.png",
        title: "LinkedIn",
        description:
          "Social networking site designed specifically for the business community.",
      },
    ],
  });
  const [searchValue, setSearchValue] = useState("");
  const [arrSelectedSimilarApp, setArrSelectedSimilarApp] = useState([]);
  const [listTech, setListTech] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      selectedTechLocal =
        localStorage.getItem("similar_tech") !== ""
          ? localStorage.getItem("similar_tech")
          : "fintech";
    }
  }, []);

  useEffect(() => {
    setListTech(listTechProps);
  }, [listTechProps]);

  useEffect(() => {
    localStorage.setItem("similar_apps", arrSelectedSimilarApp);
  }, [arrSelectedSimilarApp]);

  const selectTech = (item) => {
    setSelectedTech(item.key);
    localStorage.setItem("similar_tech", item.key);
    getSelectedSimilarTechTitle(item.key);
  };

  const selectSimilarApps = (item) => {
    const newArrSelectedSimilarApp = [...arrSelectedSimilarApp];
    if (newArrSelectedSimilarApp.includes(item)) {
      newArrSelectedSimilarApp.splice(
        newArrSelectedSimilarApp.indexOf(item),
        1
      );
    } else {
      newArrSelectedSimilarApp.push(item);
    }
    setArrSelectedSimilarApp(newArrSelectedSimilarApp);
    getValue(newArrSelectedSimilarApp, selectedTech.title);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value);
  };

  const renderListTechName = () => {
    return listTech?.map((item) => (
      <TechName
        key={item.id}
        item={item}
        selectTech={() => selectTech(item)}
        selectedTech={selectedTech}
      />
    ));
  };

  const renderCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className={styles["list-tech-name-mobile"]}>
        <Slider {...settings}>
          {listTech?.map((item) => (
            <TechName
              key={item.id}
              item={item}
              selectTech={() => selectTech(item)}
              selectedTech={selectedTech}
            />
          ))}
        </Slider>
      </div>
    );
  };

  const renderListSimilarApp = () => {
    const listSimilarApps = similarApps[selectedTech] || [];
    return listSimilarApps.map((item) => (
      <SimilarTechItem
        currentStep={1}
        key={item.id}
        item={item}
        isSelected={arrSelectedSimilarApp.includes(item)}
        selectSimilarApps={() => selectSimilarApps(item)}
      />
    ));
  };

  const handleAutoCompleteClick = (item) => {
    selectTech({ key: item.tech });
    selectSimilarApps(item);
    setSearchValue("");
  };

  const renderAutoComplete = () => {
    if (searchValue) {
      const appArr = Object.keys(similarApps)
        .map((tech) => [...similarApps[tech].map((app) => ({ ...app, tech }))])
        .flat()
        .filter(
          (app) =>
            app.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        );

      const searchList = appArr.map((item) => (
        <div
          className={styles["list-group-item"]}
          key={`${item.tech}-${item.id}`}
          onClick={() => handleAutoCompleteClick(item)}
        >
          {item.title}
        </div>
      ));

      return (
        <div className={styles["auto-complete"]}>
          <div className={styles["list-group"]}>{searchList}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles["first-step-container"]}>
      <div className={styles["first-step-wrap"]}>
        <div className={styles["select-text"]}>
          Select the type of software you want to create.
        </div>
        {!isMobile ? (
          <div className={styles["list-tech-name"]}>{renderListTechName()}</div>
        ) : (
          renderCarousel()
        )}
        <div className={styles["similar-app"]}>
          <div className={styles["similar-app-header"]}>
            <div className={styles["similar-app-text"]}>
              Try selecting similar apps to your idea.
            </div>
            <div className={styles["search-input"]}>
              <img src="/images/search.png" alt="search" />
              <input
                value={searchValue}
                name="searchValue"
                onChange={handleChange}
                placeholder="Search"
                autoComplete="off"
              />
              {renderAutoComplete()}
            </div>
          </div>
          <div className={styles["list-similar-apps"]}>
            {renderListSimilarApp()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
