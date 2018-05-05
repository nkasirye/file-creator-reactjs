import {connect} from 'react-redux';

import {saveFile} from '../actions';
import Home from '../scenes/Home';
import Document from '../components/Document';

const mapStateToProps = (state, ownProps) => {
  const {files} = state.app;
  const {filename} = ownProps.match.params;
  if (filename) {
      const file = files[filename] || {content: '', filename};
      return {file, files};
  } else {
      return {files};
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveFile: (file) => {
      dispatch(saveFile(file));
    },
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;