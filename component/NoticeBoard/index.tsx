import React from "react";
import styles from "./style.module.css";
import Link from 'next/link'

const NoticeBoard = () => {

    return (
        <>


            <div className={`${styles.noticeboard} section_box section-cont`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.gridContainer}>
                                <div className={`${styles.noticeboards} `}>
                                    <div className={styles.griditem1}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/exam.svg" />
                                            <h6>পরীক্ষার ফলাফল</h6>
                                        </a>
                                    </div>

                                </div>
                                <div className={`${styles.noticeboards} `}>
                                    <div className={styles.griditem2}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/routine.svg" />

                                            <h6>ক্লাশ রুটিন​</h6>
                                        </a>
                                    </div>

                                </div>
                                <div className={`${styles.noticeboards} `}>
                                    <div className={styles.griditem3}>
                                        <a href="#" className="card rounded-3">
                                            <img src="/benefit.svg" />

                                            <h6>সুযোগ-সুবিধা</h6>
                                        </a>
                                    </div>

                                </div>
                                <div className={`${styles.noticeboards} `}>
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
                            <div className={styles.noticeList}>
                                <h3>নোটিশ বোর্ড</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" />
                                                    </div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" /></div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" /></div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" /></div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" /></div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="#">
                                            <a>
                                                <div className={styles.gridcontainer2}>
                                                    <div className={styles.item1}>
                                                        <img src="/calendar4.svg" /></div>
                                                    <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                                    <div><span>০৯মার্চ, ২০২২</span></div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>


                                </ul>
                                <div className={styles.morenotice}><a href="#">সবগুলো জানতে »</a></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default NoticeBoard