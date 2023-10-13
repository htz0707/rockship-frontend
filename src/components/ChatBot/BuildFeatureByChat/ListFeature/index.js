import React, { useState, useEffect } from "react";
import { Button, Checkbox, Modal, Tooltip } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import styles from "./list-feature.module.scss";
import { Table } from "antd";
import {
  getProjectEstimation,
  getFeatures,
  updateEstimation,
  updateEstimationGroup,
} from "@/pages/api/ChatbotAPI";
import Features from "./features";
import Feedback from "../Feedback";
import { analytics } from "@/segment/segment";
import CalendlyLinkWidget from "@/components/CalendlyLinkWidget";

const ListFeature = ({ handleReset, projectId, setStep }) => {
  const [mobile, setMobile] = useState(
    localStorage.getItem("mobile") ? localStorage.getItem("mobile") : "true"
  );
  const [webApp, setWebApp] = useState(
    localStorage.getItem("webapp") ? localStorage.getItem("webapp") : "true"
  );
  const [allData, setAllData] = useState({});
  const [data, setData] = useState([]);
  const [totalDay, setTotalDay] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [numberOfFeatures, setNumberOfFeatures] = useState(0);
  const [finish, seFinish] = useState(false);
  const [features, setFeatures] = useState([]);
  const [preview, setPreview] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState({});
  const [featureType, setFeatureType] = useState("");
  const [type, setType] = useState("desktop");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [fullPayment, setFullPayment] = useState(true);

  const handleSelectMobile = () => {
    setType("mobile");
    setCurrentIndex(0);
  };

  const handleSelectDesktop = () => {
    setType("desktop");
    setCurrentIndex(0);
  };

  const handlePrevClick = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (images) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleOpenPreview = (data, feature) => {
    setFeatureType(data.name);
    setSelectedFeature(feature);
    setPreview(true);
  };

  const handleClosePreview = () => {
    setType("desktop");
    setCurrentIndex[0];
    setPreview(false);
  };

  const handleGetProjectEstimation = async (id) => {
    setLoading(true);
    try {
      const res = await getProjectEstimation({
        project_estimation_id: id,
        max_time: 90,
      });
      await handleGetFeature(id);
      seFinish(true);
      setAllData(res);
      localStorage.setItem("projectEstimation", JSON.stringify(res));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleGetFeature = async (id) => {
    try {
      const res = await getFeatures(id);
      setFeatures(res.features);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateEstimation = async (id, { selected, feature_id }) => {
    setLoading(true);
    try {
      await updateEstimation(id, { selected, feature_id });
      await handleGetProjectEstimation(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleUpdateEstimationGroup = async (id, { updates }) => {
    setLoading(true);
    try {
      await updateEstimationGroup(id, { updates });
      await handleGetProjectEstimation(id);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProjectEstimation(projectId);
  }, [projectId]);

  useEffect(() => {
    if (finish) {
      let days = 0;
      let cost = 0;
      let number = 0;
      if (mobile === "true" && webApp === "true") {
        const copyData = allData.backend_design_web_app.map((obj, index) => ({
          ...obj,
          key: obj.name + " " + index,
        }));
        for (let i = 0; i < copyData.length; i++) {
          const project = copyData[i];
          for (let j = 0; j < project.tasks.length; j++) {
            const task = project.tasks[j];
            const matchingFeature = features.find(
              (item) => item.feature_id === task.id
            );
            if (matchingFeature) {
              task.selected = matchingFeature.selected;
            }
          }
        }
        copyData.forEach((bigElement) => {
          const allTasksNotSelected = bigElement.tasks.every(
            (task) => task.selected === false
          );
          bigElement.selected = !allTasksNotSelected;
        });
        setData([...copyData]);
        copyData.forEach((element) => {
          element.tasks.forEach((task) => {
            if (task.selected) {
              days += task.days;
              cost += task.cost;
              number += 1;
            }
          });
        });
        setNumberOfFeatures(number);
        setTotalDay(days);
        setTotalCost(cost);
        localStorage.setItem("mobile", true);
        localStorage.setItem("webapp", true);
        localStorage.setItem("totalDay", days);
        localStorage.setItem("totalCost", cost);
        localStorage.setItem("numberOfFeatures", number);
      } else if (mobile === "true") {
        const copyData = allData.backend_design_app.map((obj, index) => ({
          ...obj,
          key: obj.name + " " + index,
        }));
        for (let i = 0; i < copyData.length; i++) {
          const project = copyData[i];
          for (let j = 0; j < project.tasks.length; j++) {
            const task = project.tasks[j];
            const matchingFeature = features.find(
              (item) => item.feature_id === task.id
            );
            if (matchingFeature) {
              task.selected = matchingFeature.selected;
            }
          }
        }
        copyData.forEach((bigElement) => {
          const allTasksNotSelected = bigElement.tasks.every(
            (task) => task.selected === false
          );
          bigElement.selected = !allTasksNotSelected;
        });
        setData([...copyData]);
        copyData.forEach((element) => {
          element.tasks.forEach((task) => {
            if (task.selected) {
              days += task.days;
              cost += task.cost;
              number += 1;
            }
          });
        });
        setNumberOfFeatures(number);
        setTotalDay(days);
        setTotalCost(cost);
        localStorage.setItem("mobile", true);
        localStorage.setItem("webapp", false);
        localStorage.setItem("totalDay", days);
        localStorage.setItem("totalCost", cost);
        localStorage.setItem("numberOfFeatures", number);
      } else if (webApp === "true") {
        const copyData = allData.backend_design_web.map((obj, index) => ({
          ...obj,
          key: obj.name + " " + index,
        }));
        for (let i = 0; i < copyData.length; i++) {
          const project = copyData[i];
          for (let j = 0; j < project.tasks.length; j++) {
            const task = project.tasks[j];
            const matchingFeature = features.find(
              (item) => item.feature_id === task.id
            );
            if (matchingFeature) {
              task.selected = matchingFeature.selected;
            }
          }
        }
        copyData.forEach((bigElement) => {
          const allTasksNotSelected = bigElement.tasks.every(
            (task) => task.selected === false
          );
          bigElement.selected = !allTasksNotSelected;
        });
        setData([...copyData]);
        copyData.forEach((element) => {
          element.tasks.forEach((task) => {
            if (task.selected) {
              days += task.days;
              cost += task.cost;
              number += 1;
            }
          });
        });
        setNumberOfFeatures(number);
        setTotalDay(days);
        setTotalCost(cost);
        localStorage.setItem("mobile", false);
        localStorage.setItem("webapp", true);
        localStorage.setItem("totalDay", days);
        localStorage.setItem("totalCost", cost);
        localStorage.setItem("numberOfFeatures", number);
        localStorage.setItem(
          "projectEstimation",
          JSON.stringify({ ...allData, backend_design_web: [...copyData] })
        );
      } else {
        setData([]);
        setTotalDay(0);
        setNumberOfFeatures(0);
        setTotalCost(0);
        localStorage.setItem("mobile", false);
        localStorage.setItem("webapp", false);
        localStorage.setItem("totalDay", 0);
        localStorage.setItem("totalCost", 0);
        localStorage.setItem("numberOfFeatures", 0);
      }
    }
  }, [finish, mobile, webApp, features]);

  const columns = [
    {
      title: "Features",
      dataIndex: "name",
      key: "name",
      width: 581,
      render: (text) => <b>{text}</b>,
    },
    // {
    //   title: "Man days",
    //   dataIndex: "days",
    //   key: "days",
    //   width: 120,
    //   align: "center",
    //   render: (text) => <b>{text}</b>,
    // },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      width: 120,
      align: "center",
      render: (text) => <b>$ {Math.round(text).toLocaleString("en-US")}</b>,
    },
    {
      title: "Select",
      dataIndex: "selected",
      key: "selected",
      align: "center",
      render: (text, record) => (
        <Checkbox
          onClick={() => {
            let updates = [];
            for (let task of record.tasks) {
              let update = {
                feature_id: task.id,
                selected: !text,
              };
              updates.push(update);
            }
            handleUpdateEstimationGroup(projectId, { updates });
          }}
          checked={text}
          className={styles["custom-checkbox"]}
        />
      ),
    },
  ];

  const expandedRowRender = (data) => {
    const expanedColumn = [
      {
        title: "Features",
        dataIndex: "name",
        key: "name",
        width: 581,
        render: (_, record) => (
          <div className={styles["features-box"]}>
            <div className={styles["small-features"]}>
              <p className={styles["name"]}>{record.name}</p>
              <p className={styles["description"]}>{record.description}</p>
            </div>
            {Features.some((feature) => feature.id === record.id) && (
              <div className={styles["play-box"]}>
                <img
                  src="/play.svg"
                  alt="play"
                  onClick={() => handleOpenPreview(data, record)}
                />
              </div>
            )}
          </div>
        ),
      },
      // {
      //   title: "Man days",
      //   dataIndex: "days",
      //   key: "days",
      //   width: 120,
      //   align: "center",
      // },
      {
        title: "Cost",
        dataIndex: "cost",
        key: "cost",
        width: 120,
        align: "center",
        render: (text) => (
          <div>$ {Math.round(text).toLocaleString("en-US")}</div>
        ),
      },
      {
        title: "Select",
        dataIndex: "selected",
        key: "selected",
        align: "center",
        render: (text, record) => (
          <Checkbox
            onClick={() => {
              handleUpdateEstimation(projectId, {
                selected: !record.selected,
                feature_id: record.id,
              });
            }}
            checked={text}
            className={styles["custom-checkbox"]}
          />
        ),
      },
    ];

    const copyData = data.tasks.map((obj, index) => ({
      ...obj,
      key: obj.name + " " + index,
    }));

    return (
      <Table
        className={styles["small-table"]}
        style={{ width: 957 }}
        key={"record"}
        dataSource={copyData}
        columns={expanedColumn}
        pagination={false}
        showHeader={false}
      />
    );
  };

  return (
    <div className={styles["list-feature"]}>
      <div className={styles["header"]} onClick={() => setStep(0)}>
        <img src="/arrow-left-2.svg" alt="" />
        <p>QUOTATION</p>
      </div>
      <div className={styles["select-group"]}>
        <p className={styles["select-text"]}>Select types of platform:</p>
        <Button
          className={
            styles["select-button"] +
            (mobile === "true" ? ` ${styles["selected"]}` : "")
          }
          onClick={() => setMobile(mobile === "true" ? "false" : "true")}
        >
          {/* <img className={styles["custom-svg"]} src="/web.svg" alt="" /> */}
          <MobileOutlined style={{ height: 20 }} />
          Mobile
        </Button>
        <Button
          className={
            styles["select-button"] +
            (webApp === "true" ? ` ${styles["selected"]}` : "")
          }
          onClick={() => setWebApp(webApp === "true" ? "false" : "true")}
        >
          <img className={styles["custom-svg"]} src="/web.svg" alt="" />
          WebApp
        </Button>
        <p
          className={styles["add-text"]}
          onClick={() => {
            setShowFeedback(true);
            setErrors(false);
          }}
        >
          Report a feedback
        </p>
      </div>
      <div className={styles["cusmtom-table"]} style={{ height: 490 }}>
        <Table
          style={{ height: 490 }}
          dataSource={data}
          columns={columns}
          expandable={{ expandedRowRender }}
          pagination={false}
          scroll={{
            x: 957,
            y: 390,
          }}
          loading={loading}
        />
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["left"]}>
          <div
            className={
              styles["full-payment"] +
              (fullPayment ? ` ${styles["selected-payment"]}` : "")
            }
            onClick={() => {
              if (!fullPayment) setFullPayment(!fullPayment);
            }}
          >
            <p className={styles["features-days"]}>
              {numberOfFeatures} features
              {/* - {Math.round(totalDay / 7)} weeks */}
            </p>
            <p className={styles["cost"]}>
              Full payment <img src="/circle.svg" /> ${" "}
              {Math.round(totalCost).toLocaleString("en-US")}/package
            </p>
          </div>
          <div className={styles["flex"]}>
            <div
              className={
                styles["monthly-payment"] +
                (!fullPayment ? ` ${styles["selected-payment"]}` : "")
              }
              onClick={() => {
                if (fullPayment) setFullPayment(!fullPayment);
              }}
            >
              <p className={styles["features-days"]}>
                {numberOfFeatures} features
                {/* - {Math.round(totalDay / 7)} weeks */}
              </p>
              <p className={styles["cost"]}>
                Monthly payment <img src="/circle.svg" /> ${" "}
                {Math.round((totalCost * 1.05) / 12).toLocaleString("en-US")}
                /month
              </p>
            </div>
            <Tooltip
              overlayInnerStyle={{ width: "400px" }}
              color={"white"}
              title={
                <div className={styles["tooltips"]}>
                  We offer you the installment option so that you can pay this
                  amount over a period of 12 months.{" "}
                  <span>The number of installment months</span> can be{" "}
                  <span>flexible to change</span> after discussion.
                </div>
              }
            >
              <img src="/tooltips.svg" alt="" />
            </Tooltip>
          </div>
        </div>
        <div className={styles["right"]}>
          {/* {data.length > 0 && (
            <div
              className={styles["timeline"]}
              onClick={() => {
                setStep(2);
                analytics.track("timeline-chatbot");
              }}
            >
              <span>Timeline</span>
            </div>
          )} */}
          {data.length > 0 && (
            <CalendlyLinkWidget
              analytics={analytics}
              eventName="call-chatbot"
              buttonName="Schedule a call"
              buttonStyle="go-with-us"
            />
          )}
        </div>
      </div>
      <Modal
        open={preview}
        onOk={handleClosePreview}
        onCancel={handleClosePreview}
        footer={null}
        centered
        width={"80%"}
      >
        <div className={styles["popup"]}>
          <h2>UI Screen</h2>
          <div className={styles["popup-box"]}>
            <p className={styles["feature-type"]}>{featureType}</p>
            <p className={styles["feature-name"]}>{selectedFeature.name}</p>
            {Features.map(
              (feature, index) =>
                feature.id === selectedFeature.id && (
                  <img
                    key={index}
                    className={
                      styles["popup-image"] +
                      (type === "desktop"
                        ? " " + styles["desktop"]
                        : " " + styles["mobile"])
                    }
                    src={
                      type === "desktop"
                        ? feature.list_image.desktop[currentIndex]
                        : feature.list_image.mobile[currentIndex]
                    }
                    alt="mail_ty"
                  />
                )
            )}
            <div className={styles["btn-group"]}>
              <img
                className={styles["left-btn"]}
                onClick={() => {
                  const feature = Features.find(
                    (feature) => feature.id === selectedFeature.id
                  );
                  let images = [];
                  if (type === "desktop") {
                    images = feature.list_image.desktop;
                  } else images = feature.list_image.mobile;
                  handlePrevClick(images);
                }}
                src="/arrow-prev.svg"
                alt="prev"
              />
              <img
                onClick={() => {
                  const feature = Features.find(
                    (feature) => feature.id === selectedFeature.id
                  );
                  let images = [];
                  if (type === "desktop") {
                    images = feature.list_image.desktop;
                  } else images = feature.list_image.mobile;
                  handleNextClick(images);
                }}
                src="/arrow-next.svg"
                alt="next"
              />
            </div>
            {currentIndex + 1} {"/"}{" "}
            {type === "desktop"
              ? Features.find((feature) => feature.id === selectedFeature.id)
                  ?.list_image?.desktop.length
              : Features.find((feature) => feature.id === selectedFeature.id)
                  ?.list_image?.mobile.length}
          </div>
          <div className={styles["type-group"]}>
            <div
              className={
                styles["btn"] +
                " " +
                styles["web"] +
                " " +
                (type === "desktop" ? styles["selected"] : "")
              }
              onClick={handleSelectDesktop}
            >
              <img src="/web-select.svg" alt="web" />
              <span>Desktop Website</span>
            </div>
            <div
              className={
                styles["btn"] +
                " " +
                styles["phone"] +
                " " +
                (type === "mobile" ? styles["selected"] : "")
              }
              onClick={handleSelectMobile}
            >
              <img src="/phone-select.svg" alt="phone" />
              <span>Mobile Website</span>
            </div>
          </div>
        </div>
      </Modal>
      <Feedback
        errors={errors}
        setErrors={setErrors}
        setStepChatbot={setStep}
        handleReset={handleReset}
        open={showFeedback}
        setOpen={setShowFeedback}
      />
    </div>
  );
};

export default ListFeature;
