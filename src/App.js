import React, { Component } from 'react';
import { Provider, connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchAlbums } from "./actions/albumActions";
import AlbumList from "./scenes/AlbumList"
import PhotoGallery from './scenes/PhotoGallery'
import PhotoDetail from './scenes/PhotoDetail'


class App extends Component {

  componentDidMount() {
    //TODO: fetch here?
    this.props.dispatch(fetchAlbums());
  }

  render() {
    return (
      <Provider store={this.props.store}>
      	<Router>
      		<div>
	      		<Switch>
    					<Route exact path='/' component={AlbumList} />
              <Route path='/album/:albumId/:id' key='photo' component={PhotoDetail} />
    					<Route path='/album/:albumId' key='album' component={PhotoGallery} />
    				</Switch>
     		   </div>
        </Router>
      </Provider>
    );
  }
}

export default connect(null)(App)

