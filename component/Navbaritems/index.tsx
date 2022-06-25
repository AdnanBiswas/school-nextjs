import Link from "next/link"

const Navbaritems = () => {
	return (
		<div>

					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="/">হোম</a>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								স্কুল প্রশাসন
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link href="/p/প্রধান শিক্ষক"><a className="dropdown-item" >প্রধান শিক্ষক</a></Link> </li>
								<li><Link href="/p/সহকারী প্রধান শিক্ষক"><a className="dropdown-item">সহকারী প্রধান শিক্ষক</a></Link></li>
								<li><Link href="/p/শিক্ষক বৃন্দ"><a className="dropdown-item">শিক্ষক বৃন্দ</a></Link></li>
								<li><Link href="/p/শ্রেণি শিক্ষকবৃন্দ"><a className="dropdown-item">শ্রেণি শিক্ষকবৃন্দ</a></Link></li>
								<li><Link href="/p/কমর্কর্তা-কর্মচারী"><a className="dropdown-item">কমর্কর্তা-কর্মচারী</a></Link></li>
								<li><Link href="/p/পরিচালনা পরিষদ"><a className="dropdown-item">পরিচালনা পরিষদ</a></Link></li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								প্রাতিষ্ঠানিক কার্যক্রম
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link href="/p/ক্লাস কার্যক্রম"><a className="dropdown-item">ক্লাস কার্যক্রম</a></Link></li>
								<li><Link href="/p/বাৎসরিক কার্যক্রম"><a className="dropdown-item">বাৎসরিক কার্যক্রম</a></Link></li>
								<li><Link href="/p/পাঠ্যক্রম"><a className="dropdown-item">পাঠ্যক্রম</a></Link></li>
								<li><Link href="/p/কোর্স সমুহ"><a className="dropdown-item">কোর্স সমুহ</a></Link></li>
							</ul>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="/gallery">গ্যালারি</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">ভর্তি তথ্য</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">রেজাল্ট</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">যোগাযোগ</a>
						</li>
					</ul>
				</div>
	)
}
export default Navbaritems
