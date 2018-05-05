import React, { Component } from 'react';
import GifBox from './Components/GifBox'
import axios from 'axios'
import api_key from './api_key'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {gif: ''}
  }

  componentWillMount(){
    this.getNewGif()
  }

  getNewGif = () => {
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
      .then(response => {
        this.setState({gif: response.data.data.embed_url})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      <br />
        Gif Master
        <hr />
        <br />
        <GifBox gifUrl={this.state.gif} newGif={this.getNewGif}/>
      </div>
    );
  }
}

export default App;