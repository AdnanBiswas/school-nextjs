import React from "react";
import Slider from 'react-slick';
import styles from "./style.module.css";

const Gallery = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};
	return (
		<>
			<div className="section_box section-cont">
				<div className="container">
					<h2 className="paraHeader">গ্যালারি</h2>
					<div className={styles.galleryphotos}>
						<Slider {...settings}>
							<div className={styles.photos}>
								<img src="/image1.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image2.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image3.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image1.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image3.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image2.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image1.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image2.jpg" className="img-fluid" alt="..." />
							</div>
							<div className={styles.photos}>
								<img src="/image3.jpg" className="img-fluid" alt="..." />
							</div>
						</Slider>
						<a href="#" className={`${styles.moreButton} btn btn-primary`}>আরও দেখুন</a>
					</div>

				</div>
			</div>

		</>

	)
}
export default Gallery