import React, { useRef, useState, useEffect } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./userInfo.css"
import { logoutUser } from '../../actions/userAction';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';

const UserInfo = ({ user }) => {

    const alert = useAlert()

    const dispatch = useDispatch()

    const userDetailsRef = useRef(null);

    console.log(user)

    const [currentState, setcurrentState] = useState(false)

    useEffect(() => {
        userDetailsRef.current.classList.add("hideUserDetails");
        userDetailsRef.current.classList.remove("showUserDetails");
    }, [])

    const toggleDetails = (e) => {
        if (currentState === true) {
            userDetailsRef.current.classList.add("showUserDetails");
            userDetailsRef.current.classList.remove("hideUserDetails");
            setcurrentState(false)
        }

        else if (currentState === false) {
            userDetailsRef.current.classList.add("hideUserDetails");
            userDetailsRef.current.classList.remove("showUserDetails");
            setcurrentState(true)
        }
    }

    const logout = () => {
        dispatch(logoutUser())
        alert.success("Logout successfully")
    }

    return (
        <>
            <AccountBoxIcon onClick={(e) => toggleDetails()} />

            {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {user.user.role === "admin" && <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>}
                <li><Link className="dropdown-item" href="#">Account</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" onClick={()=>logout()} to="/login">Logout</Link></li>
            </ul> */}

            <div className='userDetailsContainer' ref={userDetailsRef}>
                <div className="card" style={{ width: "18rem" }}>
                    {/* // <img src={user.user.avatar.url ? user.user.avatar.url : "..."} className="card-img-top" alt="..." /> */}
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.user.name ? user.user.name : "Name"}</h5>
                        <p className="card-text">{user.user.email ? user.user.email : "Email"}</p>
                        <p className="card-text">{user.user.role ? user.user.role : "Role"}</p>
                        <button className="btn btn-primary" onClick={()=>logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo
