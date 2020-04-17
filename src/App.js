import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/'>
            <SignUp />
          </Route>
        </Switch>
      </Layout>   
    </Router>
  );
}