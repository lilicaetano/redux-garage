import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { removeCar, fetchCars } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCars(this.props.match.params.garageId);
    }
  }

  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }


  render () {
    const car = this.props.car;
    const garageId = this.props.match.params.garageId;

    if (!car) {
      return (
        <Aside key="aside">
          <Link to={`/garage/${garageId}/cars`}>Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside">
        <Link to={`/garage/${garageId}/cars`}>Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }} >
        <div className="overlay" />
          <div className="garage-card">
          <img alt={car.index} className="car-picture" src={car.photo} />
            {JSON.stringify(this.props.car)}
            <button className="edit" onClick={this.handleClick}>
              Edit
            </button>        
            <button className="delete" onClick={this.handleClick}>
              <i className="fa fa-trash-o" aria-hidden="true" />
              Delete
            </button>
          </div> 
        </div>  
    ];
  }
}


function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    car: state.cars[id],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCar, fetchCars }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
