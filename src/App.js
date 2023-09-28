import React, { Component, useState } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { useActionData } from 'react-router-dom';

class App extends Component{
  // const field = this.state.robots
  constructor() {
    super()
    this.state= {
      robots: [],
      searchField:''
    }
  }

  componentDidMount (){
    this.setState({robots:robots})
  }

  onSearchChange= (event) => {
    this.setState({searchField:event.target.value})

  }
  // const [robo, setRobo] = useState=>{''}
  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>Robo-Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }

}

export default App;
