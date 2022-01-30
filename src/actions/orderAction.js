import axios from "axios";
const {
    REQUIRE_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL
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

export const createOrder = (input_data) => async (dispatch) => {
    try {
        dispatch({
            type: REQUIRE_ORDER
        })

        const link = `api/v3/createOrder`

        const {data} = await axios.post(link, input_data)

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data
        })
    }
}