import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {Navigate} from "react-router-dom";




const Profile = (props) => {

    return (
        <div>

            <ProfileInfo profile={props.profile} />


            <MyPostsConteiner store={props.store}  dispatch={props.dispatch}/>


        </div>

    );
}
export default Profile;