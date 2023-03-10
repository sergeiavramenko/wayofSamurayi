import React from "react";
import loading from "../Walk.gif"
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
     toggleFollowingProgress,
    unfollow, followThunk,unfollowThunk
} from "../Redux/users-reducer";

import Users from "./Users";
import Preloader from "../components/common/Preloader/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}

                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={ this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}


            />
        </>
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
export default connect    (mapStateToProps,

    {

         setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        followThunk,
        unfollowThunk,
    })               (UsersContainer);