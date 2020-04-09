import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/mechanic.jpg')" }} />
      <img className="logo" src="/assets/images/logo.png" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best.</p>
      {props.children}
    </div>
  );
};

export default Aside;
