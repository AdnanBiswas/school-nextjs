import styles from "./style.module.css";
import Link from 'next/link'


const menubox = () => {
    return (
        <>
            <div className={styles.menuheader}>
                <h3>প্রয়োজনীয় বিষয়</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>ক্লাস রুটিন</span>
                            </a>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>শিক্ষা বর্ষপঞ্জি</span>
                            </a>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>পাঠ্যক্রম</span>
                            </a>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>পরীক্ষার রুটিন</span>
                            </a>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>সিলেবাস</span>
                            </a>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#">
                            <a>
                                <img src="/rightarrow.svg" />
                                <span>স্বাধীনতার সুবর্ণজয়ন্তী কর্ণার</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default menubox