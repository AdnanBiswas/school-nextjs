import React from "react";
import styles from "./style.module.css";
import Link from 'next/link'
import ListBox from "../ListBox";

const NoticeBoard = () => {

    return (
        <>


            <div className={`${styles.noticeboard} section_box section-cont`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.gridContainer}>
                                <div className={styles.noticeboards}>
                                    <div className={styles.griditem1}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/exam.svg" />
                                            <h6>পরীক্ষার ফলাফল</h6>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.noticeboards}>
                                    <div className={styles.griditem2}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/routine.svg" />
                                            <h6>ক্লাশ রুটিন​</h6>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.noticeboards}>
                                    <div className={styles.griditem3}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/benefit.svg" />
                                            <h6>সুযোগ-সুবিধা</h6>
                                        </a>
                                    </div>

                                </div>
                                <div className={styles.noticeboards}>
                                    <div className={styles.griditem4}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/calendar.svg" />
                                            <h6>ক্যালেন্ডার</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <ListBox/>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default NoticeBoard