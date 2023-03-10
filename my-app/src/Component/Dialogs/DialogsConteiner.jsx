import React from "react";


import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },

        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

}
    }

let AuthRedirectComponent = withAuthRedirect(Dialogs);



const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsConteiner;