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
    // eslint-disable-next-line no-alert
    if (confirm("Are you sure you want to delete this garage?")) {
      this.props.removeGarage(this.props.history, this.props.garage._id);
    }
  }

  openUploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dwhyp7x92', upload_preset: 'garage', tags: ['garage'] },
      (error, result) => {
        this.setState({
          imgUrl: result[0].url,
        });
      }
    );
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
      <div key="add" className="form-container" style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653028/garage/background_wnzvnd.jpg')" }} >
        <div className="overlay" />
        <div className="garage-card">
          <img alt={garage.name} className="car-picture-1" src={garage.photo} />
          <div className="garage-details">
            <span>{garage.name}</span>
            <ul>
              <li>{garage.description}</li>
            </ul>
          </div>
          <button className="show">
            <Link to={`/garage/${garage._id}/cars`}>Show Cars</Link>
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
    garage: state.garages.find(garage => garage._id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeGarage, fetchGarages }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GarageShow));
