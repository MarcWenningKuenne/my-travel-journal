import React from "react"

function Header() {
    const icon = require("../img/icon.png")

    return (
        <header>
            <img src={icon}/>
            <h1>my travel journal.</h1>
        </header>
    )
}

export default Header