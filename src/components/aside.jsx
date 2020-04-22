import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/redwheels.jpg')" }} />
      <img className="logo" src="/assets/images/car_icon.png" alt="logo" />
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
