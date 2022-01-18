const {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REQUIRE_LOGIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    REQUIRE_SIGNIN,
    CLEAR_ERRORS,
    REQUIRE_LOGOUT,
    LOGOUT_SUCCESS,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    REQUIRE_LOAD_USER,
    LOGOUT_FAIL
} = require("../constants/userConstants")


export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case REQUIRE_SIGNIN:
        case REQUIRE_LOGIN:
        case REQUIRE_LOAD_USER:
            return {
                loading: true,
                isAuthenticated: false
            }
        case SIGNIN_SUCCESS:
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case SIGNIN_FAIL:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
            return {
                loading: false,
                error: action.payload,
                isAuthenticated: false,
                user: null
            };

        case REQUIRE_LOGOUT:
            return {
                loading: true
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,         // Experiment with message
                user: null
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}