import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import SelectDogWheel from "./SelectDogWheel";

class RateRandom extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      message: "",
      breeds: "",
      loading: true,
      errMsg: null
    }
    this.getRandomDog = this.getRandomDog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRandomDog() {
    if(this.state.breed === "random" || this.state.breed === undefined) {
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then(response => this.setState({
        status: response.data.status,
        message: response.data.message,
        loading: false,
        errMsg: null
      }))
      .catch (err => this.setState({
        loading: false,
        errMsg: "data unavailable"
      }))
      // console.log(localStorage);
    } else {
      axios.get("https://dog.ceo/api/breed/" + this.state.breed + "/images/random")
      .then(response => this.setState({
        status: response.data.status,
        message: response.data.message,
        loading: false,
        errMsg: null
      }))
      .catch (err => this.setState({
        loading: false,
        errMsg: "data unavailable"
      }))
      // console.log(localStorage);
    }

  }

  getAllBreeds() {
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(response => this.setState({
      breeds: response.data.message,
      loading: false,
      errMsg: null
    }))
    .catch (err => this.setState({
      loading: false,
      errMsg: "data unavailable"
    }))
  }

  componentDidMount() {
    this.getAllBreeds();
  }

  handleSubmit(e) {
    let newDate = new Date();
    let dogId = newDate.getTime();
    e.preventDefault();

    localStorage.setItem("dog" + dogId, JSON.stringify({
      message: this.state.message,
      value: this.state.value
    }))
    this.getRandomDog();
  }

  render() {

    if(this.state.message==="") {
      return (
        <div className="container">
          <div className="nav">
            <Link className="returnHome" to={{pathname: "/"}}>Home</Link>
            <Link id="viewRatings" className="button" to={{pathname: "/viewRatings"}}>View Ratings</Link>
          </div>
          <div className="breedDiv">
            Select Breed
            <SelectDogWheel />
          </div>

          <button className="button fetch" onClick={this.getRandomDog}>Fetch Doggo</button>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="nav">
          <Link className="returnHome" to={{pathname: "/"}}>Home</Link>
          <Link id="viewRatings" className="button" to={{pathname: "/viewRatings"}}>View Ratings</Link>
        </div>
        <div className="breedDiv">
          Select Breed
          <SelectDogWheel />
        </div>
        <button className="button fetch" onClick={this.getRandomDog}>Fetch Doggo</button>
        <img id="dogFetch" className="dogPic" src={this.state.message?this.state.message:<div></div>} alt={"random dog"} />
        <div className="dogRating">
          Rate Dog (Out of 10)
          <select id="dogValueSelector" className="selectMenu" onChange={(e) => this.setState({ value: e.target.value })}>
            <option value=""> -</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>
        <button id="submitButton" className="button" onClick={this.handleSubmit}>Submit Rating</button>
      </div>
    );
  }
}

export default RateRandom;
