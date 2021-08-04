// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
// Assets
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
// Components
import LandingPage from './components/LandingPage';
import GeneralContracting from './screens/GeneralContracting';
import RemodelingScreen from './screens/RemodelingScreen';
import HVACScreen from './screens/HVACScreen';
import ContactScreen from './screens/ContactScreen';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <LandingPage {...props} />} />
      <Route path='/general' exact render={props => <GeneralContracting {...props} />} />
      <Route path='/remodel' exact render={props => <RemodelingScreen {...props} />} />
      <Route path='/hvac' exact render={props => <HVACScreen {...props} />} />
      <Route path='/contact' exact render={props => <ContactScreen {...props} />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
