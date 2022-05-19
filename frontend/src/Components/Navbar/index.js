import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

function Navbar() {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    LawBell: Making Justice Accessible
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Dashbaord
                    </NavLink>
                    <NavLink
                        to="/signin" activeStyle={{ color: 'black' }}
                    >
                        Sign In
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>

                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;