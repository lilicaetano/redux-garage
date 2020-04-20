import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import Aside from "../components/aside";
import { addCar } from "../actions";

class CardsNew extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const garageId = this.props.match.params.garageId;
    const car = {
      owner: e.target.owner.value,
      brand: e.target.brand.value,
      model: e.target.model.value,
      plate: e.target.plate.value,
    };

    this.props.addCar(this.props.history, garageId, car);
  };

  render() {
    const garageId = this.props.match.params.garageId;
    return [
      <Aside key="aside">
        <Link to={`/garage/${garageId}/cars`}>Back to list</Link>
      </Aside>,
      <div
        key="add"
        className="form-container"
        style={{ backgroundImage: "url('/assets/images/form.jpg')" }}
      >
        <div className="overlay" />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              id="InputBrand"
              placeholder="Aston Martin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <input
              type="text"
              name="model"
              className="form-control"
              id="InputModel"
              placeholder="DB Mark III"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <input
              type="text"
              name="owner"
              className="form-control"
              id="InputOwner"
              placeholder="James Bond"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <input
              type="text"
              name="plate"
              className="form-control"
              id="InputPlate"
              placeholder="EGU-503H"
            />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>,
    ];
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCar }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(CardsNew));
