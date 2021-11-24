import {createGlobalStyle} from 'styled-components';

export const DarkGlobalStyles = createGlobalStyle`
    body{
        background-color: #363537;
        transition: all .5s ease;
    }
    Nav{
        background-color: var(--color-dark);
        color: white;
    }

`
export const LightGlobalStyles = createGlobalStyle`
    body{
        background-color: #E2E2E2;
        transition: all .5s ease;
    }
    Nav{
        background-color: var(--color-white);
        color: black;
    }

`