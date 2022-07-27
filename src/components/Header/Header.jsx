import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";

function Header() {
    return (
    <header>

        <h1>
        <MenuIcon className="menuIcon" />
        Bird App</h1>
        <button className="rateusbutton">
            Rate us
        </button>
    </header>
    );
}


export default Header;