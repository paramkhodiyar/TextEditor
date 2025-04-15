import React from "react";
import "../styles/header.css";
function Header() {
    return (
        <>
            <div class="container">
                <nav class="navbar">
                    <a href="#home" class="nav-link">Home</a>
                    <span class="divider">|</span>
                    <a href="#writer" class="nav-link">Writer</a>
                </nav>
            </div>
        </>
    )
}
export default Header;