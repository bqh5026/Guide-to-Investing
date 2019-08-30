//jshint esversion: 6

import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RealEstates from '../components/real_estates.component.jsx'; 
import Equities from '../components/equities.component';
import DigitalCurrencies from '../components/digital_currencies.component';
import PreciousMetals from '../components/precious_metals.component';
import Bonds from '../components/bonds.component';

const HomePage = () => (
  <Router>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li>
          <Link to="/real_estates">Real Estates</Link>
      </li>
      <li>
          <Link to="/equities">Equities</Link>
       </li>
       <li>
          <Link to="/digital_currencies">Digital Currencies</Link>
       </li>
       <li>
          <Link to="/precious_metals">Precious Metals</Link>
       </li>
       <li>
          <Link to="/bonds">Bonds</Link>
       </li>
    </ul>

    <hr />

    <Route path="/real_estates" component={RealEstates} />
    <Route path="/equities" component={Equities} />
    <Route path="/digital_currencies" component={DigitalCurrencies} />
    <Route path="/precious_metals" component={PreciousMetals} />
    <Route path="/bonds" component={Bonds} />
  </div>
  </Router>
);

export default HomePage;
