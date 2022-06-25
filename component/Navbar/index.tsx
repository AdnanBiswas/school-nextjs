import React from "react";
import Link from "next/link";
import Navbaritems from "../Navbaritems";

const Navbar = () => {

	return (
		<>
			<div className="topnavbar">
				<div className="container">
					<nav className="navbar navbar-expand-lg bg-light">
						<div className="container-fluid">
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
								<a className="navbar-brand" href="#"></a>
								<Navbaritems/>
							</div>
						</div>
					</nav>

				</div>
			</div>
		</>
	)
}

export default Navbar