import React from 'react';
import styled from 'styled-components';

const TabBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    button{
        width: 100%;
        text-align: center;
        border-bottom: 4px solid var(--color-light);
        padding-bottom: 0.5rem;
        background: transparent;
        font-size: 0.95rem;

        &:hover{
            cursor: pointer;
        }

    }

    .active{
        border-color: var(--color-primary);
    }

`; 

function Tab() {
    return (
        <TabBody>
            <button className="active">Manga</button>
            <button>Manhwa</button>
            <button>Manhua</button>
        </TabBody>
    )
}

export default Tab
