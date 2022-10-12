// reducer

import { LOGIN, LOGOUT } from './auth.types';


const INITIAL_STATE = {
  isLogin: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
           return {
            ...state,
            isLogin: true,
           };
        case LOGOUT:
           return {
              ...state,
              isLogin: false,
           };

         default: return state;

    }
};

export default reducer;