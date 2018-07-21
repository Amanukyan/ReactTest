import React, { Component } from 'react';
 
class Album extends Component {

  render() {
  	const albumId = this.props.match.params.id
    return (
      <div>
	    <h2>Album {albumId}</h2>
	  </div>
    );
  }
}

export default Album;