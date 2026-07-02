import React from 'react'
import { LuPencil } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import './card.css'

const Card = () => {
    return (
        <div className="Card">
            <div className="date-time">
                <p>Date : 15 Aug 2026 | 11:30 AM</p>
                
            </div>
            <div className="heading">
                <h2>Project Q3 Marketing Strategy</h2>
            </div>
            <div className="para">
                <p>Key Objectives:</p><br />
                <ol>
                    <li>
                        Launch new social media campaign by sept 1.
                    </li>
                    <li>Analyze Q2 competitor performance.</li>
                    <li>Finalize influencer contracts.....</li>
                </ol>
            </div>
            <div className="tags"><p>Tags:  #marketing, #strategy</p></div>
            <hr />
            <div className="bottom">
                <div className="bottom-left">
                    <button><LuPencil /></button>
                    <button><IoShareSocialOutline /></button>
                    <button><FaRegStar /></button>
                    <button><RiDeleteBin6Line /></button>
                </div>
                <div className="bottom-right">
                    <p>Created at : 15 Aug 2026 | 11:30 AM</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Card