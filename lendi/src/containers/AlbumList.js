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

    return (
      <ul>
        {albums.map(album =>
          <li key={album.id}>
            <img src={album.thumbnailUrl} />
            <h4>{album.title}</h4> 
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