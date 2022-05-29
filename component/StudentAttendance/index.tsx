import React from "react";
import styles from "./style.module.css";

const StudentAttendance = () => {

    return (
        <>
            <div className="section_box section-cont">
                <div className="container">
                    <h2 className="paraHeader">শিক্ষার্থীদের উপস্থিতি</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className={styles.gridcontainer}>
                                <div className={styles.item1}>
                                    <img src="/teacher.svg" /></div>
                                <h4>৪৫ জন</h4>
                                <p>শিক্ষক</p>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className={styles.gridcontainer}>
                                <div className={styles.item2}>
                                    <img src="/student.svg" /></div>
                                <h4>২,০০৭ জন</h4>
                                <p>শিক্ষার্থী</p>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default StudentAttendance