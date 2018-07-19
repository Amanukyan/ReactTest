import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/photos';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ albums: data, isLoading: false  }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { albums, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {albums.map(album =>
          <li key={album.id}>
            <img src={album.thumbnailUrl} />
            <h4>{album.title}</h4> 
          </li>
        )}
      </ul>
    );
  }
}

export default App;
