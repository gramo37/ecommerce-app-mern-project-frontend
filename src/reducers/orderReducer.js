const {
    REQUIRE_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL
} = require("../constants/orderConstants")

export const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case REQUIRE_ORDER:
            return {
                loading: true
            }
        case GET_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case GET_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}