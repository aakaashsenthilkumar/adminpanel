import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

function Header({OpenSidebar}) {
    return (
        <header className='header'>
            <div className = 'menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div classname = 'header-left'>
                <BsSearch className='icon'/>
            </div>
            <div classname = 'header-right'>
                <BsFillBellFill className='icon'/>
                <BsFillEnvelopeFill className='icon'/>
                <BsPersonCircle className='icon'/>
            </div>           
        </header>
    )
}

export default Header