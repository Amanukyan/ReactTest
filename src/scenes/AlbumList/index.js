import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

import './style.css';

class AlbumList extends React.Component {

  createCardInfosForAlbums(albums) {
    var albumCardInfos = []
    for (var albumId in albums) {
      var firstPhoto = albums[albumId][0]
      var preview = {
        "id" : albumId,
        "thumbnailUrl" : firstPhoto.thumbnailUrl,
        "title" : "Album " + albumId,
        "photoCount" : albums[albumId].length
      }
      albumCardInfos.push(preview)
    }
    return albumCardInfos
  }

  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="loader">Loading...</div>;
    }

    const albumCardInfos = this.createCardInfosForAlbums(albums)

    return (
      <div className="grid">
        {
          albumCardInfos.map(album =>
              <div className="card" key={album.id}>
                <Link to={'/album/' + album.id} style={{ textDecoration: 'none' }}>
                  <img className="card_image" alt={album.title} src={album.thumbnailUrl} />
                  <div className="card_content">
                      <h3 className="card_title">{album.title}</h3>
                      <p className="card_subtitle">{album.photoCount} curated photos</p>
                  </div>
                </Link>
              </div>
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
