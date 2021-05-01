import React from 'react'
import {Link} from 'react-router-dom';
import User from '../assets/user.png'
import Admin from '../assets/admin.png'
import '../App.css'
export default function Landing() {
    return (
        <div>
            <h1>Hackers Ranking System</h1>
            <p>admin_login : suresh@gmail.com</p>
            <p>password : suresh</p>
            <div className="panel">
                <div className="user">
                  <Link to="/login"> <img src={User} alt=""/>
                    <h1>User</h1>
                    </Link> 
                </div>
                <div className="admin">
                <Link to="/admin">
                    <img src={Admin} alt=""/>
                    <h1>Admin</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
