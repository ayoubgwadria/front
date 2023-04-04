import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { useSelector } from "react-redux";
import AccueilSlider from "../components/UI/slider/AcceuilSlider.jsx";
import OffreSlider from "../components/UI/slider/OffreSlider.jsx";



const GuestHome = () => {
    const posts = useSelector((state) => state.getposts.posts);
    return (
        <Helmet title="Home">
            <br /><br /><br /><br /><br /><br />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6"> 
                            <AccueilSlider />
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br /><br /><br /><br /><br />

            <section className="offre_slider">
               <OffreSlider/>
            </section>


            <br /><br /><br /><br /><br /><br />

            <section className="pt-0">
                <Col lg="12" className="text-center">
                    <h2 className="feature__title"> <span>Services </span>les plus demandés </h2>
                </Col>
                <br /><br /><br />
                <Category />
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="food__category d-flex align-items-center justify-content-center gap-4">
                                <h2 style={{ color: 'white' }}>Dernières offres d'emploi</h2>
                            </div>
                        </Col>

                        {posts.slice(0, 8).map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <br /><br /><br />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial ">
                                <h5 className="testimonial__subtitle mb-4">Témoignages</h5>
                                <h2 className="testimonial__title mb-4">
                                    Avis de nos <span>clients</span> et de nos <span>techniciens</span>
                                </h2>
                                <p className="testimonial__desc">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Distinctio quasi qui minus quos sit perspiciatis inventore
                                    quis provident placeat fugiat!
                                </p>

                                <TestimonialSlider />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <img src={networkImg} alt="testimonial-img" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default GuestHome;
