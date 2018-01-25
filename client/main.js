import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './../imports/ui/components/SignUp';
import Link from './../imports/ui/components/Link';
import NotFound from './../imports/ui/components/NotFound';
import LogIn from './../imports/ui/components/LogIn';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/signup"  component={SignUp} />
      <Route exact path="/links"   component={Link} />
      <Route path="*"        component={NotFound} />
    </Switch>
  </BrowserRouter>
);
Meteor.startup(() => {
    ReactDOM.render( routes, document.getElementById('app'));
})