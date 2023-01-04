import * as types from "./actionType";
import axios from "axios";

export const post_data=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_ADMIN_SUCCESS,payload:payload})

}

export const login_success=(payload)=>(dispatch)=>{
dispatch({type:types.GET_LOGIN_SUCCESS,payload:payload})
}

