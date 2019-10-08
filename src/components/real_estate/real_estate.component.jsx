import React from 'react';

import realEstateModule from './real_estate.module.css'; 

const RealEstate = () => (
  <div className={realEstateModule.real_estate}>
    <h1>Real Estates</h1>
    <p>Location is very important in real estate investments. From personal experience, I believe
    that New York real estate is uniquely strong due to its population density among other 
    factors. Maryland, on the other hand, offers better bargain per square foot of real estate.</p>
  </div>
);

export default RealEstate; 
