import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import { getallposts } from "../store/post/getallposts";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/emplois.css";
import "../styles/pagination.css";
import { useDispatch, useSelector } from "react-redux";

const Emplois = () => {
  const dispatch = useDispatch();
  const [TitreSearchTerm, setTitreSearchTerm] = useState("");
  const [LieuxSearchTerm, setLieuxSearchTerm] = useState("");
  const [DomaineSearchTerm, setDomaineSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const posts = useSelector((state) => state.getposts.posts);

  useEffect(() => {
    dispatch(getallposts());
  }, [dispatch]);

  const searchedposts = posts.filter((item) => {
    if (TitreSearchTerm.value === "") {
      return item;
    }
    if (
      item?.titre?.toLowerCase()?.includes(TitreSearchTerm.toLowerCase()) &&
      item?.domaine?.toLowerCase()?.includes(DomaineSearchTerm.toLowerCase()) &&
      item?.lieux?.includes(LieuxSearchTerm)
    ) {
      return item;
    } else {
      return null;
    }
  });

  const productPerPage = 20;
  const visitedPage = pageNumber * productPerPage;
  console.log("visitedPage", searchedposts);
  const displayPage = searchedposts.splice(visitedPage, productPerPage);

  const pageCount = Math.ceil(searchedposts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log("productin", displayPage);
  return (
    <Helmet title="Emplois">
      <br />
      <br />
      <br />
      <br />
      <CommonSection title="Emplois" />

      <section>
        <Container>
          <br />
          <Row>
            <Col lg="3" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="Titre...."
                  value={TitreSearchTerm}
                  onChange={(e) => setTitreSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="domaine"
                  placeholder="Domaine...."
                  value={DomaineSearchTerm}
                  onChange={(e) => setDomaineSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  value={LieuxSearchTerm}
                  onChange={(e) => setLieuxSearchTerm(e.target.value)}
                >
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

            {posts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item._id} className="mb-4">
                <ProductCard item={item} />
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

export default Emplois;
