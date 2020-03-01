import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    const { category } = this.props; 
    return (
      <Fragment>
        <div className="py-5" style={{ marginTop: "4rem" }}>
          <div className="container">
            <Title name="" title="products" />
            {/* PRODUCT ROW */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products
                    .filter(product => product.category === category)
                    .map(product => (
                      <Product key={product.id} product={product} />
                    ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
