import React from "react";

import { Container, Row, Col } from "reactstrap";


import Plomberie from "../../../assets/images/Plomberie.png";
import Abattage from "../../../assets/images/Abattage.png";
import Ascenseurs from "../../../assets/images/Ascenseurs.png";
import Bricolage from "../../../assets/images/Bricolage.png";
import Caméras from "../../../assets/images/Caméras.png";
import Clés from "../../../assets/images/Clés.png";
import Electricité from "../../../assets/images/Electricité.png";
import Jardinage from "../../../assets/images/Jardinage.png";
import Maçonnerie from "../../../assets/images/Maçonnerie.png";
import Menuiserie from "../../../assets/images/Menuiserie.png";
import Panneaux from "../../../assets/images/Panneaux.png";
import Piscines from "../../../assets/images/Piscines.png";
import Porte from "../../../assets/images/Porte.png";
import Réseaux from "../../../assets/images/Réseaux.png";
import Soudure from "../../../assets/images/Soudure.png";
import Climatisation from "../../../assets/images/Climatisation.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Plomberie",
    imgUrl: Plomberie
  },
  {
    display: "Abattage et élagage d'arbre",
    imgUrl: Abattage
  },
 
  {
    display: "Ascenseurs",
    imgUrl: Ascenseurs
  },
  {
    display: "Bricolage et montage",
    imgUrl: Bricolage
  },
  {
    display: "Caméras et alarmes",
    imgUrl: Caméras
  },
  {
    display: "Clés et serrures",
    imgUrl: Clés
  },
  {
    display: "Electricité",
    imgUrl: Electricité
  },

  {
    display: "Jardinage",
    imgUrl: Jardinage
  },
  {
    display: "Maçonnerie",
    imgUrl: Maçonnerie
  },
  {
    display: "Menuiserie",
    imgUrl: Menuiserie
  },
  {
    display: "Panneaux solaires",
    imgUrl: Panneaux
  },

  {
    display: "Piscines",
    imgUrl: Piscines
  },

  {
    display: "Porte garage",
    imgUrl: Porte
  },
 
  {
    display: "Réseaux et télécoms",
    imgUrl: Réseaux
  },
 
  {
    display: "Soudure",
    imgUrl: Soudure
  },
  {
    display: "Climatisation",
    imgUrl: Climatisation
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" width="40" height="40" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
