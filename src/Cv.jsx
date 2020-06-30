import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";

class Cv extends Component {
  state = {
    cv: []
  };

  componentDidMount() {
    axios.get('./src/data/cv.json')
      .then(response => {
        this.setState({
          cv: response.data
        })
      })
  }

  render() {
    const cv = this.state.cv;
    let cvList;

    if (cv.length > 0) {
      cvList = cv.map(cv => {
        return (
          <div id={'cv-' + cv.id} key={cv.id}>
           <CvCard cv={cv} /> 
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <h1 id="cv-header" className="ui header">Curriculum vitae</h1>
            <p> A snapshot of my CV.</p>
          </div>
        </div>
        <div className="ui stackable four column grid">{cvList}</div>
      </div>
    );
  }
}

export default Cv;