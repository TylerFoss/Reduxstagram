import React from 'react';
import App from "./components/App";
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from "react-redux"; //this exsposes the store to the actual application
import store, {history} from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
