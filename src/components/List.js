import React, { Component } from 'react';


class List extends React.Component {
  handleDelete(e, target){
    this.props.delete(e.target.value, target)
  }
  render(){
    let {array, category} = this.props;

    if(category === "work"){
        return(
            <div id="work_exp-list">
              {array.map((item, index) => {
                return (
                  <div key={"w" + index}>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}, {item[2]} | {item[3]} - {item[4]}</p>
                    <p>{item[5]}</p>
                    <button value={index} onClick={(e) => this.handleDelete(e, "work")}>Delete</button>
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
                    <button value={index} onClick={(e) => this.handleDelete(e, "school")}>Delete</button>
                  </div>
                )
              })}
            </div>
          )
    }
  }
}

export default List;