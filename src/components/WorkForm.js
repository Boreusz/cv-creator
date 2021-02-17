import React, { Component } from 'react';

class WorkForm extends React.Component {
  render(){
    return(
      <div id="school-form">
          <form onSubmit={}>
              <label>
                Title:
                <input/>
              </label>
              <label>
                  Company:
                  <input/>
              </label>
              <label>
                  Since:
                  <input/>
              </label>
              <label>
                  To:
                  <input/>
              </label>
              <label>
                  <input/>
                  Present
              </label>
              <label>
                  Responsibilites:
                  <textarea/>
              </label>
          </form>
      </div>
    )
  }
}

export default WorkForm;
