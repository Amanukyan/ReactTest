import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import { withRouter } from 'react-router'

class PhotoGallery extends Component {

	render() {
		const {albumId, album} = this.props;

		return (
			album ?
			<div className="photos">
				{
					album.map(photo =>
					<Link to={'/album/' + albumId + "/" + photo.id} style={{ textDecoration: 'none' }} key={photo.id}>
						<img alt={photo.title} src={photo.thumbnailUrl} />
					</Link>
				)}
			</div>
			:
			<div>
				{/* TODO: */}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	albumId: ownProps.match.params.albumId,
	album: state.albums[ownProps.match.params.albumId]
});

export default withRouter(connect(mapStateToProps)(PhotoGallery));
