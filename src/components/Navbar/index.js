import React from 'react';
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavLinks,NavItem, NavMenu,NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'

const NavBar = ()=>{
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Aklyny</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover">Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/signup">Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default NavBar;