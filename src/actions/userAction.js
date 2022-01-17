import axios from "axios";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REQUIRE_LOGIN,
    REQUIRE_SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    REQUIRE_LOGOUT,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    REQUIRE_LOAD_USER,
    CLEAR_ERRORS
} from "../constants/userConstants";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
    let cvalue = null
    const d = new Date();
    d.setTime(d.getTime() - (10 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: REQUIRE_LOGIN
        })

        const link = `/api/v2/logIn`
        const userDetails = {
            email: email,
            password: password
        }
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post(link, userDetails, config)

        // Store the data into cookies
        setCookie("token", data.token, 1)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })

    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: REQUIRE_LOAD_USER
        })

        const link = '/api/v2/getUserDetails'
        const { data } = await axios.get(link)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: REQUIRE_LOGOUT
        })
        const link = `/api/v2/logout`
        const { data } = await axios.post(link)
        console.log(data)

        // Delete the token from cookie
        deleteCookie("token")

        dispatch({
            type: LOGOUT_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error.response.data.message)
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data
        })
    }
}

export const signinUser = (name, email, password, avatar) => async (dispatch) => {
    try {
        dispatch({
            type: REQUIRE_SIGNIN
        })

        const link = `/api/v2/signUp`
        const userDetails = {
            name: name,
            email: email,
            password: password,
            avatar: avatar
        }

        const config = { headers: { "Content-Type": "multiport/form-data" } }
        const { data } = await axios.post(link, userDetails)

        // Store the data into cookies
        setCookie("token", data.token, 1)

        dispatch({
            type: SIGNIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(avatar)
        console.log(error.response.data)
        dispatch({
            type: SIGNIN_FAIL,
            payload: error.response.data
        })

    }
}

export const clearUserError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}