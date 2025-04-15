import React from "react";
import "../styles/header.css";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
function Header() {
    return (
        <>
            <div className="container">
                <span className="logocontainer"><h1>Vento</h1></span>
                <nav className="navbar">
                    <Link href="/landingpage" className="nav-link">Home</Link>
                    <span className="divider">|</span>
                    <Link href="/writingpage" className="nav-link">Writer</Link>
                </nav>
                <span className="options-menu" ><IoMenu /><FaUser style={{marginLeft:"5px"}}/></span>

            </div>
        
        </>
    )
}
export default Header;