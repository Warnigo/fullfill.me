import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

// Pages
import Home from './Pages/Home';
import SourcingFulfillment from './Pages/Features/SourcingFulfillment';
import Content from './Pages/Features/Content';
import Logo from './Pages/Features/Logo';
import Pricing from './Pages/Pricing';
import Privacy from './Pages/More/Privacy';
import Terms from './Pages/More/Terms';
import { Contact } from './Pages/Contact/Contact';

// Utilities
import ScrollToTop from './Utils/ScrollToTop';
import usePageTracking from './Utils/PageTracking';

function App() {
  usePageTracking();

  return (
    <ScrollToTop>
      <Menu />
      <Switch>
        <Route path="/features/sourcing-and-fulfillment">
          <SourcingFulfillment />
        </Route>
        <Route path="/features/content">
          <Content />
        </Route>
        <Route path="/features/logo">
          <Logo />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
