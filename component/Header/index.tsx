import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Navbar';
import { isMobile } from 'react-device-detect';
import Navbaritems from '../Navbaritems';

const Header = () => {
	// const [isMobile, setIsMobile] = useState(useMediaQuery({ query: '(max-width: 575px)' }) ? true : false);
	// const isMobile=useMediaQuery({ query: '(max-width: 575px)' }) ? true : false ;



	if (isMobile) {
		return (
			<>
				<section id='top-a' className="header">
					<div className="container">
						<div className="row">
							<div className="col-3">
								<a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
									Menu
								</a>

								<div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
									<div className="offcanvas-header">
										<h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
										<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
									</div>
									<Navbaritems />
								</div>
							</div>
							<div className="schoolLogo col-6">
								<a href="/">
									<img src='/SchoolLogo.jpg' alt='SchoolLogo' width={150}></img>
								</a>
							</div>
							<div className="col-3">
								</div>
						</div>
					</div >
				</section>

			</>
		)
	}
	return (
		<>
			<section id='top-a' className="header">
				<div className="container">
					<div className="row">
						<div className="schoolLogo col-2">
							<a href="/">
								<img src='/SchoolLogo.jpg' alt='SchoolLogo' width={150}></img>
							</a>
						</div>
						<div className="col-8">
							<div className="headermid">
								<h1>সত্রাজিতপুর উচ্চ বিদ্যালয়</h1>
								<p>
									<span><img src="/pin.svg" />চাঁপাই নবাবগঞ্জ, সত্রাজিতপুর, শিবগঞ্জ</span>
									<span><img src="/phonecall.svg" />01740933864</span> <br />
									<span><img src="/email.svg" />sh124606@gmail.com</span>
								</p>
							</div>
						</div>
						{/* <div className={isMobile?'col-6':'col-2'}>
							<a href="#" className="btn btn-primary">লগ ইন</a>
							</div> */}
					</div>
				</div>
			</section>

		</>
	)
}

export default Header