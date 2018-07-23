import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
 
class Album extends Component {

	componentDidMount() {
    	console.log(" componentDidMount id==",this.props.id)
  	}

	render() {
		const { id, album} = this.props;
		console.log("id==",id)
		return (
			<div id="photos">
  				<ul id="photo-gallery">
  					{
					  album.map(photo =>
						  <li key={photo.id}>
						     <img alt={photo.title} src={photo.thumbnailUrl} />
						  </li>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	album: state.albums[ownProps.match.params.id]
});

export default connect(mapStateToProps)(Album);