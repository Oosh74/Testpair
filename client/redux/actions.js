import axios from 'axios';
import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

export const selectCampus = (campus) => {
  return {
    type: SELECT_CAMPUS,
    campus,
  };
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus,
  };
};

// THUNK CREATORS

export const fetchCampuses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/campuses');
    dispatch(setCampuses(data));
  } catch (error) {
    return error;
  }
};

export const postCampus = () => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/campuses');
    dispatch(addCampus(data));
  } catch (error) {
    return error;
  }
};
