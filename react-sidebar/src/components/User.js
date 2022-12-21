import React from 'react';
import Userpic from './iconsImages/userpic.png'
import * as FaIcons from "react-icons/fa"

export const User = (props) => (
    <div className='user-container'>
        <div className='notice'>
            <FaIcons.FaRegEnvelope size={35}/>
        </div>
        <div className='userinfo'>
            <img className='userpic' src={Userpic} alt="User avatar"/>
            Максим Добжанский
        </div>
    </div>
)
