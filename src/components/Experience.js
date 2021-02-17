import React, { Component } from 'react';
import WorkForm from './WorkForm';
import SchoolForm from './SchoolForm';

class Experience extends React.Component {
  render(){
    return(
      <div id="exp">
        <div className="personal-header">
          <h2>Work Experience</h2>
          <button className="functional-button darker">+</button>
        </div>
        <div className="personal-header">
          <h2>Academic Background</h2>
          <button className="functional-button darker">+</button>
        </div>
      </div>
    )
  }
}

export default Experience;
