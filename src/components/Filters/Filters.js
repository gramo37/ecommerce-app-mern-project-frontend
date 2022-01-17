import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import { getPriceFilter, getCategoryFilter, getRatingFilter } from '../../actions/productAction'
import { useDispatch, useSelector } from "react-redux"
import Select from '@mui/material/Select';
import { getCategoryList } from '../../actions/productAction'

const Filters = () => {

    const dispatch = useDispatch()

    const { price } = useSelector(
        (state) => state.price
    )
    const key = useSelector(
        (state) => state.category
    )
    const { category } = useSelector(
        (state) => state.categoryFilter
    )
    const { ratings } = useSelector(
        (state) => state.ratings
    )

    useEffect(() => {
        if (key.error) {
            return alert.error(key.error);
        }
        // dispatch(loadUser())
        dispatch(getCategoryList())
    }, [dispatch, key.error])

    const priceHandler = (event, newPrice) => {
        dispatch(getPriceFilter(newPrice))
    }

    const ratingHandler = (event, newRating) => {
        dispatch(getRatingFilter(newRating))
    }

    const categoryHandler = (event) => {
        console.log(event.target.value)
        dispatch(getCategoryFilter(event.target.value))
    };

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <>
            <div className='filterBoxContainer'>
                <div className="filterBox">
                    <Typography>Price</Typography>
                    <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay='auto'
                        aria-labelledby="range-slider"
                        min={0}
                        max={25000}
                    />
                </div>
                <div className="filterBox">
                    <Typography>Ratings</Typography>
                    <Slider
                        value={ratings}
                        onChange={ratingHandler}
                        valueLabelDisplay='auto'
                        aria-labelledby="range-slider"
                        min={0}
                        max={10}
                    />
                </div>
                <FormControl className='px-2 filterBox' variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Typography>Categories</Typography>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={category}
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
        </>
    )
}

export default Filters
