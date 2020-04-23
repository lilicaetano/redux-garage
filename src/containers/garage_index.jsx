/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchGarages } from '../actions';
import Aside from '../components/aside';

class GarageIndex extends Component {
  componentWillMount() {
    this.props.fetchGarages();
  }

  render () {
    if (this.props.garages.length === 0) {
      return [
        <Aside key="aside">
          <Link to="/garage/new">Add a garage</Link>
        </Aside>,
        <div className="no-garage" key="nogarage" style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653028/garage/background_wnzvnd.jpg')" }} >No garage yet</div>
      ];
    }
    return [
      <Aside key="aside">
        <Link to="/garage/new">Add a garage</Link>
      </Aside>,
      <div className="list-container" key="garages" style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653028/garage/background_wnzvnd.jpg')" }}>
        {this.props.garages.map((garage) => {
          return (
            <div key={garage._id} className="garage-smallad">
              <Link to={`/garage/${garage._id}`} key={garage._id} />
              <img alt={garage.name} className="garage-picture" src={garage.photo} />
              <div className="garage-details">
                <span>{garage.name}</span>
                <ul>
                  <li><strong>{garage.address}</strong></li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garages: state.garages,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGarages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GarageIndex);
