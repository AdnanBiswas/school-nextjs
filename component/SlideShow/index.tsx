import React from "react";
import styles from './SlideShow.module.css';
const SlideShow = () => {

    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className={`${styles.slideImages} text-center`}>
							<img src="/SchoolPhoto.jpg"></img>
						</div>
						<div className="carousel-caption d-none d-md-block">
							<h4>বার্ষিক শিক্ষক সম্মেলন ২০২২</h4>
							<p>স্থানঃ ডাঃ মঈনউদ্দিন আহমেদ(মন্টু) মিলনায়তন</p>
							<a href="#" className="btn btn-primary">আরও দেখুন</a>
						</div>
					</div>
					<div className="carousel-item">
						<div className={`${styles.slideImages} text-center`}>
							<img src="/image3.jpg"></img>
						</div>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className={`${styles.slideImages} text-center`}>
							<img src="/image2.jpg"></img>
						</div>
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
        
        </>
    )
}

export default SlideShow