"use client";

import React, { useState, useEffect } from "react";

import FirstStep from "@/components/building-features/FirstStep/FirstStep";
import SecondStep from "@/components/building-features/SecondStep/SecondStep";
import ThirdStep from "@/components/building-features/ThirdStep/ThirdStep";
import FourthStep from "@/components/building-features/FourthStep/FourthStep";

import styles from "@/styles/features.module.scss";
import CustomLayout from "@/components/Layout";
import FeatureFooter from "@/components/building-features/FeatureFooter/FeatureFooter";
import useIsResponsive from "@/hooks/useIsResponsive";
import MetaTags from '@/components/MetaTags';
let featuresLocal = [];
let similarAppsLocal = [];

const list_techs = [
  {
    id: 1,
    key: "fintech",
    title: "fintech",
    description:
      "Mobile Wallet, Crypto Currency Exchange, Portfolio Analytics Dashboard",
    list_features_suggest: {
      authentication: [1, 2, 3],
      "security-privacy": [1],
      finance: [1, 5],
      statistics: [1],
    },
  },
  {
    id: 2,
    key: "edtech",
    title: "edtech",
    description: "Video Platform, Homework Digitalization, Livestreaming",
    list_features_suggest: {
      authentication: [1, 2, 3],
      "security-privacy": [1],
      finance: [1, 5],
    },
  },
  {
    id: 3,
    key: "e-commerce",
    title: "e-commerce",
    description: "Product Management, Order Cart, Payment Gateway",
    list_features_suggest: {
      authentication: [1, 2, 3],
      "e-commerge": [1, 3, 4, 5],
      payments: [1, 2],
    },
  },
  {
    id: 4,
    key: "legal-tech",
    title: "legal tech",
    description:
      "Document Management, Call Routing System, Lawyer Professional Profile",
    list_features_suggest: {
      authentication: [1, 2, 3],
      "security-privacy": [1],
      finance: [1, 5],
    },
  },
  {
    id: 5,
    key: "social-media",
    title: "social media",
    description: "Social Profile, Forum, Quiz Game, In-App Purchase",
    list_features_suggest: {
      media: [1, 2, 3, 4],
      "social-network": [1],
    },
  },
];

