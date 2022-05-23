import React from "react";
import styles from './style.module.css';

const LatestNotice = () => {

    return (
        <>
        
            <div className={styles.latestNotices}>
                <div className="row">
                    <div className="col-2">
                        <h4>Latest Notice</h4>
                    </div>
                    <div className="col-10">
                        <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                            {/* <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;CNN News</span></div> */}
                            {/* <marquee className="news-scroll" behavior="scroll" direction="left" onMouseOver={stop()} onMouseOut={start()}>
                                <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a>
                                <span className="dot"></span>
                                <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a>
                                <span className="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                            </marquee> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LatestNotice