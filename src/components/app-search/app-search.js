import React, { Component } from "react";

import './app-search.css'

export default class AppSearch extends Component {
  
  state = {
    term: ''
  }

  onTermChange = (e)=>{
    const {onSearchChange = () => {}} = this.props;
    console.log(this.props)
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  }

  render (){
    return(
      <input  type = "text"
              className="form-control search-input"
      // style = {searchStyle}
              placeholder={"Type here to search"}
      // placeholder={searchText}
              value ={this.state.term}
              onChange={this.onTermChange }
      ></input>
    )
  }
}

// const AppSearch = () => {
//     const searchText = 'Type here to search'
    // const searchStyle = {
     //   fontSize : '22px',
     // }
// }

// export default AppSearch;