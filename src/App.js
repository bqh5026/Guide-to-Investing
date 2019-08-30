import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import RealEstates from './components/real_estates.component.jsx'; 
import Equities from './components/equities.component';
import DigitalCurrencies from './components/digital_currencies.component';
import PreciousMetals from './components/precious_metals.component';
import Bonds from './components/bonds.component';


function App() {
  return (
    <div className="App">
      <h1>Guide to Investing</h1>
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/real_estates" component={RealEstates} />
            <Route path="/equities" component={Equities} />
            <Route path="/digital_currencies" component={DigitalCurrencies} />
            <Route path="/precious_metals" component={PreciousMetals} />
            <Route path="/bonds" component={Bonds} />
          </Switch>     
      </div>
    </div>
  );
}

export default App;
