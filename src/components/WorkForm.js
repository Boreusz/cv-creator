import React, { Component } from 'react';

class WorkForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.submit("work")
  }
  handleChange(e, number){
    this.props.change(e.target.value, number, "work")
  }
  render(){
    let {workValues} = this.props;
    return(
      <div id="work-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <ul>
              <li>
                <label>Work Title:</label><br/>
                <input type="text" value={workValues[0]} onChange={(e) => this.handleChange(e, 0)}/>
              </li>
              <li>
                <label>Company: </label><br/>
                <input type="text" value={workValues[1]} onChange={(e) => this.handleChange(e, 1)}/>
              </li>
              <li>
                <label>Location: </label><br/>
                <input type="text" value={workValues[2]} onChange={(e) => this.handleChange(e, 2)}/>
              </li>
              <li>
                <label>Since:</label><br/>
                <input type="text" value={workValues[3]} onChange={(e) => this.handleChange(e, 3)} placeholder="MM.YYYY"/>
              </li>
              <li>
                <label>To:</label><br/>
                <input type="text" value={workValues[4]} onChange={(e) => this.handleChange(e, 4)} placeholder="MMM.YYYY or Present"/>
              </li>
              <li>
                <label>Description:</label><br/>
                <textarea value={workValues[5]} onChange={(e) => this.handleChange(e, 5)}/>
              </li>
              <li>
                <button type="submit">Add</button>
              </li>
            </ul>
          </form>
      </div>
    )
  }
}

export default WorkForm;
