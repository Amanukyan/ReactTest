import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Album extends Component {

  render() {
  	const { album } = this.props;

  	return (
      <ul>
        {
          album.map(photo =>
          <li key={photo.id}>
             <img src={photo.thumbnailUrl} />
             <h4>{photo.title}</h4> 
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
	album: state.albums[ownProps.match.params.id]
});

export default connect(mapStateToProps)(Album);