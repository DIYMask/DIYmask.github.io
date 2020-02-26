import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'tutorial', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction 簡介 </a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Pattern Download 紙樣下載</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="tutorial">
                    <a href="#">Tutorial 製作教學 </a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Manual 使用說明</a>
                </Scroll>
            </li>
{/*             <li>
                <Scroll type="id" element="cta">
                    <a href="#">News 有關新聞</a>
                </Scroll>
            </li> */}
        </Scrollspy>
    </nav>
)

export default Nav
