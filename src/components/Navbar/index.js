import React from 'react';
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavLinks,NavItem, NavMenu,NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle})=>{
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Aklyny</NavLogo>
                    <MobileIcon onClick={toggle}>
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