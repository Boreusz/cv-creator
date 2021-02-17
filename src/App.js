import React, {Component } from 'react';
import Title from "./components/Title.js";
import Personal from "./components/Personal.js";
import Experience from "./components/Experience.js"

class App extends React.Component {
  render(){
    return (
      <>
        <Title/>
        <div id="container">
          <Personal/>
          <Experience/>
        </div>
      </>
    )
  }
}

export default App;
