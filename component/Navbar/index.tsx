import React from "react";

const Navbar = () => {

    return (
        <>
        <div className="topnavbar">
				<div className="container">
					<nav className="navbar navbar-expand-lg">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="/">হোম</a>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									স্কুল প্রশাসন
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">প্রধান শিক্ষক</a></li>
									<li><a className="dropdown-item" href="#">সহকারী প্রধান শিক্ষক</a></li>
									<li><a className="dropdown-item" href="#">শিক্ষক বৃন্দ</a></li>
									<li><a className="dropdown-item" href="#">শ্রেণি শিক্ষকবৃন্দ</a></li>
									<li><a className="dropdown-item" href="#">কমর্কর্তা-কর্মচারী</a></li>
									<li><a className="dropdown-item" href="#">পরিচালনা পরিষদ</a></li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									প্রাতিষ্ঠানিক কার্যক্রম
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">ক্লাস কার্যক্রম</a></li>
									<li><a className="dropdown-item" href="#">বাৎসরিক কার্যক্রম</a></li>
									<li><a className="dropdown-item" href="#">পাঠ্যক্রম</a></li>
									<li><a className="dropdown-item" href="#">কোর্স সমুহ</a></li>
									{/* <li><a className="dropdown-item" href="#">পরীক্ষার ফল</a></li> */}
								</ul>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="/">গ্যালারি</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">ভর্তি তথ্য</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">রেজাল্ট</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">যোগাযোগ</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
        </>
    )
}

export default Navbar