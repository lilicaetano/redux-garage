import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { addGarage } from '../actions';

class GarageNew extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const garage = {
      name: e.target.name.value,
      address: e.target.address.value,
      photo: e.target.photo.value
    };
    this.props.addGarage(this.props.history, garage);
  }

  render () {
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay" />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputBrand">Name</label>
            <input type="text" name="name" className="form-control" id="InputBrand" placeholder="San Petrolyo" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Address</label>
            <input type="text" name="address" className="form-control" id="InputModel" placeholder="London" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Photo</label>
            <input type="text" name="photo" className="form-control" id="InputOwner" placeholder="James Bond" />
          </div>
          <button type="submit">Add garage</button>
        </form>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGarage }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GarageNew));
