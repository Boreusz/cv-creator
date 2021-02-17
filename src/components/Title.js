import React, { Component } from 'react';

class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      name: "Name and Surname",
      nameEdit: false,
      title: "Work Title",
      titleEdit: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleFocus(prop) {
    if(prop === "name"){
      this.setState({
        titleEdit:false,
        nameEdit:true,
        value: this.state.name
      })
    }else {
      this.setState({
        nameEdit: false,
        titleEdit:true,
        value: this.state.title
      })
    }
  }
  handleBlur(prop) {
    if(prop === "name"){
      if(this.state.value === ''){
        this.setState({
          name: "Name and Surname",
          nameEdit:false,
          value: ''
        })
      } else {
        this.setState({
          name: this.state.value,
          nameEdit:false,
          value: ''
        })
      }
    }else {
      if(this.state.value === ''){
        this.setState({
          title: 'Work Title',
          titleEdit:false,
          value: ''
        })
      }else {
        this.setState({
          title: this.state.value,
          titleEdit:false,
          value: ''
        })
      }
    }
  }
  render(){
    const {value, name, nameEdit, title, titleEdit} = this.state;
    let nameHeader;
    let titleHeader;
    if(nameEdit === true){
      nameHeader = <input id="h1" autoFocus placeholder={name} type="text" value={value} onBlur={(e) => this.handleBlur("name", e)} onChange={this.handleChange}/>

    }else{
      nameHeader = <h1 onClick={() => this.handleFocus("name")}>{name}</h1>
    }
    if(titleEdit === true){
      titleHeader = <input id="h2" autoFocus placeholder={name} type="text" value={value} onBlur={(e) => this.handleBlur("title", e)} onChange={this.handleChange}/>
    }else{
      titleHeader = <h2 onClick={() => this.handleFocus("title")}>{title}</h2>
    }
    return(
      <header>
        {nameHeader}
        {titleHeader}
      </header>
    )
  }
}

export default Title;
