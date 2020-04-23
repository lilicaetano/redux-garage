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
      photo: this.state.imgUrl
    };

    this.props.addCar(this.props.history, garageId, car);
  };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dwhyp7x92', upload_preset: 'garage', tags: ['garage'] },
      (error, result) => {
        this.setState({
          imgUrl: result[0].url,
        });
      }
    );
  }

  render() {
    const garageId = this.props.match.params.garageId;
    return [
      <Aside key="aside">
        <Link to={`/garage/${garageId}/cars`}>Back to list</Link>
      </Aside>,
      <div
        key="add"
        className="form-container"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653028/garage/background_wnzvnd.jpg')" }}
      >
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
          <div className="form-group">
            <button type="button" onClick={this.uploadWidget} className="upload-button">Add Photo</button>
          </div>
          <button type="submit" className="upload-button-1">Add car</button>
        </form>
      </div>,
    ];
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCar }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(CardsNew));
