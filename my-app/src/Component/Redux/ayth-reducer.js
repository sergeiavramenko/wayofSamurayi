import state from "./State";
import {authAPI, usersAPI} from "../../api/api";
import {toggleFollowingProgress, unfollow} from "./users-reducer";

const SET_USER_DATA = "SET_USER_DATA";



let initialState = {
    Id: null,
    email: "null",
    login: 'null',
    isAuth: false


}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
           return {
                ...state,
               ...action.data,
               isAuth: true
            }
        default:
            return state;
     }
}
export const setAuthUserdata = (Id, email, login) => {

    return (
        {type: SET_USER_DATA,  data: {Id, email, login} }
    )
}
export const getAythUserDataThunk = ( ) => {
    return (dispatch) => {
        authAPI.me().then(res => {

            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data;
                dispatch(setAuthUserdata(id, email, login))
            }
        })
    }}





export default authReducer;