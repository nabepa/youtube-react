import React, { Component } from 'react';
import './app.css';
import NavBar from './components/navBar';
// import SideBar from './components/sidebar';
import VideoList from './components/videoList';
import axios from 'axios';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handdleSearch = async (queryFromSearchBar) => {
    const baseUrl = 'https://youtube.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyCrgr1-hAAzcJdRTF9IHNuYy4ndwKePR4w';
    const axios = require('axios');
    const confSearch = {
      method: 'get',
      url: `${baseUrl}/search?part=snippet&maxResults=10&q=${queryFromSearchBar}&key=${apiKey}`,
      headers: {},
    };
    const resSearch = await axios(confSearch);
    this.setState({
      videos: resSearch.data.items,
    });
  };

  render() {
    return (
      <>
        <NavBar onSearch={this.handdleSearch} />
        {/* <SideBar /> */}
        <VideoList videos={this.state.videos} />
      </>
    );
  }
}

export default App;
