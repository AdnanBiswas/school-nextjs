import styles from "./style.module.css";
import Link from 'next/link'

const listbox = () => {
    return (
        <>

            
                <div className={styles.noticeList}>
                    <h3>নোটিশ বোর্ড</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" />
                                        </div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" /></div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" /></div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" /></div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" /></div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/news-event/ssc-exam-routine-2022">
                                <a>
                                    <div className={styles.gridcontainer2}>
                                        <div className={styles.item1}>
                                            <img src="/Notice2.svg" /></div>
                                        <h4>এস এস সি পরীক্ষা-২০২২ এর সময়সূচী</h4>
                                        <div><span>০৯মার্চ, ২০২২</span></div>
                                    </div>
                                </a>
                            </Link>
                        </li>


                    </ul>
                    <div className={styles.morenotice}><a href="/news-event">সবগুলো জানতে »</a></div>

                </div>


        </>
    )
}

export default listbox
