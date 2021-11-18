import React from 'react';
import styled from 'styled-components';

import Gap from '../../atom/gap';

const SearchBar = styled.div`
    background: var(--color-light);
    border-radius: var(--border-radius);
    padding: 0.1rem 0.7rem;
    display: -ms-flexbox;
    justify-content: center;
    align-items: center;
`;
const SearchInput = styled.input`
    padding: 1rem 0;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--color-dark);

    ::placeholder {
        color: var(--color-gray);
    }
`;


function Search() {
    return (
        <SearchBar>
            
            <i className="fas fa-search"><Gap width={30} height={0} /></i>
            
            <SearchInput placeholder="Search for something"/>
            <button className="btn btn-primary">Explore</button>
         </SearchBar>
    )
}

export default Search;
