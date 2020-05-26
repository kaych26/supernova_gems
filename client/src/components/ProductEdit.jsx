import React, { Component } from "react";
import "./ProductEdit.css";
import { Redirect } from "react-router-dom";
import Layout from "./shared/Layout";
import { getProduct, updateProduct } from "../services/product";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        description: "",
        imgURL: "",
        price: "",
        jType: "",
        jCollection: "",
        featured: false,
      },
      updated: false,
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const product = await getProduct(id);
    this.setState({ product });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      product: {
        ...this.state.product,
        [name]: value,
      },
    });
  };

  handleFeaturedChange = (event) => {
    const value = event.target.value;
    let pulledState = { ...this.state };
    if (value === "true") {
      pulledState.product.featured = true;
    } else if (value === "false") {
      pulledState.product.featured = false;
    }
    this.setState({ product: pulledState.product });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = this.props.match.params;
    const updated = await updateProduct(id, this.state.product);
    this.setState({ updated });
  };

  render() {
    const { product, updated } = this.state;

    if (updated) {
      return <Redirect to={`/products/${this.props.match.params.id}`} />;
    }

    return (
      <Layout user={this.props.user}>
        <div className="product-edit">
          <div className="edit-image-container">
            <img
              className="edit-product-image"
              src={product.imgURL}
              alt={product.name}
            />
          </div>
          <form onSubmit={this.handleSubmit} className="edit-form-image-link">
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              onChange={this.handleChange}
            />
          </form>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="edit-input-name"
              placeholder="Name"
              value={product.name}
              name="name"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="edit-input-price"
              placeholder="Price"
              value={product.price}
              name="price"
              required
              onChange={this.handleChange}
            />
            <textarea
              className="edit-textarea-description"
              rows={10}
              cols={78}
              placeholder="Description"
              value={product.description}
              name="description"
              required
              onChange={this.handleChange}
            />
            <select
              className="edit-jtype-dropdown"
              name="jType"
              required
              onChange={this.handleChange}
              value={this.state.product.jType}
            >
              <option value="" disabled>
                Type
              </option>
              <option value="ring">Ring</option>
              <option value="necklace">Necklace</option>
              <option value="earrings">Earrings</option>
              <option value="cufflinks">Cufflinks</option>
              <option value="bracelet">Bracelet</option>
            </select>
            <select
              className="edit-jcollection-dropdown"
              name="jCollection"
              required
              onChange={this.handleChange}
              value={this.state.product.jCollection}
            >
              <option value="" disabled>
                Collection
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="engagement">Engagement</option>
            </select>
            <select
              className="edit-featured-dropdown"
              name="featured"
              required
              onChange={this.handleFeaturedChange}
              value={this.state.product.featured ? "true" : "false"}
            >
              <option value="false">Not Featured</option>
              <option value="true">Featured</option>
            </select>
            <button type="submit" className="edit-save-button">
              Save
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default ProductEdit;
