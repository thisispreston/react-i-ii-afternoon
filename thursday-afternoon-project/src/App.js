import React from 'react';
import './App.css';
import data from './data'
import NavBar from './Components/NavBar'
import DisplayedItems from './Components/DisplayedItems'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: data,
      counter: 1, //this is intended to refer to data[i].id
    }
  }

  backward = () => {
    if (this.state.counter <= 1) {
      this.setState({counter: this.state.data.length})
    } else this.setState({counter: this.state.counter - 1})
  }

  forward = () => {
    if (this.state.counter >= this.state.data.length) {
      this.setState({counter: 1})
    } else this.setState({counter: this.state.counter + 1})
  }

  render () {
    // console.log(data.length)
    return (
      <div className="App">
        <div className="navBar"><NavBar /></div>
        <div className="box">
          <DisplayedItems data={this.state.data[this.state.counter-1]}/>
          <div className="bottomNavBar">
            <button className="previous navButton" onClick={this.backward}>{"< Previous"}</button>
            <button className="edit editingButtons">Edit</button>
            <button className="delete editingButtons">Delete</button>
            <button className="new editingButtons">New</button>
            <button className="next navButton" onClick={this.forward}>{"Next >"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
