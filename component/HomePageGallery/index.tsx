import React from "react";
import Slider from 'react-slick';
import styles from "./style.module.css";
import Link from "next/link";

const gallery = () => {

	const settings = {
		dots: false,
		infinite:  true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
		  {
			breakpoint: 1619,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			},
		  },
		  {
			breakpoint: 1270,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			},
		  },
		  {
			breakpoint: 990,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			},
		  },
		  {
			breakpoint: 770,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			  arrows: false,
			  dots: true,
			},
		  },
		  {
			breakpoint: 500,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  arrows: false,
			  dots: true,
			},
		  },
		  {
			breakpoint: 299,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  arrows: false,
			  dots: true,
			},
		  },
		],
	  };
	return (
		<>
			<div className="section_box section-cont">
				<div className="container">
					<h2 className="paraHeader">গ্যালারি</h2>
					<div className={styles.galleryphotos}>
						<Slider {...settings}>
							<div className={styles.photos}>
								<img src="/sjit (1).jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/sjit (2).jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/sjit (4).jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/sjit (3).jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/sjit (5).jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/sjit (6).jpg" className="img-fluid" alt="..." />
							</div>
						</Slider>
						<Link href="/gallery"><a className={`${styles.moreButton} btn btn-primary`}>আরও দেখুন</a></Link>
					</div>

				</div>
			</div>

		</>

	)
}
export default gallery