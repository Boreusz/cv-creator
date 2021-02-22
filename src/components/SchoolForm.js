import React, { Component } from 'react';

class SchoolForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      schoolValues: ["", "", "", ""],
    }
  }
  handleChange(e, number){
   let items = this.state.schoolValues;
  items[number] = e.target.value;
  this.setState({
    schoolValues: items,
  })
  }

  render(){
    let {schoolValues} = this.state;
    return(
      <div id="school-form">
          <form onSubmit={this.props.submit}>
              <ul>
                <label>Collage Name:</label><br/>
                <input type="text" value={schoolValues[0]} onChange={(e) => this.handleChange(e, 0)}/>
              </ul>
              <ul>
                <label>Degree: </label><br/>
                <input type="text" value={schoolValues[1]} onChange={(e) => this.handleChange(e, 1)}/>
              </ul>
              <ul>
                <label>Since:</label><br/>
                <input type="text" value={schoolValues[2]} onChange={(e) => this.handleChange(e, 2)} placeholder="MM.YYYY"/>
              </ul>
              <ul>
                <label>To:</label><br/>
                <input type="text" value={schoolValues[3]} onChange={(e) => this.handleChange(e, 3)} placeholder="MMM.YYYY or Present"/>
              </ul>
              <ul>
                <button>Add</button>
              </ul>
          </form>
      </div>
    )
  }
}

export default SchoolForm;
