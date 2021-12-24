import './sliderimages.styles.css';
import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

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

    return imageUrls && imageUrls.length > 0 ? (
        <div className="container-slider">
            {imageUrls.map((obj, index) => {
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
            })}
            {imageUrls.length==0?
            <div>gggggggggggggg</div>:<div></div>}
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