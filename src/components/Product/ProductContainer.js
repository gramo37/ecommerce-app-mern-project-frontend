import React, { useEffect, useState } from 'react'
import Product from './Product'
import './Product.css'
import { getProduct } from '../../actions/productAction'
import { useDispatch, useSelector } from "react-redux"
// import { useParams } from "react-router-dom"
import { useAlert } from "react-alert";
import Loader from '../Loader/Loader'
import { useLocation } from 'react-router-dom';
const ProductContainer = () => {

    // UseSelectors
    const { price } = useSelector(
        (state) => state.price
    )
    const { category } = useSelector(
        (state) => state.categoryFilter
    )
    const { loading, error, products, productsCount } = useSelector(              // useSelector is for getting the state from reducer
        (state) => state.products
    )

    // Variables
    const alert = useAlert()
    const dispatch = useDispatch();
    const search = useLocation().search;
    let keyword = new URLSearchParams(search).get('keyword');
    let [currentPage, setcurrentPage] = useState(1)
    const productPerPage = 6
    const pageLimit = Math.ceil(productsCount / productPerPage)

    // UseEffect
    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        updateProduct()
    }, [dispatch, error, alert, keyword, currentPage, price, category])

    // Functions
    const updateProduct = async () => {
        if (keyword) {
            await dispatch(getProduct(keyword, currentPage, productPerPage, price, category))      // dispatch is used to call actions
        }
        if (!keyword) {
            await dispatch(getProduct("", currentPage, productPerPage, price, category))
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
            updateProduct()
        }
    }

    const nextPage = () => {
        setcurrentPage(currentPage + 1)
        updateProduct()
    }

    return (
        <>
            <h1 className='text-center m-4'>PRODUCTS</h1>

            {loading ? <Loader /> : <div className='container-fluid productContainer mt-2'>
                {products && products.map((product) => {
                    return (<Product key={product._id} product={product} />)
                })}
            </div>}


            <div className="pageButton container">
                <button className="btn btn-primary" disabled={currentPage === 1 ? true : false} onClick={prevPage}>Prev</button>
                <button className="btn btn-primary" disabled={currentPage === pageLimit ? true : false} onClick={nextPage}>Next</button>
            </div>
        </>
    )
}

export default ProductContainer
