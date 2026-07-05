import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import './navabar.css';
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="main-nav">
            <h3 className='title'>SwiftNotes</h3>
            <button id='button'>+ New Note</button>
            <div className="right">
                <FaRegUserCircle className='user' />
                <IoSettingsOutline className='setting' />
            </div>
        </div>
    )
}

export default Navbar