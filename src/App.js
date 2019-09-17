import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import RealEstates from './components/real_estates.component.jsx'; 
import Equities from './components/Equities/equities.component';
import DigitalCurrencies from './components/digital_currencies/digital_currencies.component';
import PreciousMetals from './components/precious_metals/precious_metals.component';
import Bonds from './components/bonds.component';

import Investing from './images/dollar-cost-vs-lump-sum-investing-2.jpg'; 

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/real_estates">Real Estates</Link></li>
                <li><Link to="/equities">Equities</Link></li>
                <li><Link to="/digital_currencies">Digital Currencies</Link></li>
                <li><Link to="/precious_metals">Precious Metals</Link></li>
                <li><Link to="/bonds">Bonds</Link></li>
              </ul>

              <hr />

                <Route exact path="/" component={HomePage} />
                <Route path="/real_estates" component={RealEstates} />
                <Route path="/equities" component={Equities} />
                <Route path="/digital_currencies" component={DigitalCurrencies} />
                <Route path="/precious_metals" component={PreciousMetals} />
                <Route path="/bonds" component={Bonds} />
                
            </div>
            <div className="image">
                <img src={Investing} alt='Investing' />
            </div>  
        </div>
      </HashRouter> 
    );
  }
}

export default App;
