import React from 'react'


import './Header.css'
import Timer from '../Widgets/Timer/Timer'

const Header = (props) => {
    const getDayOfWeek = () => {
        const date = new Date();
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
    }

    return (
        <header>
            <h1>Make it done mate!</h1>
            <Timer />
            <p>Looks like another {getDayOfWeek()}</p>
        </header>
    )
}

export default Header;