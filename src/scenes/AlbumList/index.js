import React from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../../actions/albumActions";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

import './style.css';

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
      <div class="grid">
        {
          albumPreviews.map(album =>
            <Link to={'/album/' + album.id} style={{ textDecoration: 'none' }}>
              <div class="card" key={album.id}>
                <img class="card_image" alt={album.title} src={album.thumbnailUrl} />
                <div class="card_content">
                    <h3 class="card_title">{album.title}</h3>
                    <p class="card_subtitle">{album.photoCount} curated photos</p>
                </div>
              </div>
            </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
  loading: state.loading,
  error: state.error
});

export default withRouter(connect(mapStateToProps)(AlbumList));