import './sliderimages.styles.css';
import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import default_real_estate from '../../assets/images/tin-khong-co-hinh.jpg'

export default function Slider({ imageUrls }) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== imageUrls.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === imageUrls.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(imageUrls.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return imageUrls ?(
        <div className="container-slider">
            {
                imageUrls && imageUrls.length > 0
                    ? (
                        imageUrls.map((obj, index) => {
                            return (
                                <div
                                    key={index}
                                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                >
                                    <img
                                        src={obj}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <div
                            className={"slide active-anim"}
                        >
                            <img
                                src={default_real_estate}
                            />
                        </div>
                    )
            }
            {
                imageUrls.length > 1 ? (
                    <div>
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    </div>
                ) : ''
            }

            <div className="container-dots">
                {Array.from({ length: imageUrls.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    ) : ''
}