import axios from "axios";
const {
    REQUIRE_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL
} = require("../constants/orderConstants")

export const getOrders = () => async (dispatch) => {

    try {
        dispatch({
            type: REQUIRE_ORDER
        })
        const link = `api/v3/getMyOrders`

        const {data} = await axios.get(link)

        dispatch({
            type: GET_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ORDER_FAIL,
            payload: error.response.data
        })
    }
    
}