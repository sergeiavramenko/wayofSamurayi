import React from "react";

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunk(userId)


    }

    render() {
                return (
            <div>
                <Profile  {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = (props) => {
    return (<AuthRedirectComponent {...props} params={useParams()}/>
    )
}
export default  connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent);
