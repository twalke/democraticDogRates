import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import RateRandom from "./RateRandom";
import ViewRatings from "./ViewRatings";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route path="/rateRandom" component={RateRandom}/>
    <Route path="/viewRatings" component={ViewRatings}/>
  </BrowserRouter>,

  document.getElementById('root'));

serviceWorker.unregister();
