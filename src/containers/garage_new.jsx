import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { addGarage } from '../actions';

class GarageNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const garage = {
      name: e.target.name.value,
      address: e.target.address.value,
      description: e.target.description.value,
      photo: this.state.imgUrl
    };
    this.props.addGarage(this.props.history, garage);
  }

  uploadWidget = () => {
    console.log("!");
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
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653028/garage/background_wnzvnd.jpg')" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputBrand">Name</label>
            <input type="text" name="name" className="form-control" id="InputBrand" placeholder="Auto Repair" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Address</label>
            <input type="text" name="address" className="form-control" id="InputModel" placeholder="London" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Description</label>
            <input type="text" name="description" className="form-control" id="InputModel" placeholder="Add your description" />
          </div>
          <div className="form-group">
            <button type="button" onClick={this.uploadWidget} className="upload-button">Add Photo</button>
          </div>
          <button type="submit" className="upload-button-1">Add garage</button>
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
