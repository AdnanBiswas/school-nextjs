import React from "react";
import Link from 'next/link';
const Footer = () => {

	return (
		<>
			<section className="footer">
				<div className="container">
					<div className="row">
						<div className="footerschoollogo col-md-3">
							<img src='/SchoolLogo.jpg' alt='SchoolLogo' width={150}></img>
							<p>শিবগঞ্জ, সত্রাজিতপুর, </p>
							<p>	চাঁপাই নবাবগঞ্জ,  রাজশাহী- ১২০৭</p>
						</div>

						<div className="col-md-3">
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

						<div className="col-md-3">
							<h4>গুরুত্বপূর্ণ লিঙ্ক</h4>
							<ul className="list-unstyled">
								<li className="mb-2" ><a href="http://www.dpe.gov.bd/">প্রাথমিক শিক্ষা অধিদপ্তর</a></li>
								<li className="mb-2" ><a href="http://www.moedu.gov.bd/">শিক্ষা মন্ত্রনালয়</a></li>
								<li className="mb-2" ><a href="http://www.dshe.gov.bd/">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a></li>
								<li className="mb-2" ><a href="http://www.teachers.gov.bd/">শিক্ষক বাতায়ন</a></li>
								<li className="mb-2" ><a href="#">মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট সিস্টেম</a></li>
							</ul>
						</div>

						<div className="col-md-3">
							<h4>গুরুত্বপূর্ণ লিঙ্ক</h4>
							<ul className="list-unstyled">
								<li className="mb-2" ><a href="http://www.rajshahieducationboard.gov.bd/">রাজশাহী শিক্ষা বোর্ড</a></li>
								<li className="mb-2" ><a href="http://www.nctb.gov.bd/">জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</a></li>
								<li className="mb-2" ><a href="http://www.deodinajpur.gov.bd/">জেলা প্রাথমিক শিক্ষা অফিস</a></li>
								<li className="mb-2" ><a href="http://www.educationboard.gov.bd/">জাতীয় শিক্ষা বোর্ড</a></li>
								<li className="mb-2" ><a href="http://www.chapainawabganj.gov.bd/">জেলা প্রশাসকের কার্যালয়, চাঁপাইনবাবগঞ্জ</a></li>
							</ul>
						</div>
					</div>

					<div className="emergencyContacts">
					<a href="https://www.999.gov.bd/"><img src="/999.png" width="100"/></a>
					<a href="http://333.gov.bd/"><img src="/333.png" width="100"/></a>
					<a href="http://acc.org.bd/site/page/4f567d5f-eb76-4e51-b6d0-070124a8a5d3/%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%A6%E0%A6%BE%E0%A7%9F%E0%A7%87%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%A4%E0%A6%BF">
						<img src="/106.png" width="100"/></a>

					</div>

				</div>
			</section>
			<div className="ending">
				<div className="container">
					<div className="copyright">
						<p>
							Copyright © 2022 Sotrajitpur High School. | Powered by <Link href='https://mobipath.com'><a target={'_blank'}>Mobipath</a></Link>
						</p>
					</div>
				</div>
			</div>

		</>

	)
}
export default Footer