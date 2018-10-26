import React, { Component as NotFlatiron } from 'react';

class LifeBeforeFlatiron extends NotFlatiron {

  render() {
    return (
      <div className="container">
        <img className="confetti" src={require("../Images/Confetti.png")}/>
        <div className="App-logo">
          <img className="balloons" src={require("../Images/GraduationCap.png")}/>
        </div>
      </div>
    );
  }

}

export default LifeBeforeFlatiron;
