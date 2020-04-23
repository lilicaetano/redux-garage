import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653001/garage/redwheels_bvq489.jpg')" }} />
      <img className="logo" src="https://res.cloudinary.com/dwhyp7x92/image/upload/v1587653043/garage/car_icon_b79t6w.png" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Service & Repair</p>
      {props.children}
      <div className="footer">
        © 2020 Liliana Caetano
      </div>
    </div>
  );
};

export default Aside;
