import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Gap from '../atom/gap';

const Left = styled.div`
    height: max-content;
    position: sticky;
    top: var(--sticky-top-left);
    padding-top: 1rem;

    @media screen and (max-width: 1200px){
        width: 5rem;
        z-index:5;
        padding-top: 0;
    }
    @media screen and (max-width: 992px){
        position: fixed;
    }
`;

const SidebarLists = styled.div`
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    @media screen and (max-width: 576px){
        visibility: ${props => props.clickedSidebar?"visible" : "hidden"};
        width: 3rem;
    }

    .active::before{
        content: "";
        display: block;
        width: 0.5rem;
        height: 100%;
        position: absolute;
        background: var(--color-primary);
    }
    .active:first-child{
        border-top-left-radius: var(--card-border-radius);
        overflow: hidden;
    }
    .active:last-child{
        border-bottom-left-radius: var(--card-border-radius);
        overflow: hidden;
    }
`;

const MobileNavButton = styled.button`
    border: 1px solid var(--color-primary);
    background: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    display: none;

    position: relative;

    @media screen and (max-width: 576px){
        position: fixed;
        top: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

const MenuItem = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 3.5rem;
    cursor: pointer;
    translate: all 300ms ease;
    position: relative;

    &:hover{
        background: var(--color-light);

        :first-child{
            border-top-left-radius: var(--card-border-radius);
            border-top-right-radius: var(--card-border-radius);
        }
        :last-child{
            border-bottom-left-radius: var(--card-border-radius);
            border-bottom-right-radius: var(--card-border-radius);
        }

    }

    i{
        font-size: 1.4rem;
        color: var(--color-gray);
        margin-left: 2rem;
        position: relative;
        @media screen and (max-width: 576px){
            font-size: 1.2rem;
            margin-left: 1rem;
        }
    }
    h3{
        margin-left: 1.5rem;
        font-size: 1rem;
        color: var(--color-primary);
        @media screen and (max-width: 1200px){
            display: none;
        }
    }

`;

const MenuModalItem = styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
    cursor: pointer;
    translate: all 300ms ease;
    position: relative;

    &:hover{
        background: var(--color-light);
    }

    i{
        font-size: 1.4rem;
        color: var(--color-gray);
        margin-left: 2rem;
        position: relative;
        @media screen and (max-width: 576px){
            font-size: 1.2rem;
            margin-left: 1rem;
        }
    }
    h3{
        margin-left: 1.5rem;
        font-size: 1rem;
        color: var(--color-primary);
        @media screen and (max-width: 1200px){
            display: none;
        }
    }

`;

const NotifCount = styled.small`
    background: var(--color-danger);
    color: white;
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
`;

const NotifPopup = styled.div`
    position:absolute;
    top:0;
    left: 110%;
    width: 15rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: 0 0 2rem hsl(var(--color-primary), 75%, 60%, 25%);
    z-index: 8;
    display: ${props => props.clickedNotif?"flex" : "none"};

    align-items: start;
    flex-direction: column;

    &::before{
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        display: block;
        position: absolute;
        background: var(--color-white);
        left: -0.6rem;
        transform: rotate(45deg);
    }
`;

function Sidebar() {
    const [clickMobile, setClick] = useState(false);
    const handleMobileClick = () => setClick(!clickMobile);

    const [clickNotif, setNotif] = useState(false);
    const handleNotifClick = () => setNotif(!clickNotif);
    
    return (
        <Left>
            <Gap width={10} height={20} />
            <SidebarLists clickedSidebar={clickMobile}>
                <MenuItem to="/">
                    <span> 
                        <i className="fas fa-home"></i>
                    </span>
                    <h3>Home</h3> 
                </MenuItem>
                <MenuItem to="/bookmark">
                    <span> 
                        <i className="fas fa-bookmark"></i>
                    </span>
                    <h3>Bookmark</h3> 
                </MenuItem>
                <MenuItem to="/list">
                    <span> 
                        <i className="fas fa-book"></i>
                    </span>
                    <h3>List</h3>
                </MenuItem>
                <MenuItem to="/popular">
                    <span> 
                        <i className="fas fa-star"></i>
                    </span>
                    <h3>Popular</h3> 
                </MenuItem>
                <MenuModalItem id="notifications" clickedNotif={clickNotif} onClick={() => handleNotifClick()}>
                    <span> 
                        <i className="fas fa-bell"><NotifCount>9+</NotifCount></i>
                    </span>
                    <h3>Notifications</h3> 

                    <NotifPopup clickedNotif={clickNotif}>
                        <div>
                            <div>
                                <b>New Feature</b> <br/> Testing this <br/>
                                <small className="text-muted">18 Oktober 2021</small>
                            </div>
                            <Gap width={10} height={10} />
                        </div>
                        <div>
                            <div>
                                <b>New Feature 1</b> <br/> sfasfs this <br/>
                                <small className="text-muted">22 Oktober 2021</small>
                            </div>
                            <Gap width={10} height={10} />
                        </div>
                    </NotifPopup>

                </MenuModalItem>
                <MenuItem to="/settings">
                    <span> 
                        <i className="fas fa-cog"></i>
                    </span>
                    <h3>Settings</h3> 
                </MenuItem>
            </SidebarLists>
            <MobileNavButton clickedSidebar={clickMobile} onClick={() => handleMobileClick()}>
                <i className="fas fa-arrow-right"></i>
            </MobileNavButton>
        </Left>
    )
}

export default Sidebar;
