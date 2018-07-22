import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Album extends Component {

	componentDidMount() {
    	console.log(" componentDidMount id==",this.props.id)
  	}

	render() {
		const { id, album} = this.props;
		console.log("id==",id)
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
	id: ownProps.match.params.id,
	album: state.albums[ownProps.match.params.id]
});

export default connect(mapStateToProps)(Album);