import React, { Component } from 'react';


class List extends React.Component {
  render(){
    let {array, category} = this.props;
    console.log(array);
    if(category === "work"){
        return(
            <div id="work_exp-list">
              {array.map((item, index) => {
                return (
                  <div key={"w" + index}>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}, {item[2]} | {item[3]} - {item[4]}</p>
                    <p>{item[5]}</p>
                  </div>
                )
              })}
            </div>
          )
    }else{
        return(
            <div id="school_exp-list">
              {array.map((item, index) => {
                return (
                  <div key={"s" + index}>
                    <h3>{item[0]}</h3>
                    <p>{item[1]} | {item[2]} - {item[3]}</p>
                  </div>
                )
              })}
            </div>
          )
    }
  }
}

export default List;