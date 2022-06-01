import React from "react";
import styles from "./style.module.css";

const StudentAttendance = () => {

    return (
        <>
            <div className="section_box section-cont">
                <div className="container">
                    <h2 className="paraHeader">শিক্ষার্থীদের উপস্থিতি</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.gridcontainer}>
                                        <div className={styles.item1}>
                                            <img src="/teacher.svg" /></div>
                                        <h4>৪৫ জন</h4>
                                        <p>শিক্ষক</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className={styles.gridcontainer}>
                                        <div className={styles.item2}>
                                            <img src="/student.svg" /></div>
                                        <h4>২,০০৭ জন</h4>
                                        <p>শিক্ষার্থী</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-md-6">
                            <div className={styles.piechart}>
                                <div className={`${styles.piechart1} pie1`}>
                                </div>
                                <div className={`${styles.piechart2} pie2`}>
                                    <h4>৭০%</h4>
                                    <span>উপস্থিতি</span>
                                </div>
                                <div className={styles.absent}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg>
                                    <span>অনুপস্থিত ৬০২</span>
                                </div>
                                <div className={styles.present}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg>
                                    <span>উপস্থিতি ১,৪০৫</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default StudentAttendance