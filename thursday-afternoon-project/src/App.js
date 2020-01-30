import React from 'react';
import './App.css';
import data from './data'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: data,
      counter: 1, //this is intended to refer to data[i].id
    }
  }

  backward () {
    if (this.state.counter <= 1) {
      return null
    } else this.setState({counter: this.state.counter - 1})
  }

  forward () {
    if (this.state.counter >= this.state.data.length) {
      return null
    } else this.setState({counter: this.state.counter + 1})
  }

  render () {
    // console.log(data.length)
    return (
      <div className="App">
        <NavBar />
        <div>
          <DisplayedItem />
          <div className="bottomNavBar">
            <button className="previous navButton">{"< Previous"} onClick={this.backward}</button>
            <button></button>
            <button></button>
            <button></button>
            <button className="next navButton">{"Next >"} onClick={this.forward}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
