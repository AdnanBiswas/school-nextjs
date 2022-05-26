import React from "react";

const Header = () => {
	return (
		<>
			<section id='top-a' className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-2">
							<img src='/SchoolLogo.jpg' alt='SchoolLogo' width={150}></img>
						</div>
						<div className="col-md-8">
							<div className="headermid">
								<h1>সত্রাজিতপুর উচ্চ বিদ্যালয়</h1>
								<img src="/pin.svg" /><span>চাঁপাই নবাবগঞ্জ, সত্রাজিতপুর, শিবগঞ্জ   </span> <img src="/phonecall.svg" /><span>01740933864</span>
								<div>
									<img src="/email.svg" />
									<span>sh124606@gmail.com
									</span>
								</div>
							</div>
						</div>
						<div className="col-md-2">
							<a href="#" className="btn btn-primary">লগ ইন</a>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default Header