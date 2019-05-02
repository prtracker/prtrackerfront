import { FETCH_PRLIST } from '../actions/actionTypes';
import { handleActions } from 'redux-actions'; 

const prListReducer = handleActions({
  [FETCH_PRLIST]: receivePRList,
}, {
  prsData: [],
});

function receivePRList(state = [], action) {
  return {
    ...state,
    prsData: action.prs,
  }
}

export default prListReducer;