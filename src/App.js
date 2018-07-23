import React, { Component } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AlbumList from "./scenes/AlbumList"
import PhotoGallery from './scenes/PhotoGallery'

class App extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
      	<Router>
      		<div>
	      		<Switch>
					<Route exact path='/' component={AlbumList} />
					<Route path='/album/:id' key='album' component={PhotoGallery} />
				</Switch>
     		</div>
        </Router>
      </Provider>
    );
  }
}

export default App;

