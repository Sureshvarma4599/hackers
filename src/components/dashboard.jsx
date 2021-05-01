import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
export default function dashboard() {
    return (
        <div>
            <div>
               <Link to="/add-hacker"> <button>Add-hacker</button></Link>
               <Link to="/view-hacker"> <button>View</button> </Link>
            </div>
        </div>
    )
}
