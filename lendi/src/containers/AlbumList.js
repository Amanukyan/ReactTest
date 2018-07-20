import React from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";

class AlbumList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }

  render() {
    const { error, loading, albums } = this.props;
  
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    var albumPreviews = []
    for(var albumId in albums) {
      var firstPhoto = albums[albumId][0]
      var preview = {
        "id" : albumId,
        "thumbnailUrl" : firstPhoto.thumbnailUrl,
        "title" : "Album " + albumId,
        "photoCount" : albums[albumId].length
      }
      albumPreviews.push(preview)
    }

    return (
      <ul>
        {
          albumPreviews.map(album =>
          <li key={album.id}>
            <img src={album.thumbnailUrl} />
            <h4>{album.title}</h4> 
            <h4>Count:{album.photoCount}</h4> 
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(AlbumList);