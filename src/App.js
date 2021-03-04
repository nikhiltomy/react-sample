import './App.css';
import React, { Component } from 'react'
import {CardList} from './component/card-list/card-list.component';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      monsters:[]
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  render() {
    return (
      <div className="App">
          <input type="search"/>
          <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}

