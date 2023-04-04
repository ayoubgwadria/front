import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import "../styles/emplois.css";
import "../styles/pagination.css";
import TechnicienCard from "../components/UI/technicien-card/TechnicienCard";
import { getalltechniciens } from "../store/technicien/getalltechniciens"
import { useDispatch, useSelector } from "react-redux";

const Technicien = () => {

  const dispatch = useDispatch();
  const [DomainesearchTerm, setDomainesearchTerm] = useState("");
  const [NomSearchTerm, setNomSearchTerm] = useState("");
  const [LieuxSearchTerm, setLieuxSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const techniciens = useSelector((state) => state.gettechniciens.techniciens);
  useEffect(() => {
    dispatch(getalltechniciens());
  }, [dispatch]);


  const searchedtechniciens = techniciens.filter((item) => {
    const nom = item.user.nom;
    const domaine = item.domaine;
    const emplacement = item.user.emplacement;


    if (NomSearchTerm.value === "" && DomainesearchTerm.value === "" && LieuxSearchTerm.value === "choisissez une région") {
      return item;
    }

    if (
      nom.toLowerCase().includes(NomSearchTerm.toLowerCase()) &&
      domaine.toLowerCase().includes(DomainesearchTerm.toLowerCase()) &&
      emplacement.includes(LieuxSearchTerm)) {
      return item;
    } else {
      return null;
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedtechniciens.slice(
    visitedPage,
    visitedPage + productPerPage - 1
  );

  const pageCount = Math.ceil(searchedtechniciens.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="Technicien">
      <br /><br /><br /><br />
      <CommonSection title="Technicien" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="Nom...."
                  value={NomSearchTerm}
                  onChange={(e) => setNomSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="Domaine...."
                  value={DomainesearchTerm}
                  onChange={(e) => setDomainesearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" value={LieuxSearchTerm} onChange={(e) => setLieuxSearchTerm(e.target.value)}>
                  <option>choisissez une région</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Bèja">Bèja</option>
                  <option value="ben Arous">ben Arous</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Gabès">Gabès</option>
                  <option value="Gafsa">Gafsa</option>
                  <option value="Jendouba">Jendouba</option>
                  <option value="Kairouan">Kairouan</option>
                  <option value="Kasserine">Kasserine</option>
                  <option value="Kébili">Kébili</option>
                  <option value="La Manouba">La Manouba</option>
                  <option value="Le Kef">Le Kef</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="Medenine">Medenine</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Sfax">Sfax</option>
                  <option value="Sidi Bouzid">Sidi Bouzid</option>
                  <option value="Siliana">Siliana</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Tataouine">Tataouine</option>
                  <option value="Tozeur">Tozeur</option>
                  <option value="Tunis">Tunis</option>
                  <option value="Zaghouan">Zaghouan</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item._id} className="mb-4">
                <TechnicienCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Technicien;
