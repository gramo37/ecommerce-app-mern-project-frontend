import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Search from '../Search/Search';
import { getCategoryList } from '../../actions/productAction'
import { useDispatch, useSelector } from "react-redux"
import { logoutUser, clearUserError } from '../../actions/userAction';
import {loadUser} from "../../actions/userAction"
import UserInfo from './UserInfo';

const Navbar = () => {

    // Variables
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuthenticatedUser, setisAuthenticatedUser] = useState(false)

    // useSelectors
    const key = useSelector(
        (state) => state.category
    )
    const userDetails = useSelector(
        (state) => state.user
    )

    // useEffect
    useEffect(() => {
        if (key.error) {
            return alert.error(key.error);
        }
        // dispatch(loadUser())
        
        setisAuthenticatedUser(userDetails.isAuthenticated)
    }, [dispatch, userDetails, key.error])

    // Functions
    const logout = async () => {
        await dispatch(logoutUser())
        await dispatch(clearUserError())
        navigate('/login')
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
                            <li className="nav-item">
                                {isAuthenticatedUser ? <Link className="nav-link active" aria-current="page" to="/login" onClick={() => logout()}>Logout</Link> : <Link className="nav-link active" aria-current="page" to="/login">Login</Link>}
                            </li>
                        </ul>
                        <Search />
                        {/* {userDetails.isAuthenticated && <UserInfo user={userDetails}/>} */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
