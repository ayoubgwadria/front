import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection"
import { Container, Row, Col } from "reactstrap";
import { getclientpost } from "../store/post/getclientpost";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/emplois.css";
import "../styles/pagination.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ClientPosts = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const posts = useSelector((state) => state.getclientpost.posts);
  useEffect(() => {
    dispatch(getclientpost(clientId));
  }, []);
  const searchedposts = posts?.filter((item) => {
    if (searchTerm.value === "") { return item; }
    if (item.titre.toLowerCase().includes(searchTerm.toLowerCase())) { return item; }
    else { return null; }
  })
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedposts?.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math?.ceil(searchedposts?.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="Emplois">
      <br /><br /><br /><br />
      <CommonSection title="Mes Publications" />

      <section>

        <Container>
          <Row className="justify-content-center"  >

            <Col lg="6">
              <Link to="/post">
                <button className="post-button">Publier une nouvelle offre d'emploi</button>
              </Link>
            </Col>

          </Row>
          <br />
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

            {displayPage?.map((item) => (
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
export default ClientPosts
