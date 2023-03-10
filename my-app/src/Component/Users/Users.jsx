import React from "react";
import styles from "./users.module.css";
import userPhoto from "../images.png";
import {NavLink} from "react-router-dom";
import n from "../NavBar/NavBar.module.css";



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id} className = { navData => navData.isActive ? n.active : n.item }>

                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                               alt="sadas"/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some( id => id === u.id)}
                                    onClick={() => { props.unfollowThunk(u.id)
                            }}>Unfollow</button> :

                            <button disabled={props.followingInProgress.some( id => id === u.id)}
                                    onClick={() => { props.followThunk(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span> <div>{u.name}</div>
                        <div>{u.status}</div></span>
                    <span> <div>u.location.city</div>
                        <div>u.location.country</div></span>
                </span>

            </div>)

        }
    </div>
}
export default Users