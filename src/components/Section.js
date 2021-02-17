import React, { Component } from 'react';

class Personal extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            array: [],
            value: '',
            visible: false,
            buttonValue: "+"
        }
    }
    handleChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    handleClick() {
      if(this.state.visible === true){
        this.setState({
          visible: false,
          value: '',
          buttonValue: "+"
        })
      }else{
        this.setState({
          visible: true,
          buttonValue: "x"
        })
      }
    }
    handleSubmit(e) {
      if(e.key ==="Enter"){
        if(this.state.value === ''){
          this.setState({
            visible: false,
            buttonValue: "+"
          })
        }else{
          this.setState({
            array: this.state.array.concat(this.state.value),
            visible: false,
            value: '',
            buttonValue: "+"
          })
        }
      }
    }
    handleDelete(e) {
      this.state.array.splice(parseInt(e.target.id), 1);
      this.setState({
        array: this.state.array
      })
    }
  render(){
      const {array, value, visible, buttonValue} = this.state;
    if(array.length === 0){
        return(
            <div >
              <div className="personal-header">
                <h2>{this.props.name}</h2>
                <button onClick={() => this.handleClick()} className="functional-button">{buttonValue}</button>
              </div>
              {visible ? <input placeholder="Press Enter to Add" onChange={(e) => this.handleChange(e)} autoFocus onKeyPress={(e) => this.handleSubmit(e)}/> : null}
            </div>
          )
    }else{
        return(
            <>
              <div className="personal-header">
                <h2>{this.props.name}</h2>
                <button onClick={() => this.handleClick()} className="functional-button">+</button>
              </div>
              {visible ? <input placeholder="Press Enter to Add" onChange={(e) => this.handleChange(e)} autoFocus onKeyPress={(e) => this.handleSubmit(e)}/> : null}              <ul>
                  {array.map((item, index) => {
                      return (
                        <li key={index}>
                          {item}
                          <button className="functional-button small" onClick={(e) => this.handleDelete(e)}><i id={index} className="fas fa-trash"></i></button>
                        </li>)
                  })}
              </ul>
            </>
          )
    }
  }
}

export default Personal;