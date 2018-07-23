import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
 
class PhotoDetail extends Component {

	render() {
		const {id, album } = this.props;
    	const photo = album ? album.find(photo => photo.id.toString() === id): null;
		return (
			photo ?
			<div className="container">
				<img alt= "" src= {photo.url} />
				<h3> {photo.title}</h3>
			</div>:
			<div>
				{/* TODO: */}
			</div>

		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	album: state.albums[ownProps.match.params.albumId]
});

export default connect(mapStateToProps)(PhotoDetail);