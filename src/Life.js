import React, { Component as Living, Fragment as EachOther } from 'react';


import LifeBeforeFlatiron from './Components/LifeBeforeFlatiron'
import JeroldsMod from './Components/HashGang'
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
          <JeroldsMod graduating={true}/>
          <LifeAfterFlatiron/>
        </EachOther>
      </div>
    );
  }
}

export default Life;
