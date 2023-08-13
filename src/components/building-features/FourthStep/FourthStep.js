"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import SimilarTechItem from "../SimilarTechItem/SimilarTechItem";
import PlatformItem from "../PlatformItem/PlatformItem";
import styles from "./FourthStep.module.scss";
import { axiosPost } from "@/utils/axios";

const FourthStep = ({ getStep }) => {
  const router = useRouter();

  const [listTab] = useState([
    {
      id: 1,
      title: "Similar Apps",
    },
    {
      id: 2,
      title: "Features",
    },
    {
      id: 3,
      title: "Delivery",
    },
  ]);

  const [selectedTab, setSelectedTab] = useState(1);
  const [similarTech, setSimilarTech] = useState([]);
  const [similarApps, setSimilarApps] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [objFeatures, setObjFeatures] = useState([]);
  const [arraySelectedFeatures, setArraySelectedFeatures] = useState([]);
  const [projectSpeed, setProjectSpeed] = useState();
  const [project, setProject] = useState("");
  const [full_name, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSimilarApps(JSON.parse(localStorage.getItem("similar_apps") || "[]"));
    setSelectedPlatform(
      JSON.parse(localStorage.getItem("selected_platform") || "[]")
    );
    setObjFeatures(
      JSON.parse(localStorage.getItem("selected_features") || "[]")
    );
    setArraySelectedFeatures(
      JSON.parse(localStorage.getItem("array_selected_feature") || "[]")
    );
    setSimilarTech(localStorage.getItem("similar_tech"));
    setProjectSpeed(localStorage.getItem("project_speed"));
  }, []);

  const onSelectTab = (id) => {
    setSelectedTab(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "project":
        setProject(value);
        break;
      case "full_name":
        setFullName(value);
        break;
      case "phone_number":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const renderListTab = () => {
    return listTab.map((item) => (
      <div
        key={item.id}
        onClick={() => onSelectTab(item.id)}
        className={
          styles["tab-item"] +
          " " +
          `${selectedTab === item.id ? styles["active"] : ""}`
        }
      >
        {item.title}
      </div>
    ));
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = () => {
    if (isSubmitSuccess) {
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }
    setIsSubmitSuccess((prevState) => !prevState);
  };

  const handleOutsideClick = (e) => {
    if (node.current && !node.current.contains(e.target)) {
      handleClick();
    }
  };

  const renderListSimilarApp = () => {
    return similarApps.map((item) => (
      <SimilarTechItem key={item.id} item={item} selectSimilarApps={() => {}} currentStep={4} />
    ));
  };
  const sendFeature = async (projectRes) => {
    try {
      const formatFeature = {};
      for (let f in objFeatures) {
        if (objFeatures[f].length) {
          formatFeature[f] = objFeatures[f]
            .map((item) => item.feature)
            .join(", ");
        }
      }
      const data = await axiosPost("/feature", {
        project_id: projectRes.data.id,
        feature: formatFeature,
      });
      if (data) {
        setIsSubmitSuccess(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsSubmitSuccess(false);
      setIsLoading(false);
    }
  };
  const sendProject = async (userInfo) => {
    try {
      const data = await axiosPost("/project", {
        name: project,
        type: similarTech,
        similar_app: similarApps.map((item) => item.title).join(", "),
        platforms: selectedPlatform.map((item) => item.title).join(", "),
        speed: projectSpeed,
        user_id: userInfo.id,
      });
      if (data) {
        sendFeature(projectRes);
      }
    } catch (error) {
      setIsSubmitSuccess(false);
      setIsLoading(false);
    }
  };

  const sendUser = async () => {
    try {
      const data = await axiosPost("/user", {
        username: full_name,
        email,
        phone: phone_number,
      });
      if (data) {
        setIsSubmit(true);
        setIsLoading(true);
        const userInfo = data?.data;
        await sendProject(userInfo);
      }
    } catch (error) {
      setIsSubmit(false);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      sendUser();
    } else {
      alert("Your email is invalid!");
    }
  };

  const renderListPlatform = () => {
    return selectedPlatform.map((item) => (
      <PlatformItem
        key={item.id}
        item={item}
        onSelectPlatform={() => {}}
        currentStep={4}
      />
    ));
  };

  const renderListFeatures = () => {
    return arraySelectedFeatures.map((item) => (
      <div className={styles["feature-name"]} key={item.feature}>
        - {item.feature}
      </div>
    ));
  };

  const editApp = (value) => {
    getStep(value);
  };

  const onClickBackToHomePage = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles["fourth-step-container"]}>
        {isSubmit && (
          <div className={styles["overlay"]}>
            {isLoading && <div className={styles["donut"]} />}
            {isSubmitSuccess && !isLoading && (
              <div className={styles["popup-inform"]}>
                <div className={styles["icon-inform"]}>
                  <img src="/images/success.png" alt="icon-inform" />
                </div>
                <div className={styles["popup-title"]}>Success!</div>
                <div className={styles["popup-text"]}>
                  Your request has been sent successfully!
                </div>
                <button
                  className={styles["redirect-btn"]}
                  onClick={onClickBackToHomePage}
                >
                  OK
                </button>
              </div>
            )}
            {!isSubmitSuccess && !isLoading && (
              <div className={styles["popup-inform"]} ref={node}>
                <div className={styles["icon-inform"]}>
                  <img src="/images/fail.png" alt="icon-inform" />
                </div>
                <div className={styles["popup-title"]}>Failed!</div>
                <div className={styles["popup-text"]}>
                  Your request has been sent fail!
                </div>
                <button
                  className={styles["redirect-btn"]}
                  style={{ color: isSubmitSuccess ? "#417505" : "#d0021b" }}
                  onClick={() => setIsSubmit(false)}
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        )}
        <div className={styles["fourth-step-wrap"]}>
          <div className={styles["page-content-left"]}>
            <div className={styles["list-tab"]}>{renderListTab()}</div>
            {selectedTab === 1 && (
              <div className={styles["list-items-of-tab"]}>
                <div className={styles["title"]}>
                  <div className={styles["title-left"]}>
                    Similar Apps ({similarApps.length})
                  </div>
                  <div
                    className={styles["change-button"]}
                    onClick={() => editApp(1)}
                  >
                    Change
                  </div>
                </div>
                <div className={styles["list-similar-app"]}>
                  {renderListSimilarApp()}
                </div>
              </div>
            )}

            {selectedTab === 2 && (
              <div className={styles["list-items-of-tab"]}>
                <div className={styles["title"]}>
                  <div className={styles["title-left"]}>
                    Features ({arraySelectedFeatures.length})
                  </div>
                  <div
                    className={styles["change-button"]}
                    onClick={() => editApp(2)}
                  >
                    Change
                  </div>
                </div>
                <div className={styles["list-feature"]}>
                  {renderListFeatures()}
                </div>
              </div>
            )}

            {selectedTab === 3 && (
              <div className={styles["list-items-of-tab"]}>
                <div className={styles["title"]}>
                  <div className={styles["title-left"]}>
                    Delivery ({selectedPlatform.length})
                  </div>
                  <div
                    className={styles["change-button"]}
                    onClick={() => editApp(3)}
                  >
                    Change
                  </div>
                </div>
                <div className={styles["list-similar-app"]}>
                  {renderListPlatform()}
                </div>
              </div>
            )}
          </div>

          <div className={styles["page-content-right"]}>
            <div className={styles["title"]}>Contact us to get the quote</div>
            <form className={styles["client-info"]} onSubmit={handleSubmit}>
              <div className={styles["label-title"]}>Project name:</div>
              <div className={styles["input-project"]}>
                <input
                  required
                  name="project"
                  autoComplete="off"
                  value={project}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-title"]}>Full name:</div>
              <div className={styles["input-project"]}>
                <input
                  required
                  name="full_name"
                  autoComplete="off"
                  value={full_name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-title"]}>Phone number:</div>
              <div className={styles["input-project"]}>
                <input
                  required
                  name="phone_number"
                  autoComplete="off"
                  type="number"
                  value={phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-title"]}>Email:</div>
              <div className={styles["input-project"]}>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className={styles["submit-btn"]}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthStep;
