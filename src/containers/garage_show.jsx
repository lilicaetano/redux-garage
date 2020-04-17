import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { removeGarage } from '../actions';

class GarageShow extends Component {
  handleClick = () => {
    this.props.removeGarage(this.props.history, this.props.garage);
  }

  render () {
    const garage = this.props.garage;
    if (!garage) {
      return (
        <Aside key="aside">
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="garage-container" key="garage">
        <div className="garage-card">
          <img className="garage-picture" src="/assets/images/garage.png"/>
          <div className="garage-details">
            <span>{garage.name}</span>
            <ul>
              <li><strong>Address:</strong> {garage.address}</li>
            </ul>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    garage: state.garages.find((garage) => garage.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeGarage }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GarageShow));
