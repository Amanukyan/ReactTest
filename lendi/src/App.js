import React, { Component } from 'react';
import { Provider } from "react-redux"
import AlbumList from "./containers/AlbumList"
 
class App extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <AlbumList/>
      </Provider>
    );
  }
}

export default App;