import React, { Component, Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery: NextPage = () => {

    const imagesArr = [
        '/sjit (8).jpg',
        '/sjit (1).jpg',
        '/sjit (2).jpg',
        '/sjit (3).jpg',
        '/sjit (4).jpg',
        '/sjit (5).jpg',
        '/sjit (11).jpg',
        '/sjit (9).jpg',
        '/sjit (6).jpg',
        '/sjit (7).jpg',
        '/sjit (10).jpg',
    ];

    const [images, setImages] = useState(imagesArr);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="container">
                <h2 className="section-cont paraHeader"> গ্যালারি </h2>
            </div>

            <div className="gallery-cont">

                {/* <button
                    type="button"
                    onClick={()=>setIsOpen(true)}
                >
                    Open Lightbox
                </button> */}

                

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        images.map((item, index) => (
                            <div>
                                <img style={{ cursor: 'pointer' }} src={item} onClick={() => { setPhotoIndex(index), setIsOpen(true) }} alt="" width="100%" />
                            </div>
                        ))
                    }

                </Masonry>
               
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                        // enableZoom={false}
                    />
                }
            </div>

            <Footer />
        </>
    )
}
export default Gallery


