import React, { useRef, useState, useEffect } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./userInfo.css"

const UserInfo = ({ user }) => {

    const userDetailsRef = useRef(null);

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

    return (
        <>
            <AccountBoxIcon onClick={(e) => toggleDetails()} />

            <div className='userDetailsContainer' ref={userDetailsRef}>
                <div className="card" style={{ width: "18rem" }}>
                    {/* <img src={user.user.avatar.url} className="card-img-top" alt="..." /> */}
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.user.name}</h5>
                        <p className="card-text">{user.user.email}</p>
                        <p className="card-text">{user.user.role}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo
