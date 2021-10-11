// action

import { LOGIN, LOGOUT } from './auth.types';


export const actionLogin = () => {
    return {
        type: LOGIN,
    };
};
export const actionLogout = () => {
    return {
       type: LOGOUT,
    };
};