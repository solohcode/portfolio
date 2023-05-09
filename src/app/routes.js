import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Resume } from "../pages/resume";
import { Certification } from "../pages/certificate";
import { Event } from "../pages/event";
import { Socialicons } from "../components/socialicons";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/resume" component={Resume} />
        <Route path="/certificates" component={Certification} />
        <Route path="/event" component={Event} />
        <Route path="*" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
