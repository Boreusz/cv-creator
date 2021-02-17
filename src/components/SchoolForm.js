import React, { Component } from 'react';

class SchoolForm extends React.Component {
  render(){
    return(
      <div id="school-form">
          <form onSubmit={}>
              <label>
                Collage Name:
                <input/>
              </label>
              <label>
                  Degree:
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
          </form>
      </div>
    )
  }
}

export default SchoolForm;
