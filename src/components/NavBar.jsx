import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* Logo */}
            <h1 className="logo">
                <span className="logo1">Study Together</span>
                {" | "}
                <span className="logo2">لندرس معًا</span>
            </h1>

            {/* Hamburger Menu */}
            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Links */}
            <ul className={menuOpen ? "NavBar-list active" : "NavBar-list"}>

                <li>
                    <NavLink
                        to="/"
                        end
                        onClick={() => setMenuOpen(false)}
                    >
                        الرئيسية
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Subjects"
                        onClick={() => setMenuOpen(false)}
                    >
                        المواد
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Tools"
                        onClick={() => setMenuOpen(false)}
                    >
                        الوسائل
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/About"
                        onClick={() => setMenuOpen(false)}
                    >
                        من نحن
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        اتصل بنا
                    </NavLink>
                </li>

                {/* Start Button */}
                <li>
                    <Link
                        to="/Subjects"
                        className="start-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        ابدأ الدراسة ✨
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default NavBar;