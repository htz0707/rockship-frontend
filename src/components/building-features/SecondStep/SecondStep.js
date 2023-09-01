"use client";
import React, { useState, useEffect } from "react";

import FeatureItem from "./FeatureItem";
import FeatureSearchList from "./FeatureSearchList";

import styles from "./SecondStep.module.scss";

const SecondStep = ({
  getValue,
  features,
  listTech,
  objSimilarTechSelected,
  isMobile,
  featuresUpdate,
  isSelected,
  featuresSelected,
  currentStep,
}) => {
  const [valueSearch, setValueSearch] = useState("");
  const [featuresState, setFeaturesState] = useState([]);
  const [valueSelected, setValueSelected] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [listFeaturesSelected, setListFeaturesSelected] = useState([]);
  const [thumbSelected, setThumbSelected] = useState("");
  const [objThumbSelected, setObjThumbSelected] = useState({});
  const [isSelectMobile, setIsSelectMobile] = useState(true);
  const [showListFeature, setShowListFeature] = useState(true);

  useEffect(() => {
    setFeaturesState(features);
  }, [features]);

  useEffect(() => {
    if (isSelected) {
      setFeaturesState(features);
    } else {
      window.scrollTo(0, 0);
      if (features.length) {
        for (let item in objSimilarTechSelected.list_features_suggest) {
          features.map((feature) => {
            if (feature.key === item) {
              feature.list_features.forEach((listCheck) => {
                objSimilarTechSelected.list_features_suggest[item].forEach(
                  (id) => {
                    if (listCheck.id === id) {
                      listCheck.checked = true;
                    }
                  }
                );
              });
            }
            return "";
          });
        }
      }
      setFeaturesState(features);
    }
  }, [isSelected, features, objSimilarTechSelected]);

  const switchDevice = (value) => {
    setIsSelectMobile(value);
  };

  useEffect(() => {
    const arrFeatures = featuresState.map((item) =>
      item.list_features.filter((feature) => feature.checked)
    );
    const arrKeys = featuresState.map((item) => item.key);
    let obj = {};
    arrFeatures.forEach((item, index) => {
      obj[arrKeys[index]] = item;
    });
    let arr = [];
    arrFeatures.forEach((item) => (arr = arr.concat(item)));
    getValue(obj, featuresState);
    setListFeaturesSelected(arr);
  }, [featuresState]);

  useEffect(() => {
    setObjThumbSelected(listFeaturesSelected[0]);
    featuresSelected(listFeaturesSelected);
  }, [listFeaturesSelected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueSearch(value);
  };

  const removeAllSelected = () => {
    const updatedFeatures = featuresState.map((feature) => {
      feature.list_features = feature.list_features.map((item) => {
        item.checked = false;
        return item;
      });
      return feature;
    });

    setListFeaturesSelected([]);
    setFeaturesState(updatedFeatures);
    featuresUpdate(updatedFeatures);
  };

  const removeItemThumb = async (item) => {
    const updatedFeatures = featuresState.map((feature) => {
      if (feature.key === item.key) {
        feature.list_features.map((item_list_feature) => {
          if (item_list_feature.id === item.id) {
            return (item_list_feature.checked = false);
          }
          return "";
        });
      }
      return feature;
    });
    setFeaturesState(updatedFeatures);

    const arrFeatures = updatedFeatures.map((item) =>
      item.list_features.filter((feature) => feature.checked)
    );
    const arrKeys = updatedFeatures.map((item) => item.key);
    let obj = {};
    arrFeatures.forEach((item, index) => {
      obj[arrKeys[index]] = item;
    });
    let arr = [];
    arrFeatures.forEach((item) => (arr = arr.concat(item)));
    await setFeaturesState(updatedFeatures);
    setListFeaturesSelected(arr);
    featuresUpdate(updatedFeatures);
  };

  const updateListFeature = (lsFeature, listId) => {
    const newListFeature = lsFeature.map((item) => {
      if (item.id === listId) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });
    return newListFeature;
  };

  const handleChangeCheckbox = (itemId, listId) => {
    const newFeatures = featuresState.map((item) => {
      if (item.id === itemId) {
        const newListFeature = updateListFeature(item.list_features, listId);
        return {
          ...item,
          list_features: newListFeature,
        };
      } else {
        return item;
      }
    });
    featuresUpdate(newFeatures);
    setFeaturesState(newFeatures);
  };

  const selectedThumbnail = (item) => {
    setThumbSelected(item.feature);
    setObjThumbSelected(item);
  };

  const renderFeatures = () => {
    if (valueSearch) {
      const searchList = featuresState
        .map((item) =>
          item.list_features.map((feature) => {
            feature.itemId = item.id;
            return feature;
          })
        )
        .flat()
        .map((item) => {
          item.key = `${item.key}-${item.id}`;
          return item;
        })
        .filter(
          (item) =>
            item.feature.toLowerCase().indexOf(valueSearch.toLowerCase()) >= 0
        );

      return (
        <FeatureSearchList
          items={searchList}
          handleChangeCheckbox={(itemId, listId) =>
            handleChangeCheckbox(itemId, listId)
          }
        />
      );
    }

    return featuresState.map((item) => (
      <FeatureItem
        key={item.id}
        item={item}
        handleChangeCheckbox={(value) => handleChangeCheckbox(item.id, value)}
      />
    ));
  };

  const renderThumbnail = () => {
    if (objThumbSelected !== undefined) {
      return listFeaturesSelected.map((item, index) => (
        <div className={styles["thumbnail-item"]} key={index}>
          <div className={styles["thumb-img"]}>
            <img
              src="/images/x_icon.png"
              alt="delete-icon"
              className={styles["x-icon"]}
              onClick={() => removeItemThumb(item)}
            />
            <img
              onClick={() => selectedThumbnail(item)}
              className={
                styles["image-thumb"] +
                " " +
                styles[
                  objThumbSelected.feature === item.feature ? "active" : ""
                ]
              }
              src={
                isSelectMobile
                  ? item.img_mobile === null
                    ? "/images/no-image.png"
                    : item.img_mobile
                  : item.img_web === null
                  ? "/images/no-image.png"
                  : item.img_web
              }
              alt={item.feature}
            />
          </div>
          <div className={styles["feature_title"]}>
            {item.feature}
          </div>
        </div>
      ));
    } else {
      return "";
    }
  };

  const renderBigThumb = () => {
    if (objThumbSelected !== undefined) {
      const isEmpty =
        Object.entries(objThumbSelected).length === 0 &&
        objThumbSelected.constructor === Object;
      return (
        <div
          className={styles["big-thumbnail-container"]}
        >
          {!isEmpty && (
            <div className={styles["img-big-thumb"]}>
              <img
                src={
                  isSelectMobile
                    ? objThumbSelected.img_mobile === null
                      ? "/images/no-image.png"
                      : objThumbSelected.img_mobile
                    : objThumbSelected.img_web === null
                    ? "/images/no-image.png"
                    : objThumbSelected.img_web
                }
                alt={objThumbSelected.feature}
              />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div
          className={styles["big-thumbnail-container"]}
        />
      );
    }
  };

  return (
    <>
      {isMobile ? (
        <div
          className={styles["second-step-container-mobile"]}
        >
          <div
            className={styles["second-step-wrap"]}
          >
            {showListFeature && currentStep === 2 ? (
              <div
                className={styles["left-content"]}
              >
                <div
                  className={styles["search-input"]}
                >
                  <div
                    className={styles["search-box"]}
                  >
                    <img src="/images/search.png" alt="search" />
                    <input
                      type="text"
                      name="valueSearch"
                      value={valueSearch}
                      onChange={handleChange}
                      placeholder="Search"
                      autoComplete="off"
                    />
                    {valueSearch ? (
                      <div className={styles["clear"]} onClick={() => setValueSearch("")}>
                        <span>x</span>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={styles["shopping-cart"]}
                  >
                    <img
                      src="/images/ic-shopping-cart@2x.png"
                      alt="cart"
                      className={styles["shopping-cart-img"]}
                    />
                    <span
                      className={styles["count-selected"]}
                    >
                      {listFeaturesSelected.length}
                    </span>
                  </div>
                </div>
                <div
                  className={styles["feature-list"]}
                >
                  {renderFeatures()}
                </div>
              </div>
            ) : (
              <div
                className={styles["right-content"]}
              >
                <div
                  className={styles["small-thumbnail-header"]}
                >
                  <div
                    className={styles["header-content-left"]}
                  >
                    <div
                      className={styles["count-selected"]}
                    >
                      {listFeaturesSelected.length} feature(s)
                    </div>
                    <div
                      className={styles["remove-all-btn"]}
                      onClick={removeAllSelected}
                    >
                      Remove all
                    </div>
                  </div>
                  <div
                    className={styles["header-content-right"]}
                  >
                    <div
                      className={styles["icon"]}
                      style={{ marginRight: 16 }}
                      onClick={() => switchDevice(false)}
                    >
                      <span>Web</span>
                      <img
                        src={
                          isSelectMobile
                            ? `/images/ic_desktop_active.png`
                            : "/images/ic_desktop.png"
                        }
                        style={{ width: 11, height: 11 }}
                        alt="web"
                      />
                    </div>
                    <div
                      className={styles["icon"]}
                      onClick={() => switchDevice(true)}
                    >
                      <span>Mobile</span>
                      <img
                        src={
                          isSelectMobile
                            ? `/images/ic_mobile_active.png`
                            : "/images/ic_mobile.png"
                        }
                        style={{ width: 7, height: 11 }}
                        alt="mobile"
                      />
                    </div>
                  </div>
                </div>
                {renderBigThumb()}
                <div
                  className={styles["small-thumbnail-container"]}
                >
                  {listFeaturesSelected.length !== 0 && (
                    <div
                      className={styles["list-thumnails"]}
                    >
                      {renderThumbnail()}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={styles["second-step-container"]}
        >
          <div
            className={styles["second-step-wrap"]}
          >
            <div className={styles["left-content"]} >
              <div
                className={styles["search-input"]}
              >
                <div
                  className={styles["search-box"]}
                >
                  <img src="/images/search.png" alt="search" />
                  <input
                    type="text"
                    name="valueSearch"
                    value={valueSearch}
                    onChange={handleChange}
                    placeholder="Search"
                    autoComplete="off"
                  />
                  {valueSearch ? (
                    <div
                      className={styles["clear"]}
                      onClick={() => setValueSearch("")}
                    >
                      <span>x</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className={styles["feature-list"]}
              >
                {renderFeatures()}
              </div>
            </div>
            <div className={styles["right-content"]} >
              {renderBigThumb()}
              <div
                className={styles["small-thumbnail-container"]}
              >
                <div
                  className={styles["small-thumbnail-header"]}
                >
                  <div
                    className={styles["header-content-left"]}
                  >
                    <div
                      className={styles["count-selected"]}
                    >
                      {listFeaturesSelected.length} selected feature(s)
                    </div>
                    <div
                      className={styles["remove-all-btn"]}
                      onClick={removeAllSelected}
                    >
                      Remove all
                    </div>
                  </div>
                  <div
                    className={styles["header-content-right"]}
                  >
                    <div
                      className={styles["icon"]}
                      style={{ marginRight: 32 }}
                      onClick={() => switchDevice(false)}
                    >
                      <span>Web</span>
                      <img
                        src={
                          isSelectMobile
                            ? `/images/ic_desktop_active.png`
                            : "/images/ic_desktop.png"
                        }
                        style={{ width: 22, height: 22 }}
                        alt="web"
                      />
                    </div>
                    <div
                      className={styles["icon"]}
                      onClick={() => switchDevice(true)}
                    >
                      <span>Mobile</span>
                      <img
                        src={
                          isSelectMobile
                            ? `/images/ic_mobile_active.png`
                            : "/images/ic_mobile.png"
                        }
                        style={{ width: 14, height: 22 }}
                        alt="mobile"
                      />
                    </div>
                  </div>
                </div>
                {listFeaturesSelected.length !== 0 && (
                  <div
                    className={styles["list-thumnails"]}
                  >
                    {renderThumbnail()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecondStep;
