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
      workData: [],
      schoolFormVisible: false,
      schoolFormOpenBttn: "+",
      schoolData: []
    }
  }
  handleSubmit(){
    return console.log("1");
  }
  handleChange(e, number, target){

      let items = this.state.schoolValues;
      items[number] = e.target.value;
      this.setState({
      schoolValues: items,
      })
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
      this.clearData();
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
  clearData(){
    this.setState({
      workValues: [ "", "", "", "", "", ""],
      schoolValues: ["", "", "", ""],
    })
  }
  render(){
    let {
      workFormVisible, workFormOpenBttn, workValues, workData,
      schoolFormVisible, schoolFormOpenBttn, schoolValues, schoolData} = this.state
    return(
      <div id="exp">
        <div className="personal-header">
          <h2>Work Experience</h2>
          <button className="functional-button darker" onClick={() => this.handleVisibility("work")}>{workFormOpenBttn}</button>
        </div>
        {workFormVisible ? <WorkForm submit={this.handleSubmit}/> : null}
        <List array={workData} category="work"/>
        <div className="personal-header">
          <h2>Academic Background</h2>
          <button className="functional-button darker" onClick={() => this.handleVisibility("school")}>{schoolFormOpenBttn}</button>
        </div>
        {schoolFormVisible ? <SchoolForm submit={this.handleSubmit}/> :  null}
        <List array={schoolData} category="school"/>
      </div>
    )
  }
}

export default Experience;
