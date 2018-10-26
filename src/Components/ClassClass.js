import React, { Component as Flatiron, Fragment as Love } from 'react';

class ClassClass extends Flatiron {
  state={
    fear: [],
    attributes: {
      graduating: false,
      beMissedAndLoved: true,
    }
  }

  componentDidMount() {
    const arrayOfFears = ["Uncertainty", "GitHub", "Code Challenges", "Imposter's Syndrome"]
    this.setState({fear: arrayOfFears})
  }

  componentDidUpdate() {
    //Everybody grew and was updated into developers!
  }

  componentWillUnmount() {
    const arrayOfFears = ["Transition"]
    this.setState({
      fear: arrayOfFears,
      attributes: {
        graduating: true,
        beMissedAndLoved: true
      }
    })
  }

  render() {
    return(
      <Love>
        <h3>Congratulations class Class!</h3>
        <img/>
      </Love>
    );
  }

}

const success = (()=> {
  return {

  }
})();

export default ClassClass;
