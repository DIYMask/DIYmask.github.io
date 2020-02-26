import React from 'react'

import logo from '../assets/images/HKMask_logo.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>HK Mask Manual &#40; Unofficial &#41;   </h1> <br/> <h1>說明書 &#40; 非官方 &#41;</h1>
        <p><a href="http://diymask.co/">HK Mask</a> 為可更換濾芯從而重複使用的自製口罩.</p>
    </header>
)

export default Header
