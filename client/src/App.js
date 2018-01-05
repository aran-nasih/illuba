import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import SingleItemPage from './components/singleItemPage';
import Profile from './components/profile/profile';
import UserMain from './components/user/user_main'
import Search from './components/search/search_main'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={UserMain} />
      <Route exact path="/search/:query" component={Search}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/:username/:item" component={SingleItemPage} />
      <Route exact path="/:username" component={Profile} />
    </Switch>
  </div>
);

export default App;