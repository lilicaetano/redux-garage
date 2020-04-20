/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { removeGarage, fetchGarages } from '../actions';

class GarageShow extends Component {
  componentWillMount() {
    if (!this.props.garage) {
      this.props.fetchGarages();
    }
  }

  handleClick = () => {
    this.props.removeGarage(this.props.history, this.props.garage._id);
  }

  render () {
    const garage = this.props.garage;

    if (!garage) {
      return (
        <Aside key="aside">
          <Link to="/">Back to list</Link>
        </Aside>
      );
    }

    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }} >
        <div className="overlay" />
          <div className="garage-card">
            <img alt={garage.name} className="garage-picture" src="/assets/images/garage.png" />
            <div className="garage-details">
              <span>{garage.name}</span>
              <ul>
                <li><strong>Address:</strong> {garage.address}</li>
              </ul>
            </div>
          <Link to={`/garage/${garage._id}/cars`}>Show Cars</Link>
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
    garage: state.garages.find(garage => garage._id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeGarage, fetchGarages }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GarageShow));
