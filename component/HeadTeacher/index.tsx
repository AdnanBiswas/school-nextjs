import React from "react";
import styles from "./style.module.css";


const HeadTeacher = () => {

    return (
        <>
            <div className={`${styles.headTeacher} section-cont`}>
                <div className="container">
                    <h2 className="paraHeader">প্রধান শিক্ষকের বানী</h2>
                    <div className="row">
                        <div className="col-3">
                            <img src='/shatrajitpur-high-school-head-teacher.jpg' alt='SchoolLogo'></img>
                        </div>
                        <div className="col-9">
                            <div className={styles.speech}>
                                <p>
                                    সত্রাজিতপুর উচ্চ বিদ্যালয় ওয়েবসাইট খুলে সরকারের ডিজিটালাইজেশন কার্যক্রমে অন্তর্ভুক্ত হয়েছে এবং সরকারের ভিশন ২০২১ এর সাথে একাত্মতা প্রকাশ করেছে।
                                    বিদ্যালয়ের ওয়েবসাইটটিতে যে তথ্য, উপাত্ত থাকবে তা অবাধ তথ্য পাওয়ার অধিকার নিশ্চিত করবে এবং তা সবার কাছে সহজ লভ্য হবে।
                                    এটা নিশ্চিত যে, আমাদেরকে ইনফরমেশন হাইওয়েতে উঠতে গেলে, চলতে গেলে তথ্য প্রযুক্তির সর্বোচ্চ ব্যবহার নিশ্চিত করতে হবে।
                                    তথ্য প্রযুক্তির ব্যবহার নিশ্চিত করণের মাধ্যমে বিভিন্ন সরকারী দপ্তর, পরিদপ্তর ও অধিদপ্তরের কার্যক্রমে সচ্ছতা, গতিশীলতা, জবাবদিহিতা নিশ্চিত হবে
                                    এবং সেবার মান উন্নত হবে ও দুর্নীতি সহনীয় মাত্রায় নেমে আসবে বলে আমার দৃঢ় বিশ্বাস।
                                    পরিশেষে সত্রাজিতপুর উচ্চ বিদ্যালয় ওয়েবসাইটির সফলতা ও সর্বোত্তম ব্যবহার নিশ্চিত হোক এই কামনা করেই শেষ করছি।
                                </p>
                            </div>
                            <div className={styles.headTeacherName}>
                                <p><b>মোঃ সাদিকুল ইসলাম</b></p>
                                <p>প্রধান শিক্ষক, </p>
                                <p>সত্রাজিতপুর উচ্চ বিদ্যালয়</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default HeadTeacher