// import axiosWithAuth from 
export const ADD_POTLUCK = 'ADD_POTLUCK';
export const NEW_USER = 'NEW_USER';
export const EDIT_POTLUCK = 'EDIT_POTLUCK';
export const LOGIN = 'LOGIN';
export const GET_POTLUCK = 'GET_POTLUCK';
export const FETCH_START = "FETCH_START";
export const FETCH_POTLUCK_SUCCESS = "FETCH_POTLUCK_SUCCESS ";
export const FETCH_FAIL = "FETCH_FAIL";
export const DELETE_POTLUCK = "DELETE_POTLUCK";

// export const getPotlucks = () => {
//   return (dispatch) => {
//     dispatch(fetchStart());
//     axiosWithAuth().get('potlucks')
//       .then(res => {
//         // console.log('actions/index.js ln:17 res', res);
//         // console.log('actions/index.js ln:18 res.data', res.data);
//         dispatch(fetchPotluckSuccess(res.data))
//       })
//   }
// }
export const fetchStart = () => {
  return ({ type: FETCH_START })
}

export const fetchPotluckSuccess = (potluck) => {
  return ({ type: FETCH_POTLUCK_SUCCESS, payload: potluck })
}

export const fetchFail = () => {
  return ({ type: FETCH_FAIL })
}
export const add = (newPotluck) => {
  return { type: ADD_POTLUCK, payload: newPotluck };
};

export const getPotluck = (potluck) => {
  return { type: GET_POTLUCK, payload: potluck };
};

export const newUser = (newUser) => {
  return { type: NEW_USER, payload: newUser };
};

export const edit = (edited) => {
  return { type: EDIT_POTLUCK, payload: edited };
};

export const login = (userID) => {
  return { type: LOGIN, payload: userID };
};

export const deletePotluck = (potluckId) => {
  return { type: DELETE_POTLUCK, payload: potluckId}
}

// export const ADD_POTLUCK = "ADD_POTLUCK";

// export function addPotluck(newPotluck) {
//     return {
//         type: ADD_POTLUCK,
//         payload: newPotluck
//     }
// }