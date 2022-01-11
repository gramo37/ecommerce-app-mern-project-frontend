// This file contains "what to do"


import axios from "axios";

const {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    ALL_PRODUCT_DETAIL_REQUEST,
    ALL_PRODUCT_DETAIL_SUCCESS,
    ALL_PRODUCT_DETAIL_FAIL,
    PRICE,
    PRICE_ERROR,
    CATEGORY,
    CATEGORY_ERROR,
    CLEAR_ERRORS
} = require("../constants/productConstants")


export const getProduct = (keyword = "", page, productPerPage, price, category) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })

        let link = ""
        if (category === undefined || category === "") {
            link = `/api/v1/products?productsPerPage=${productPerPage}&keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }
        else {
            link = `/api/v1/products?productsPerPage=${productPerPage}&keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
        }
        const { data } = await axios.get(link)
        // const { data } = await fetch("/api/v1/products?productsPerPage=10")

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getCategoryList = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_CATEGORY_REQUEST
        })

        const { data } = await axios.get(`/api/v1/categories`)

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_DETAIL_REQUEST
        })

        const { data } = await axios.get(`/api/v1/getProductById/${id}`)
        // const { data } = await fetch("/api/v1/products?productsPerPage=10")

        dispatch({
            type: ALL_PRODUCT_DETAIL_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_DETAIL_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getBestSellers = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })

        const { data } = await axios.get("/api/v1/searchByCollection?collectionName=best sellers")

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const getPriceFilter = (newPrice) => async (dispatch) => {
    try {
        dispatch({
            type: PRICE,
            payload: newPrice
        })
    } catch (error) {
        dispatch({
            type: PRICE_ERROR,
            payload: error
        })
    }
}

export const getCategoryFilter = (newCategory) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY,
            payload: newCategory
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: error
        })
    }
}

export const clearProductError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}