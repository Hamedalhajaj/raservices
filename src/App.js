// React imports
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';

// Assets
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';

// Email
// import { init } from 'emailjs-com';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './swiper.css';

// Import Swiper styles
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import LandingPage from './components/LandingPage';
import GeneralContracting from './screens/GeneralContracting';
import RemodelingScreen from './screens/RemodelingScreen';
import HVACScreen from './screens/HVACScreen';
import ContactScreen from './screens/ContactScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import WhoWeAre from './screens/WhoWeAre';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
// init('user_tm2Wf7r3IPorQXM3O4ykW');
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={props => <LandingPage {...props} />} />
        <Route path='/portfolio' exact render={props => <PortfolioScreen {...props} />} />
        <Route path='/general' exact render={props => <GeneralContracting {...props} />} />
        <Route path='/remodel' exact render={props => <RemodelingScreen {...props} />} />
        <Route path='/hvac' exact render={props => <HVACScreen {...props} />} />
        <Route path='/contact' exact render={props => <ContactScreen {...props} />} />
        <Route path='/whoweare' exact render={props => <WhoWeAre {...props} />} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
