import React, { useEffect } from 'react';
import './Home.css'
import {
    Link
} from "react-router-dom";
import { getBestSellers } from '../../actions/productAction'
import { useDispatch, useSelector } from "react-redux"
import Product from '../Product/Product';
import { useAlert } from "react-alert";
import Loader from '../Loader/Loader';

const Home = () => {

    const alert = useAlert()
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getBestSellers())
    }, [dispatch, error, alert])

    return (
        <>
            {loading ? <Loader /> : <div className="d-flex h-100 text-center text-white bg-dark homeContainer">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column homeContent">
                    <main className="px-3">
                        <h1>Welcome to Gramokart</h1>
                        <p className="lead">Find Amazing products Below</p>
                        <p className="lead">
                            <Link to="/products" className="btn btn-lg btn-secondary fw-bold border-white bg-white" style={{ color: "black" }}>Shop Now</Link>
                        </p>
                    </main>
                </div>
            </div>}
            <div className="featuredCollection">
                <h1 className='text-center m-4'>BEST SELLERS</h1>

                <div className='container-fluid productContainer mt-2'>
                {products && products.map((product) => {
                    return (<Product key={product._id} product={product} />)
                })}
            </div>

                


            </div>
        </>
    )
}

export default Home
