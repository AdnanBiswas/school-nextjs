import React from "react";

const Footer = () => {

    return (
        <>
        <section className="footer">
				<div className="container">
					<div className="row">
						<div className="col-3">
							<img src='/SchoolLogo.jpg' alt='SchoolLogo' width={150}></img>
							<p>শিবগঞ্জ, সত্রাজিতপুর, </p>
							<p>	চাঁপাই নবাবগঞ্জ,  রাজশাহী- ১২০৭</p>
						</div>

						<div className="col-3">
							<h4>যোগাযোগ</h4>
							<ul className="list-unstyled">
								<li className="mb-2">ইমেইলঃ</li>
								<li>sh124606@gmail.com</li>
							</ul>
							<h4>ব্যবহার নির্দেশিকা</h4>
							<ul className="list-unstyled">
								<li className="mb-2"><a href="#">School এর ব্যবহার জানতে ক্লিক করুন</a></li>
							</ul>
						</div>

						<div className="col-3">
							<h4>গুরুত্বপূর্ণ লিঙ্ক</h4>
							<ul className="list-unstyled">
								<li className="mb-2" ><a href="#">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a></li>
								<li className="mb-2" ><a href="#">শিক্ষা মন্ত্রনালয়</a></li>
								<li className="mb-2" ><a href="#">ই-বুক</a></li>
								<li className="mb-2" ><a href="#">শিক্ষক বাতায়ন</a></li>
								<li className="mb-2" ><a href="#">মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট সিস্টেম</a></li>
							</ul>
						</div>

						<div className="col-3">
							<h4>গুরুত্বপূর্ণ লিঙ্ক</h4>
							<ul className="list-unstyled">
								<li className="mb-2" ><a href="#">দিনাজপুর শিক্ষা বোর্ড</a></li>
								<li className="mb-2" ><a href="#">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</a></li>
								<li className="mb-2" ><a href="#">জেলা প্রাথমিক শিক্ষা অফিস</a></li>
								<li className="mb-2" ><a href="#">জাতীয় শিক্ষা বোর্ড</a></li>
								<li className="mb-2" ><a href="#">জেলা প্রশাসকের কার্যালয়, দিনাজপুর</a></li>
							</ul>
						</div>

					</div>
				</div>
			</section>

        </>

    )
}
export default Footer