import { FETCH_PRLIST } from './actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:5010/tracker/list';

export const fetchPRs = (prs) => {
    return {
      type: FETCH_PRLIST,
      prs
    }
  };
  
  export const fetchAllPRs = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPRs(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  