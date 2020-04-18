/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchCars } from '../actions';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageId);
  }

  render () {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside">
          <Link to={`/garage/${this.props.garageId}/cars/new`}>Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Aside key="aside">
        <Link to={`/garage/${this.props.garageId}/cars/new`}>Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car, index) => {
          return (
            <div key={index} className="car-smallad">
              <Link to={`/garage/${this.props.garageId}/cars/${index}`} key={index} />
              <img className="car-logo" src="assets/images/logo.png" alt="car-logo" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const garageId = ownProps.match.params.garageId;

  return {
    cars: state.cars,
    garageId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsIndex));
