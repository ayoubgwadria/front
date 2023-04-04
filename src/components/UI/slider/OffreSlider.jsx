import React from "react";
import Slider from "react-slick";
import "../../../styles/slider.css";
import { Container, Row, Col } from "reactstrap";
import List from "../../../assets/images/list.png";
import Conversation from "../../../assets/images/conversation.png";
import Recherche from "../../../assets/images/Recherche.png";
import Postuler from "../../../assets/images/Postuler.png";
import Commencer from "../../../assets/images/Commencer.png";

const featureDataClient = [
    {
        title: "Chercher emploi",
        imgUrl: Recherche,
    },

    {
        title: "Postuler à un emploi",
        imgUrl: Postuler,

    },
    {
        title: "Commencer nouvel emploi",
        imgUrl: Commencer,

    },
];

const featureDataTech = [
    {
        title: "Chercher technicien qualifié",
        imgUrl: Recherche,

    },

    {
        title: "Contacter pour détails",
        imgUrl: Conversation,

    },
    {
        title: "Démarrer contrat projet",
        imgUrl: List,

    },
];

const OffreSlider = () => {
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

            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="feature__title">Nous offrons également des   <span>techniciens</span> qualifiés</h2>
                        <h2 className="feature__title">
                            pour tous vos <span>besoins</span>.
                        </h2>
                    </Col>
                    <br /><br /><br /><br /><br /><br /><br />
                    {featureDataTech.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                            <div className="feature__item text-center px-5 py-3">
                                <img
                                    src={item.imgUrl}
                                    alt="feature-img"
                                    className="w-25 mb-3"
                                />
                                <h5 className=" fw-bold mb-3">{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="feature__title">Nous offrons également des opportunités d'emploi aux</h2>
                        <h2 className="feature__title">
                            <span>techniciens</span>
                        </h2>
                    </Col>
                    <br /><br /><br /><br /><br /><br /><br />
                    {featureDataClient.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                            <div className="feature__item text-center px-5 py-3">
                                <img
                                    src={item.imgUrl}
                                    alt="feature-img"
                                    className="w-25 mb-3"
                                />
                                <h5 className=" fw-bold mb-3">{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Slider>
    );
};

export default OffreSlider;
