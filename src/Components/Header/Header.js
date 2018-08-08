import React from 'react'


import './Header.css'
import Timer from '../Widgets/Timer/Timer'

const Header = (props) => {

    return (
        <header>
            <h1>Make it done mate!</h1>
            <Timer />
            <p>Looks like another Wednesday</p>
        </header>
    )
}

export default Header;