const features = [
  {
    id: 1,
    title: "Admin dashboard",
    key: "admin-dashboard",
    list_features: [
      {
        id: 1,
        key: "admin-dashboard",
        feature: "Account management(approve, deny user accounts",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/admin-dashboard.png",
        img_web: "/images/featTemplates/web/dashboard_account_management.png",
      },
      {
        id: 2,
        key: "admin-dashboard",
        feature: "Mail box",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/admin-mailbox.png",
        img_web: "/images/featTemplates/web/dashboard_mail_box.png",
      },
      {
        id: 3,
        key: "admin-dashboard",
        feature: "Chat box",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/admin-chatbox.png",
        img_web: "/images/featTemplates/web/dashboard_chat_box.png",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication",
    key: "authentication",
    list_features: [
      {
        id: 1,
        key: "authentication",
        feature: "Sign up",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mobile_sign-up.png",
        img_web: "/images/featTemplates/web/auth_sign_up.png",
      },
      {
        id: 2,
        key: "authentication",
        feature: "Sign in",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mobile_login.png",
        img_web: "/images/featTemplates/web/auth_login.png",
      },
      {
        id: 3,
        key: "authentication",
        feature: "Change password",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mobile_change_password.png",
        img_web: "/images/featTemplates/web/auth_change_password.png",
      },
    ],
  },
  {
    id: 3,
    title: "Customer evaluation",
    key: "customer-evaluation",
    list_features: [
      {
        id: 1,
        key: "customer-evaluation",
        feature: "Client testimonials",
        checked: false,
        img_mobile: null,
        img_web: "/images/featTemplates/web/client_testimonials.png",
      },
    ],
  },
  {
    id: 4,
    title: "E-commerce",
    key: "e-commerge",
    list_features: [
      {
        id: 1,
        key: "e-commerge",
        feature: "Shopping cart",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/Cart.png",
        img_web: "/images/featTemplates/web/ecommerce_cart.png",
      },
      {
        id: 2,
        key: "e-commerge",
        feature: "Product categories",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/categories.png",
        img_web: "/images/featTemplates/web/ecommerce _categories.png",
      },
      {
        id: 3,
        key: "e-commerge",
        feature: "Marketplace",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/marketplace.png",
        img_web: "/images/featTemplates/web/ecommerce_marketplace.jpg",
      },
      {
        id: 4,
        key: "e-commerge",
        feature: "Order Management (order history)",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/order-history.png",
        img_web: "/images/featTemplates/web/ecommerce_order_history.png",
      },
      {
        id: 5,
        key: "e-commerge",
        feature: "Order form",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/order-form.png",
        img_web: "/images/featTemplates/web/ecommerce_order_form.png",
      },
      {
        id: 6,
        key: "e-commerge",
        feature: "Wishlist",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/wishlist.png",
        img_web: "/images/featTemplates/web/ecommerce_order_form.png",
      },
    ],
  },
  {
    id: 5,
    title: "Music, Video, Photos, Livestream",
    key: "media",
    list_features: [
      {
        id: 1,
        key: "media",
        feature: "Digitalization of materials",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mvpl_digitals-meterials.png",
        img_web:
          "/images/featTemplates/web/mvpl_digitializations-materials.png",
      },
      {
        id: 2,
        key: "media",
        feature: "Livestreaming platform",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mvpl_live-stream.png",
        img_web: "/images/featTemplates/web/mvpl_livestream.png",
      },
      {
        id: 3,
        key: "media",
        feature: "On-demand videos",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mvpl_ondeman_video.png",
        img_web: "/images/featTemplates/web/mvpl_on-demand-video.png",
      },
      {
        id: 4,
        key: "media",
        feature: "Audio & Music library",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mvpl_music-library.png",
        img_web: "/images/featTemplates/web/mvpl_music-library.png",
      },
      {
        id: 5,
        key: "media",
        feature: "Slide show",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/mvpl_slideshow.png",
        img_web: "/images/featTemplates/web/mvpl_slideshow.png",
      },
    ],
  },
  {
    id: 6,
    title: "Social network",
    key: "social-network",
    list_features: [
      {
        id: 1,
        key: "social-network",
        feature: "Chat",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/social-chat.png",
        img_web: "/images/featTemplates/web/social_network_chat_box.png",
      },
      {
        id: 2,
        key: "social-network",
        feature: "Comment",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/social-comment.png",
        img_web: "/images/featTemplates/web/social_network_comment.png",
      },
      {
        id: 3,
        key: "social-network",
        feature: "Newsfeed",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/social-newfeeds.png",
        img_web: "/images/featTemplates/web/social_network_newfeed.png",
      },
      {
        id: 4,
        key: "social-network",
        feature: "Calling",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/social-call.png",
        img_web: "/images/featTemplates/web/social_calling.png",
      },
    ],
  },
  {
    id: 7,
    title: "Finance",
    key: "finance",
    list_features: [
      {
        id: 1,
        key: "finance",
        feature: "Crypto exchange",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/finance_crypto-exchange.png",
        img_web: "/images/featTemplates/web/finance _crypto_exchange.png",
      },
      {
        id: 2,
        key: "finance",
        feature: "E-wallet",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/finance_ewallet.png",
        img_web: "/images/featTemplates/web/finance_ewallet.png",
      },
      {
        id: 3,
        key: "finance",
        feature: "Crypto-wallet",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/finance_crypto-wallet.png",
        img_web: "/images/featTemplates/web/finance_crypto_wallet.png",
      },
      {
        id: 4,
        key: "finance",
        feature: "Fiat wallet",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/finance_crypto-wallet.png",
        img_web: "/images/featTemplates/web/finance_fiat_wallet.png",
      },
      {
        id: 5,
        key: "finance",
        feature: "Currency exchange",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/finance_curreny-exchange.png",
        img_web: "/images/featTemplates/web/finance_currency_exchange.png",
      },
    ],
  },
  {
    id: 8,
    title: "Payments",
    key: "payments",
    list_features: [
      {
        id: 1,
        key: "payments",
        feature: "Payment online",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/payments_online.png",
        img_web: "/images/featTemplates/web/payments_payment_online.png",
      },
      {
        id: 2,
        key: "payments",
        feature: "E-Invoice",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/payment_einvoice.png",
        img_web: "/images/featTemplates/web/payments_einvoice.png",
      },
    ],
  },
  {
    id: 9,
    title: "Games",
    key: "games",
    list_features: [
      {
        id: 1,
        key: "games",
        feature: "Leaderboard",
        checked: false,
        img_mobile: "games_leaderboards.png",
        img_web: "/images/featTemplates/web/games_gamescore.png",
      },
      {
        id: 2,
        key: "games",
        feature: "Game score",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/games_gamescore.png",
        img_web: "/images/featTemplates/web/games_leaderboard.png",
      },
    ],
  },
  {
    id: 10,
    title: "Others",
    key: "others",
    list_features: [
      {
        id: 1,
        key: "others",
        feature: "Search",
        checked: false,
        img_mobile: null,
        img_web: "/images/featTemplates/web/others_search.png",
      },
      {
        id: 2,
        key: "others",
        feature: "Document management",
        checked: false,
        img_mobile: "/images/featTemplates/mobile/others_search.png",
        img_web: "/images/featTemplates/web/others_document_management.png",
      },
    ],
  },
  {
    id: 11,
    title: "Security & Privacy",
    key: "security-privacy",
    list_features: [
      {
        id: 1,
        key: "security-privacy",
        feature: "Phone verification (OTP SMS)",
        checked: false,
        img_mobile:
          "/images/featTemplates/mobile/security_phone-verification.png",
        img_web: "/images/featTemplates/web/security_phone_verification.png",
      },
    ],
  },
  {
    id: 12,
    title: "Statistics",
    key: "statistics",
    list_features: [
      {
        id: 1,
        key: "statistics",
        feature: "Data visualization",
        checked: false,
        img_mobile:
          "/images/featTemplates/mobile/statistics_data-visualization.png",
        img_web: "/images/featTemplates/web/statistics_data_visualization.png",
      },
      {
        id: 2,
        key: "statistics",
        feature: "Graphical Charts",
        checked: false,
        img_mobile:
          "/images/featTemplates/mobile/statistics_graphical-charts.png",
        img_web: "/images/featTemplates/web/statistics_graphical_charts.png",
      },
    ],
  },
];
const Features = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [arrSimilarApp, setArrSimilarApp] = useState([]);
  const [arrPlatform, setArrPlatform] = useState([]);
  const [objFeatures, setObjFeatures] = useState({});
  const [listFeaturesSelected, setListFeaturesSelected] = useState([]);
  const [projectSpeed, setProjectSpeed] = useState("Slow");
  const [featuresUpdateArr, setFeaturesUpdateArr] = useState([]);
  const [selectedSimilarTechTitle, setSelectedSimilarTechTitle] =
    useState("fintech");
  const [isGoThroughSecondStep, setIsGoThroughSecondStep] = useState(false);
  const { isMobile } = useIsResponsive();

  const onClickNext = () => {
    if (currentStep === 1) {
      localStorage.setItem("similar_apps", JSON.stringify(arrSimilarApp));
      localStorage.setItem("similar_tech", selectedSimilarTechTitle);
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 2 || currentStep === 2.5) {
      localStorage.setItem("selected_features", JSON.stringify(objFeatures));
      localStorage.setItem(
        "array_selected_feature",
        JSON.stringify(listFeaturesSelected)
      );
      localStorage.setItem(
        "update_list_features",
        JSON.stringify(featuresUpdateArr)
      );
      if (isMobile) {
        if (listFeaturesSelected.length === 0) {
          alert("Please select feature(s)");
          setCurrentStep(2.5);
        } else {
          setCurrentStep(currentStep + 0.5);
          setIsGoThroughSecondStep(true);
        }
      } else {
        if (listFeaturesSelected.length === 0) {
          alert("Please select feature(s)");
          setCurrentStep(2);
        } else {
          setCurrentStep(currentStep + 1);
          setIsGoThroughSecondStep(true);
        }
      }
    } else if (currentStep === 3) {
      localStorage.setItem("selected_platform", JSON.stringify(arrPlatform));
      localStorage.setItem("project_speed", projectSpeed);
      if (!arrPlatform.length) {
        alert("Please select platform(s)!");
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const onClickBack = () => {
    if (currentStep === 2.5) {
      localStorage.setItem("selected_features", JSON.stringify(objFeatures));
      localStorage.setItem(
        "array_selected_feature",
        JSON.stringify(listFeaturesSelected)
      );
      localStorage.setItem(
        "update_list_features",
        JSON.stringify(featuresUpdateArr)
      );
      setCurrentStep(2);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      featuresLocal = JSON.parse(localStorage.getItem("update_list_features"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("similar_apps", "[]");
    localStorage.setItem("update_list_features", "[]");
    return () => {
      localStorage.setItem("update_list_features", "[]");
    };
  }, []);

  return (
    <>
        <MetaTags 
                  title={"Rockship | Browse Our Modules"} 
                  description = {"We have done 1000+ of software features and can quickly build new features for you with accurate estimation."} 
        />
    <CustomLayout link="features">
      <div className={styles["building-features-container"]}>
        <div className={styles["features-container"]}>
          {currentStep === 1 && (
            <FirstStep
              getValue={setArrSimilarApp}
              // similarAppsLocal={similarAppsLocal}
              getSelectedSimilarTechTitle={setSelectedSimilarTechTitle}
              selectedSimilarTechTitle={selectedSimilarTechTitle}
              listTech={list_techs}
              isMobile={isMobile}
            />
          )}
          {currentStep === 2 && (
            <SecondStep
              getValue={setListFeaturesSelected}
              features={featuresLocal.length === 0 ? features : featuresLocal}
              listTech={list_techs}
              objSimilarTechSelected={list_techs.find(
                (item) => item.key === selectedSimilarTechTitle
              )}
              isSelected={featuresLocal.length === 0 ? false : true}
              isMobile={isMobile}
              featuresUpdate={setFeaturesUpdateArr}
              featuresSelected={setListFeaturesSelected}
              currentStep={currentStep}
            />
          )}
          {currentStep === 2.5 && (
            <SecondStep
              getValue={setListFeaturesSelected}
              features={featuresLocal.length === 0 ? features : featuresLocal}
              listTech={list_techs}
              objSimilarTechSelected={list_techs.find(
                (item) => item.key === selectedSimilarTechTitle
              )}
              isSelected={featuresLocal.length === 0 ? false : true}
              isMobile={isMobile}
              featuresUpdate={setFeaturesUpdateArr}
              featuresSelected={setListFeaturesSelected}
              currentStep={currentStep}
            />
          )}
          {currentStep === 3 && (
            <ThirdStep
              getValue={setArrPlatform}
              getSpeed={setProjectSpeed}
              arrPlatform={arrPlatform}
              isMobile={isMobile}
            />
          )}
          {currentStep === 4 && (
            <FourthStep getStep={setCurrentStep} isMobile={isMobile} />
          )}
        </div>
        <FeatureFooter
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          isMobile={isMobile}
          onClickBack={onClickBack}
          onClickNext={onClickNext}
        />
      </div>
    </CustomLayout>
    </>
  );
};

export default Features;
