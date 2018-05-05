import {combineReducers} from 'redux';

import * as ActionTypes from '../actions';

function app(state = {files: {}}, action) {
  switch(action.type) {
    case ActionTypes.SAVE_FILE:
      const {file} = action;
      const files = {...state.files, [file.filename]: file};
      return {...state, files};

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app,
});

export default rootReducer;