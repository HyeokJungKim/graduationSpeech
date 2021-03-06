import React, { Component as Flatiron, Fragment as Love } from 'react';
import Carousel from 'nuka-carousel';

class HashGang extends Flatiron {
  state={
    fear: [],
    attributes: {
      graduating: false
    }
  }

  componentDidMount() {
    const arrayOfFears = ["Uncertainty", "GitHub", "Code Challenges", "Imposter Syndrome"]
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
        <h1>Congratulations Hash Gang!</h1>
          <Carousel className="carousel" autoPlay={true} wrapAround={true} width="50%">
            <img src={require("../Images/1.jpg")} />
            <img src={require("../Images/2.jpg")} />
            <img src={require("../Images/3.JPG")} />
            <img src={require("../Images/4.JPG")} />
            <img src={require("../Images/5.jpg")} />
        </Carousel>
      </Love>
    );
  }

}



const roadToSuccess = (()=> {
  const success = {
    focus: "FACTS",
    grit: "SEE ABOVE",
    perspective: "NECESSARY",
    sensitivity: true
  }
  return success
})();

export default HashGang;
