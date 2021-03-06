import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: start;
`;
const TopCategory = styled.div`
    img{
        width: 6rem;
        height: 100%;
        border-radius: var(--card-border-radius);

        @media screen and (max-width: 576px){
            width: 5rem;
            height: 80%;
        }

    }
`;
const TopCategoryBody = styled.div`
    p{
        font-size: 0.8rem;
    }
`;



function CardTop({img, title, rank}) {
    return (
        <Top>
            <TopCategory>
                <img src={img} alt="" />
            </TopCategory>
            <TopCategoryBody>
                <h5>{title}</h5>
                <p className="text-muted">Rank {rank}</p>
             </TopCategoryBody>
        </Top>
    )
}

export default CardTop;
