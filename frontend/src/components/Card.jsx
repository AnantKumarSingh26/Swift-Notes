import React from 'react'
import { LuPencil } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import './card.css'

const Card = ({ cardData }) => {
    return (
        <div className="Card">

            <div className="date-time">
                <p>{cardData.dateTime}</p>

            </div>
            <div className="heading">
                <h2>{cardData.title}</h2>
            </div>
            <div className="para">
                <p>Key Objectives:</p><br />
                <ol>
                    {cardData.objectives.map((obj, index) => (
                        <li key={index}>{obj}</li>
                    ))}
                </ol>
            </div>
            <div className="tags">
                <p>Tags: {cardData.tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: '5px' }}>{tag}</span>
                ))}</p>
            </div>
            <hr />
            <div className="bottom">
                <div className="bottom-left">
                    <button><LuPencil /></button>
                    <button><IoShareSocialOutline /></button>
                    <button><FaRegStar /></button>
                    <button><RiDeleteBin6Line /></button>
                </div>
                <div className="bottom-right">
                    <p>Created at : {cardData.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default Card