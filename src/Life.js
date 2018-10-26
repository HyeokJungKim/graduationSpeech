import React, { Component as Living, Fragment as EachOther } from 'react';
import SingleSourceOfTalent from './Components/ClassClass'
import LifeBeforeFlatiron from './Components/LifeBeforeFlatiron'
import LifeAfterFlatiron from './Components/LifeAfterFlatiron'
import './App.css';

class Life extends Living {

  state={
    predictable: false,
  }

  render() {
    return (
      <div className="Life">
        <LifeBeforeFlatiron/>
        <EachOther>
          <SingleSourceOfTalent graduating={true}/>
          <LifeAfterFlatiron/>
        </EachOther>
      </div>
    );
  }
}

export default Life;
