import state from "./State";
import {usersAPI} from "../../api/api";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
 let initialState ={
     posts: [
         {name: "Dimasdasdasd", id: "1", likesCount: 112},
         {name: "Andr", id: "2", likesCount: 90}
     ],
     newPostText: "IT-Incubato",
     profile: null
 }


const profileReducer = (state = initialState , action) => {
   switch (action.type) {
       case ADD_POST: {
           let newPost = {name: state.newPostText, id: "8", likesCount: 1};
           return {
               ...state,
               posts: [...state.posts, newPost],
               newPostText: ""
           };
       }
       case SET_USER_PROFILE: {
          return {
              ...state,
              profile: action.profile
          }
   }
       case UPDATE_NEW_POST_TEXT: {
           return {
               ...state,
               newPostText: action.newText
           }
       }
       default:
       return state;
       }
}

export const addPostActionCreator = () => {
    return(
        {type: ADD_POST}
    )
}
export const updateNewPostTextActionCreator = (text) => {
    return(
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
}
export const setUserProfile = (profile) => {
    return(
        {type: SET_USER_PROFILE, profile}
    )
}
export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}



export default profileReducer;






