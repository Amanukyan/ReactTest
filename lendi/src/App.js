import React, { Component } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AlbumList from "./containers/AlbumList"
import Album from './containers/Album'
 
class App extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
      	<Router>
      		<div>
	      		<Switch>
					<Route exact path='/' component={AlbumList} />
					<Route path='/album/:id' key='album' component={Album} />
				</Switch>
     		</div>
        </Router>
      </Provider>
    );
  }
}

export default App;

