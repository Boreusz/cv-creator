import React, { Component } from 'react';
import Section from "./Section"

class Personal extends React.Component {
  render(){
    return(
      <div id="personal">
        <Section name="Personal Info"/>
        <Section name="Skills"/>
        <Section name="Languages"/>
        <Section name="Main Interests"/>
      </div>
    )
  }
}

export default Personal;
