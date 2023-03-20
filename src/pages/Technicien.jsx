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
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const techniciens = useSelector((state) => state.gettechniciens.techniciens);
  console.log(techniciens)
  useEffect(() => {
    dispatch(getalltechniciens());
  }, [dispatch]);

  const searchedtechniciens = techniciens.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.emplacement.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  const techniciensPerPage = 12;
  const visitedPage = pageNumber * techniciensPerPage;
  const displayPage = searchedtechniciens.slice(
    visitedPage,
    visitedPage + techniciensPerPage
  );

  const pageCount = Math.ceil(searchedtechniciens.length / techniciensPerPage);

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
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
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
