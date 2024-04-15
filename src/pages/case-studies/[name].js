import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import MetaTags from "@/components/MetaTags";
import CustomLayout from "@/components/Layout";
import styles from "@/styles/case-studies-detail.module.scss";

import useWindowSize from "@/hooks/useWindowSize";
import ContentIsense from "@/components/ContentCaseStudies/ContentIsense";
import ContentRovo from "@/components/ContentCaseStudies/ContentRovo";
import ContentLiveo from "@/components/ContentCaseStudies/ContentLiveo";
import ContentTedez from "@/components/ContentCaseStudies/ContentTedez";
import ContentWorknow from "@/components/ContentCaseStudies/ContentWorknow";
import ContentOmnichannel from "@/components/ContentCaseStudies/ContentOmnichannel";
import ContentMeiMei from "@/components/ContentCaseStudies/ContentMeiMei";
import { HighLightItem } from "@/components/ContentCaseStudies/Common";
import FormModal from "@/components/FormModal";

import { analytics } from "@/segment/segment";
import { getCaseStudiesDetail } from "../api/case-studies/[name]";

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
    <>
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
    </>
  );
};

const BannerItem = ({ src, name }) => {
  return (
    <div className={styles["banner-content-item"]}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
};
const DescriptionItem = ({ title, data = [] }) => {
  return (
    <div className={styles["description-item"]}>
      <h3>{title}</h3>
      {data?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

const MenuItem = ({ title, lsValue, content }) => {
  return (
    <div className={styles["menu-item"]}>
      <h3>{title}</h3>
      <div className={styles["divider"]} />
      {content && <p>{content}</p>}
      {lsValue?.length && (
        <ul>
          {lsValue?.map((item, index) => {
            return <li key={index}>{item?.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
const CaseStudiesDetail = ({ itemCaseStudy }) => {
  const router = useRouter();
  const size = useWindowSize();
  const [isShowContact, setIsShowContact] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [errors, setErrors] = React.useState(false);

  const handleOnClickBack = () => {
    router.back();
  };

  useEffect(() => {
    const handleResize = () => {
      if (size.width <= 740) {
        setIsBack(true);
      } else {
        setIsBack(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  const renderContent = (id) => {
    if (id === 1 || id === 5 || id === 7 || id === 8 || id === 12 || id === 13 || id === 14 || id === 15 || id === 16 || id === 17) {
      return (
        <>
          <div className={styles["description"]}>
            <DescriptionItem
              title={"Challenge"}
              data={itemCaseStudy?.challenges}
            />
            <DescriptionItem
              title={"Solution"}
              data={itemCaseStudy?.solutions}
            />
          </div>
          <div className={styles["menu-list"]}>
            {
              itemCaseStudy?.id === 16 &&
              <div style={{ display: 'flex', justifyContent: 'space-between', overflow:'auto', marginBottom: '15px', marginTop: '15px' }}>
                {itemCaseStudy?.mains?.map((item, index) => { return (<img key={index} style={{ width: '250px' }} src={item?.src} alt={"menu"} />); })}
              </div>
            }
            {itemCaseStudy?.id !== 16 && itemCaseStudy?.mains?.map((item, index) => {
              if (item.content.length === 0 && item.title.length === 0) {
                return (<img key={index} style={{ marginTop: '15px', marginBottom: '15px' }} src={item?.src} alt={"menu"} />);
              }
              if (item.content && !item.src) {
                return (
                  <div className={styles["menu"]} key={index}>
                    <p>{item.content}</p>
                  </div>
                );
              }
              return (
                <div className={styles["menu"]} key={index}>
                  <MenuItem
                    title={item?.title}
                    lsValue={item?.data}
                    content={item?.content}
                  />
                  <img src={item?.src} alt={"menu"} />
                </div>
              );
            })}
          </div>
        </>
      );
    }
    if (id == 2) {
      return <ContentWorknow />;
    }
    if (id === 3) {
      return <ContentRovo />;
    }
    if (id === 4) {
      return <ContentIsense />;
    }
    if (id === 6) {
      return <ContentLiveo />;
    }
    if (id === 9) {
      return <ContentTedez />;
    }
    if (id === 10) {
      return <ContentOmnichannel />;
    }
    if (id === 11) {
      return <ContentMeiMei />;
    }
    return null;
  };
  const getReview = (reviewsCount) => {
    if (reviewsCount > 0) {
      return (
        <>
          <div className={styles["review"]}>
            <h3>Reviews from our customers</h3>
            {itemCaseStudy?.reviews?.map((item) => {
              return (
                <div className={styles["card-review"]} key={item.id}>
                  <div className={styles["card-left"]}>
                    <img src={"/ceo.png"} alt="menu" />
                    <p>
                      <span>{item.title}</span> {item.name}
                    </p>
                  </div>
                  <div className={styles["divider"]} />
                  <div className={styles["card-right"]}>
                    {item?.data?.map((item1, index) => {
                      return <p key={index}>{item1}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <MetaTags
        title={"Rockship | " + itemCaseStudy?.title}
        description={itemCaseStudy?.description}
        image={itemCaseStudy?.src}
      />
      <CustomLayout link={"studies"} isBack={isBack}>
        <div className={styles["case-studies-detail"]} id="case-studies-detail">
          <Button className={styles["button-back"]} onClick={handleOnClickBack}>
            <img src={"/arrow-left-gray.svg"} alt="back" />
            <p>Back to list</p>
          </Button>
          <Row>
            <div className={styles["banner"]}>
              <Image
                src={itemCaseStudy?.src || "/banner-case-studies.png"}
                alt="banner"
                quality={80}
                priority
                fill={true}
              />
              <div className={styles["banner-content"]}>
                <h3>{itemCaseStudy?.title}</h3>
                <div className={styles["banner-content-list"]}>
                  <BannerItem src={"/work.svg"} name={itemCaseStudy?.company} />
                  <BannerItem
                    src={"/calendar.svg"}
                    name={itemCaseStudy?.duration}
                  />
                  <BannerItem
                    src={"/danger-circle.svg"}
                    name={itemCaseStudy?.program}
                  />
                </div>
              </div>
            </div>
          </Row>
          <Row gutter={16} className={styles["row-mobile"]}>
            <Col xs={24} md={0}>
              <div className={styles["information"]}>
                <div className={styles["row"]}>
                  <h4>Market: </h4>
                  <p>{itemCaseStudy?.market}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Industry: </h4>
                  <p>{itemCaseStudy?.industry}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Features: </h4>
                  <p>{itemCaseStudy?.features}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Company size: </h4>
                  <p>{itemCaseStudy?.companySize}</p>
                </div>
              </div>
            </Col>
            <Col xs={24} md={18}>
              <div className={styles["highlight"]}>
                {itemCaseStudy?.highlights?.map((item) => {
                  return (
                    <HighLightItem
                      key={item.id}
                      src={item.src}
                      name={item.name}
                      color={item.color}
                    />
                  );
                })}
              </div>
              {renderContent(itemCaseStudy?.id)}
              {getReview(itemCaseStudy?.reviews?.length)}
            </Col>
            <Col xs={0} md={6}>
              <div className={styles["card"]}>
                <div className={styles["row"]}>
                  <h4>Market: </h4>
                  <p>{itemCaseStudy?.market}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Industry: </h4>
                  <p>{itemCaseStudy?.industry}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Features: </h4>
                  <p>{itemCaseStudy?.features}</p>
                </div>
                <div className={styles["row"]}>
                  <h4>Company size: </h4>
                  <p>{itemCaseStudy?.companySize}</p>
                </div>

                <div className={styles["hashtag"]}>
                  {itemCaseStudy?.hashtags?.map((item) => {
                    return (
                      <div key={item.id} className={styles["hashtag-item"]}>
                        <p>{`#${item.name}`}</p>
                      </div>
                    );
                  })}
                </div>
                <CalendlyLinkWidget
                  analytics={analytics}
                  eventName="call-case-study"
                  buttonName="Schedule a demo"
                  buttonStyle="build"
                />
              </div>
            </Col>
            <div className={styles["build-mobile"]}>
              <CalendlyLinkWidget
                analytics={analytics}
                eventName="call-case-study"
                buttonName="Schedule a demo"
                buttonStyle="button"
              />
            </div>
          </Row>
        </div>
        <FormModal
          errors={errors}
          setErrors={setErrors}
          open={isShowContact}
          setOpen={setIsShowContact}
        />
      </CustomLayout>
    </>
  );
};

export default CaseStudiesDetail;

export const getStaticProps = async ({ params }) => {
  const { data } = await getCaseStudiesDetail(params.name);

  return {
    props: {
      itemCaseStudy: data,
      overwriteMetaTag: true,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
