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

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dwhyp7x92', upload_preset: 'v3odun1f', tags: ['garage'] },
      (error, result) => {
        console.log(result);
      }
    );
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
            <button onClick={this.uploadWidget.bind(this)} className="upload-button">Add Photo</button>
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
