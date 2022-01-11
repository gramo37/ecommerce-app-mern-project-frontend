import React, { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom";
import Search from '../Search/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { getCategoryList, getPriceFilter, getCategoryFilter } from '../../actions/productAction'
import { useDispatch, useSelector } from "react-redux"
import Select from '@mui/material/Select';

const Navbar = (props) => {

    // useSelectors
    const key = useSelector(
        (state) => state.category
    )
    const priceFil = useSelector(
        (state) => state.price
    )
    const categoryFilter = useSelector(
        (state) => state.categoryFilter
    )

    // Variables
    const dispatch = useDispatch();
    
    // useEffect
    useEffect(async () => {
        if (key.error) {
            return alert.error(key.error);
        }
        await dispatch(getCategoryList())
    }, [dispatch, key.error])

    // Functions
    const priceHandler = (event, newPrice) => {
        dispatch(getPriceFilter(newPrice))
    }

    const categoryHandler = (event) => {
        dispatch(getCategoryFilter(event.target.value))
    };

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="\">GramoKart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <Search />
                        <div className="filterBox">
                            <Typography>Price</Typography>
                            <Slider
                                value={priceFil.price}
                                onChange={priceHandler}
                                valueLabelDisplay='auto'
                                aria-labelledby="range-slider"
                                min={0}
                                max={25000}
                            />
                        </div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Typography>Categories</Typography>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={categoryFilter.categoryFil}
                                onChange={categoryHandler}
                                label="Category"
                            >
                                <MenuItem key={"all"} value={""}>All Products</MenuItem>
                                {key.category.category && key.category.category.map((item) => (
                                    <MenuItem key={item.id} value={item.category !== undefined ? item.category : "Food"}>{capitalize(item.category !== undefined ? item.category : "food")}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
