import React from 'react';
import styled from 'styled-components';

const Popular = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    width: 8rem;
    text-align: center;

    p{
        position: relative;
        bottom: 2rem;
        border: 3px solid var(--color-primary);
        border-top: 0;
        background: var(--color-white);
        border-radius: var(--card-border-radius);
        padding: 1rem;
    }

`;


const PopularPhoto = styled.div`
    width: 6rem;
    height: 10rem;

    img{
        border-radius: 10%;
        width: 100%;
        height: 100%;
    }

`;

function CardPopular({img, title}) {
    return (
        <Popular>
            <PopularPhoto>
                <img src={img} alt="" />
            </PopularPhoto>
            <p>{title}</p>
        </Popular>
    )
}

export default CardPopular
