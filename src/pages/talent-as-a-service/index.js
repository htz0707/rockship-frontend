"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Row, Col, Button } from 'antd';
import CustomLayout from "@/components/Layout";
import { useRouter } from "next/router";
const TalentAsAService = () => {
    const router = useRouter();
    return (
        <>
            <CustomLayout link={"talent-as-a-service"}>
                <div className={styles["box-1"]}>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={12} className={styles["box-1-left"]}>
                            <p className={styles["grey-text"]}> ROCKSHIP STAFFING SERVICE PAGE </p>
                            <p className={styles["key-message"]}> Search for skilled engineers globally</p>
                            <div className={styles["contents-box"]}>
                                <div className={styles["contents"]}>
                                    <img src="/tick.svg" alt="tick" />
                                    <p className={styles["sub-text"]}> Hire on-demand our full-time staff for a task or
                                        project you want to complete quickly.
                                    </p>
                                </div>
                                <div className={styles["contents"]}>
                                    <ul>We have screened the on-demand staffs rigorously so that
                                        it is smooth to work directly with them.</ul>
                                </div>


                                <div className={styles["contents"]}>
                                    <img src="/tick.svg" alt="tick" />
                                    <p className={styles["sub-text"]}> Plan for your engineering team expansion
                                        within 3 months by sharing the hiring plan.</p>
                                </div>
                            </div>
                            <Col xs={0} sm={24}>
                                <Button
                                    className={styles['homepage-button-1']}
                                    onClick={() => router.push("/talents")}
                                >
                                    Hire Talents
                                    <img
                                        src="/Arrow - Right.svg"
                                        alt="arrow"
                                        className={styles["arrow-icon"]}
                                    />  
                                </Button>
                                <Button
                                    className={styles["homepage-button-2"]}
                                    onClick={() => window.open("https://calendly.com/rockship-co/30min-free-consulting", "_blank")}
                                >
                                    Share hiring plan
                                    <img
                                        src="/Call.svg"
                                        alt="arrow"
                                        className={styles["call-icon"]}
                                    />
                                </Button>
                                </Col>
                                <Col xs={24} sm={0}>
                                <Button
                                    className={styles['homepage-button-1']}
                                    onClick={() => router.push("/talents")}
                                >
                                    Hire Talents
                                    <img
                                        src="/Arrow - Right.svg"
                                        alt="arrow"
                                        className={styles["arrow-icon"]}
                                    />
                                </Button>
                                <Button
                                    className={styles["homepage-button-2"]}
                                    onClick={() => window.open("https://calendly.com/rockship-co/30min-free-consulting", "_blank")}
                                >
                                    Share hiring plan
                                    <img
                                        src="/Call.svg"
                                        alt="arrow"
                                        className={styles["call-icon"]}
                                    />
                                </Button>
                        </Col>
                        </Col>
                        
                        <Col xs={24} sm={12} className={styles["col"]}>
                            <div className={styles["robot-hands"]}>
                            <img
                                src="/global-engineers-graph.png"
                                alt="robot-hands"
                            />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles["box-4"]}>
                    <div className={styles["box-AI-Stack"]}>
                        <h3>Why Rockship? </h3>
                        <img
                            src="/why-rockship-2x.png"
                            alt="Why Rockship?"
                        />
                    </div>
                </div>
            </CustomLayout>
        </>
    );
}
export default TalentAsAService;
