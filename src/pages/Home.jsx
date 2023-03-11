import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import Recherche from "../assets/images/Recherche.png";
import Postuler from "../assets/images/Postuler.png";
import Commencer from "../assets/images/Commencer.png";

import products from "../assets/fake-data/products.js";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";



import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Recherche d'emploi",
    imgUrl: Recherche,

  },

  {
    title: "Postuler à un emploi",
    imgUrl: Postuler,

  },
  {
    title: "Commencer votre emploi",
    imgUrl: Commencer,

  },
];

const Home = () => {

  const [allProducts, setAllProducts] = useState(products);




  return (
    <Helmet title="Home">
      <br /><br /><br />
      <section>
        <Container>
          <Row>

            <Col lg="6" md="6">
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
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <br /><br /><br /><br /><br /><br />

      <section className="pt-0">
        <Col lg="12" className="text-center">
          <h2 className="feature__title"> <span>Services </span>les plus demandés </h2>
        </Col>
        <br/><br/><br/>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Ce que nous servons aussi</h5>
              <h2 className="feature__title">Nous offrons également des opportunités d'emploi aux</h2>
              <h2 className="feature__title">
                <span>techniciens</span>
              </h2>
            </Col>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {featureData.map((item, index) => (
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
      </section>

      <section>
        <Container>
          <Row>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <h2 style={{ color: 'white' }}>Dernières offres d'emploi</h2>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

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

export default Home;
