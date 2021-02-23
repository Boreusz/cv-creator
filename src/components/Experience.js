import React, { Component } from 'react';
import WorkForm from './WorkForm';
import SchoolForm from './SchoolForm';
import List from './List'

class Experience extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      workFormVisible: false,
      workFormOpenBttn: "+",
      workValues: [ "", "", "", "", "", ""],
      workData: [],
      schoolFormVisible: false,
      schoolFormOpenBttn: "+",
      schoolValues: ["", "", "", ""],
      schoolData: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit( target ){
    if(target === "work"){
      let newValue = Object.assign({}, this.state.workValues)
      this.setState({
        workData: this.state.workData.concat(newValue),
      })
    } else {
      let newValue = Object.assign({}, this.state.schoolValues)
      this.setState({
        schoolData: this.state.schoolData.concat(newValue),
      })
    }
    console.log(this.state.schoolData)
    this.clearValues();
    console.log(this.state.workData)
  }
  handleChange(value, number, target){
    if(target === "work"){
      let items = this.state.workValues;
      items[number] = value;
      this.setState({
        workValues: items,
      })
    } else {
      let items = this.state.schoolValues;
      items[number] = value;
      this.setState({
        shoolValues: items,
      })
    }
  }
  handleVisibility(name){
    if(name === "work"){
      if(this.state.workFormVisible === false){
        this.openWorkForm()
        this.closeSchoolForm();
      }else{
        this.closeWorkForm();
        this.closeSchoolForm();
      }
    }else{
      if(this.state.schoolFormVisible === false){
        this.openSchoolForm();
        this.closeWorkForm();
      }else{
        this.closeSchoolForm();
        this.closeWorkForm();
      }
      this.clearValues();
    }
  }

  openWorkForm(){
    this.setState({
      workFormVisible: true,
          workFormOpenBttn: "x"
    })
  }
  closeWorkForm(){
    this.setState({
      workFormVisible: false,
          workFormOpenBttn: "+"
    })
  }
  openSchoolForm(){
    this.setState({
      schoolFormVisible: true,
      schoolFormOpenBttn: "x"
    })
  }
  closeSchoolForm(){
    this.setState({
      schoolFormVisible: false,
      schoolFormOpenBttn: "+"
    })
  }
  clearValues(){
    this.setState({
      workValues: [ "", "", "", "", "", ""],
      schoolValues: ["", "", "", ""],
    })
  }

  render(){
    const {workFormVisible, workFormOpenBttn, workValues, workData, schoolFormVisible, schoolFormOpenBttn, schoolValues, schoolData} = this.state
      return(
      <div id="exp">
        <div className="personal-header">
          <h2>Work Experience</h2>
          <button className="functional-button darker" onClick={() => this.handleVisibility("work")}>{workFormOpenBttn}</button>
        </div>
        {workFormVisible ? <WorkForm change={this.handleChange} submit={this.handleSubmit} workValues={workValues}/> : null}
        <List array={workData} category="work"/>
        <div className="personal-header">
          <h2>Academic Background</h2>
          <button className="functional-button darker" onClick={() => this.handleVisibility("school")}>{schoolFormOpenBttn}</button>
        </div>
        {schoolFormVisible ? <SchoolForm change={this.handleChange} submit={this.handleSubmit} schoolValues={schoolValues}/> :  null}
        <List array={schoolData} category="school"/>
      </div>
    )
  }
}

export default Experience;
