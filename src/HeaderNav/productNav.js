import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Productlist from "../components/Productlist";
import categoriesJson from "../server/categories/index.get.json";
import productJson from "../server/products/index.get.json";

class ProductNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
      categories: [],
      products: [],
      filteredProducts: [],
      data_loadded: false,
      filterdID: "",
    };
  }
  sortByOrder(a, b) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  }
  componentDidMount() {
    this.setState({
      categories: categoriesJson,
      data_loadded: true,
    });
    var catJson;

    this.setState({
      products: productJson,
      filteredProducts: productJson,
    });
  }
  parentCallback = (filterFromChild) => {
    if (this.state.filtered == false) {
      var filterItems = this.state.products.filter(
        (item) => item.category == filterFromChild
      );
      this.setState({ filteredProducts: filterItems }, () => {
        this.setState({ filtered: true });
        this.setState({ filterdID: filterFromChild });
      });
    } else {
      this.setState({ filteredProducts: this.state.products }, () => {
        this.setState({ filtered: false });
      });
      this.setState({ filtered: false });
    }
  };
  render() {
    const { categories, filteredProducts, filterdID, filtered } = this.state;

    return (
      <>
        <Header />
        <Container className="main">
          <Row>
            <Col>
              <Container className="sidebar">
                {categories
                  ? categories.map((cat, index) => {
                      return cat["imageUrl"] ? (
                        <Row>
                          <Col
                            className={
                              filterdID === cat.id && filtered
                                ? `txtcenter btn highlight`
                                : `txtcenter btn`
                            }
                            onClick={() => this.parentCallback(cat.id)}
                          >
                            {cat.name}
                          </Col>
                        </Row>
                      ) : (
                        ""
                      );
                    })
                  : ""}
              </Container>
            </Col>
            <Col xs={6}>
              <Productlist products={filteredProducts} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ProductNav;
