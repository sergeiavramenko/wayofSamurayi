import React from "react";
import Photo from "../../../Component/Walk.gif";
import pi from './ProfileInfo.module.css';
import Preloader from "../../components/common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile){
        return <div> <Preloader/> </div>
    }
    const  onMainPhotoSelected = (e) => {
        if(e.target.files.left) {
          props.savePhoto( e.target.files[0] )
        }
    }
    return (
        <div>
            <div className={pi.descriptionBlock}>
                <img  src={props.profile.photos.large || Photo}/>
               <li>{props.profile.aboutMe }</li>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;