import React, { Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Gap from '../../atom/gap';

import ActionType from '../../../redux/reducer/globalActionType';


const Middle = styled.div`
    padding-left: 1rem;

    @media screen and (max-width: 992px){
        padding-left: 6rem;
    }
    @media screen and (max-width: 576px){
        padding-left: 0;
    }
`;

const ThemeCustomize = styled.div`
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);

    display: flex;

    .active{
        border: 2px solid var(--color-primary);
    }
    @media screen and (max-width: 992px){
        flex-direction: column;
    }
    // @media screen and (max-width: 576px){
    //     padding-left: 0;
    // }

`;
const ThemeCustomizeHead = styled.div`
    width: 20rem;
`;
const ThemeCustomizeBody = styled.div`
    display: flex;

    gap: 1rem;

    div{
        padding: var(--card-padding);
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.4rem;
    }

    span{
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--color-gray);
        border-radius: 50%;
        margin-right: 1rem;
    }

`;

const LightButton = styled.div`
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.19);
    background: white;
    color: black;
    width: 20rem;
    height: 10rem;

    &:hover{
        cursor:pointer;
    }
`;
const DarkButton = styled.div`
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.19);
    background: black;
    color: white;
    width: 20rem;
    height: 10rem;

    &:hover{
        cursor:pointer;
    }
`;



class SettingsSection extends Component {
    render() {
        console.log(this.props);
        return (
            <Middle>
                <Gap width={10} height={35} />
                <div>
                    <ThemeCustomize>
                        <ThemeCustomizeHead>
                            <h3>Theme</h3>
                            <p className="text-muted">You can change your theme here. <br/> Note : This theme will reset automatically when reloading.</p>
                        </ThemeCustomizeHead>
                        <Gap width={10} height={20} />
                        <ThemeCustomizeBody>
                            <LightButton onClick={this.props.changeLightTheme}>
                                <span></span>
                                <h5>Light</h5>
                            </LightButton>
                            <DarkButton onClick={this.props.changeDarkTheme}>
                                <span></span>
                                <h5>Dark</h5>
                            </DarkButton>
                        </ThemeCustomizeBody>
                    </ThemeCustomize>
                </div>
                
    
            </Middle>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        changeDarkTheme: ()=> dispatch({type: ActionType.CHANGE_DARK_THEME}),
        changeLightTheme: ()=> dispatch({type: ActionType.CHANGE_LIGHT_THEME}),
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(SettingsSection);
