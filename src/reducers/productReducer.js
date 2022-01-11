// This file includes "How to do"

const {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_DETAIL_REQUEST,
    ALL_PRODUCT_DETAIL_SUCCESS,
    ALL_PRODUCT_DETAIL_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    PRICE,
    CATEGORY,
    CLEAR_ERRORS
} = require("../constants/productConstants")


export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_DETAIL_REQUEST:
            return {
                loading: true,
                ...state
            };
        case ALL_PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case ALL_PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export const categoryReducer = (state = { category: "Food" }, action) => {
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                loading: true,
                ...state
            };
        case ALL_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload
            };
        case ALL_CATEGORY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const priceFilterReducer = (state = { price: [0, 25000] }, action) => {
    switch (action.type) {
        case PRICE:
            return {
                price: action.payload
            }
        default:
            return state;
    }
}

export const categoryFilterReducer = (state = { category: "" }, action) => {
    switch (action.type) {
        case CATEGORY:
            return {
                category: action.payload
            }
        default:
            return state;
    }
}