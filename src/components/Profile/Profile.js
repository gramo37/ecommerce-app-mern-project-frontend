import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import './profile.css'
import { Link, useNavigate } from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import Loader from "../Loader/Loader"

const Profile = () => {

    try {
        const user = useSelector(
            (state) => state.user
        )

        const { name, email, role, avatar, createdAt } = user.user.user

        return (
            <>{user.loading ? <Loader /> : <>
                <Navbar />
                <h1 className='text-center m-2'>My Profile</h1>
                {user && <div className='profileContainer'>
                    <div className="leftProfile">
                        <img src={avatar.url} alt="profile Image" />
                        <Link to="/editProfile"><ModeEditIcon />Edit Profile</Link>
                    </div>
                    <div className="rightProfile">
                        <div>
                            <h4>Full Name</h4>
                            <p>{name}</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>{email}</p>
                        </div>
                        <div>
                            <h4>Joined On</h4>
                            <p>{String(createdAt).substr(0, 10)}</p>
                        </div>
                        <div>
                            <h4>Orders</h4>
                            <Link to="/orders"><ShoppingBagIcon />My Orders</Link>
                            <Link to="/updatePassword"><ContentPasteGoIcon />Change Password</Link>
                        </div>
                    </div>
                </div>}</>}
            </>
        )
    } catch (error) {
        console.log(error)
        return (
            <>
                <Navbar />
                <div className='container'><h1 className='text-center'>Sorry Profile not found.<br />Please Login.</h1></div>
            </>
        )
    }

}

export default Profile
