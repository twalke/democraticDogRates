import React, { Component } from 'react';
import './App.css';

import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Democratic Dog Rates</h1>
        <h2><i>Finally, rating other people's dogs comes to the masses.</i></h2>
        <Link className="button" to={{pathname: "/rateRandom"}}>Rate Dogs</Link>
        <Link className="button" to={{pathname: "/viewRatings"}}>View Ratings</Link>
        <div className="textDiv">
          <div className="headerText">For years people around the world have looked on longingly as The Dogfather handed down ratings to other people's dogs and said to themselves "why can't I also rate these good dogs?"</div>
          <div className="headerText">The wait is finally over, now you too can look at pictures of dogs and assign arbitrary numeric values to them. Select the "Rate Dogs" button to begin, or select "View Ratings" to see your past work.</div>
        </div>
      </div>
    );
  }
}

export default App;
