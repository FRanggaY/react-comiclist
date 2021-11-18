import React, {useState} from 'react';
import styled from 'styled-components';


import Search from '../common/search';

import Gap from '../atom/gap';

/* Navbar */
const Nav = styled.nav`
    width: 100%;
    background: var(--color-white);
    padding: 0.7rem 0;
    position: fixed;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.19);

`;

/* Navbar Container */
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8rem;


    @media screen and (max-width: 992px){
        padding: 0 1rem;
    }

`;
/* End Navbar Container */
const NavProfile = styled.div`
    display: flex;
    align-items: center;
`;


const MobileNavButton = styled.button`
    border: none;
    background: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    display: none;

    position: relative;

    &::before, 
    &::after{
        content: "";
        background: black;
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before{
        top: ${(props) => (props.clicked ? "1.5" : "1rem")};
        transform:${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }

    &::after{
        top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
        transform:${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
    @media screen and (max-width: 576px){
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

const NavList = styled.div`
    display: flex;
    @media screen and (max-width: 576px){
        display: flex;
        opacity: ${props => props.clicked?"1" : "0"};
        transition: all 0.5s ease;
        flex-direction: column;
        background: var(--color-white);
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.19);
        shadow: 1rem;
        padding: 1rem;
        position: fixed;
        justify-content: start;
        right: 0;
        top: 55px;
        width: 100%;
        text-align: center;
        overflow: hidden;
        align-items: center;
    }
`;

/* END Navbar */

function Navbar() {
    const [clickMobile, setClick] = useState(false);
    const handleMobileClick = () => setClick(!clickMobile);
    return (
        <Nav>
            <NavContainer>
                <h2>
                    ComicList
                </h2>

                <MobileNavButton clicked={clickMobile} onClick={() => handleMobileClick()} ></MobileNavButton>

                <NavList clicked={clickMobile} >
                    <Search />
                    <Gap width={20} height={20} />
                    <NavProfile>
                        <div className="profile-photo">
                            <img src="https://placeimg.com/640/480/any" alt="" />
                        </div>
                    </NavProfile>
                </NavList>

            </NavContainer>
        </Nav>
    )
}

export default Navbar;
