import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";

function Header({toggleGallary}) {
    return (
    <header>

        <h1>
        <MenuIcon className="menuIcon" onClick={toggleGallary} />
        Bird App</h1>
        <button className="rateusbutton">
            Rate us
        </button>
    </header>
    );
}


export default Header;