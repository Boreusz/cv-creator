import React, { Component } from 'react';

class SchoolForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.submit("school")
  }
  handleChange(e, number){
    this.props.change(e.target.value, number, "school")
  }

  render(){
    let {schoolValues} = this.props;
    return(
      <div id="school-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
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
