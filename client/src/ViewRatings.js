import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ViewRatings extends Component {
  constructor() {
    super();
    this.state = {
      ratingArr: []
    }
  }

  addDogToStorage() {
    let tempArr = [];
    for(var key in localStorage) {
      if(localStorage.hasOwnProperty(key)) {
        // console.log(JSON.parse(localStorage[key]));
        let tempDog = JSON.parse(localStorage[key]);
        tempArr.push(tempDog);
      }
    }

  this.setState({
      ratingArr: tempArr
    })
  }

  componentDidMount() {
    this.addDogToStorage();
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          <Link className="returnHome" to={{pathname: "/"}}>Home</Link>
          <Link id="rateRandom" className="button" to={{pathname: "/rateRandom"}}>Rate Dogs</Link>
        </div>
        <div className="instructionText">Your previously rated dogs are stored here. Mouse over an image to view your rating.</div>
        <div className="dogListDiv">{this.state.ratingArr.map((dog) => <img className="dogPic ratedDog" key={Math.random()} src={dog.message} alt="doggo" title={"doggo rating: " + dog.value} />)}</div>
      </div>
    );
  }
}

export default ViewRatings;

// <div>{this.state.ratingArr.map((dog) => <div className="dogImgDesc" key={Math.random()}>{dog.value}</div>)}</div>
