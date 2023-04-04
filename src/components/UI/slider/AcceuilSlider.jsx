import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


import "../../../styles/slider.css";

const AccueilSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="hero__content  ">
                <h1 className="mb-4 hero__title">
                    <span>Besoin de réparations ? </span> Trouvez rapidement un technicien
                    <span> compétent </span>
                </h1>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                        <Link to="/technicien">Rechercher</Link><i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
            <div className="hero__content  ">
                <h1 className="mb-4 hero__title">
                    <span>Vous cherchez du travail ? </span> Trouvez rapidement un emploi passionnant dans votre
                    <span>  domaine  </span>
                </h1>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                        <Link to="/emplois">Rechercher</Link><i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </Slider>
    );
};

export default AccueilSlider;
