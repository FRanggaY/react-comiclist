import React from 'react';
import styled from 'styled-components';

const Comic = styled.div`
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    width: 15rem; 
    margin: 0.7rem 0.4rem;
    font-size: 1rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;

    gap: 1rem;

    @media screen and (max-width: 576px){
        width: auto;
    }

`;

const ComicHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    font-size: 1rem;

    a{
        &:hover{
            text-decoration: underline;
        }
    }

`;
const ComicInfo = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--color-gray);
    border-radius: var(--card-border-radius);
    padding: 0.1rem 1rem;
    color: var(--color-white);
    font-size: 0.8rem;
    div{
        i{
            cursor:pointer;
        }
    }
`;
const ComicBody = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.8rem;


    img{
        width: 10rem;
        height: 15rem;
        overflow: hidden;
        border-radius: var(--card-border-radius);
    }
`;

const ComicDesc = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.2rem;
    font-size: 0.8rem;
`;

const ComicDescText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
`;


function CardComic({title, category, img, score}) {
    return (
        <Comic>
            <ComicHead>
                <a href="test">{title}</a>
            </ComicHead>
            <ComicInfo>
                <div>{category}</div>
                <div><i className="fas fa-bookmark"></i></div>
            </ComicInfo>
            <ComicBody>
                <img src={img} alt="" />
                <ComicDesc>
                    <ComicDescText>
                        <i className="fa fa-star"></i> {score}
                    </ComicDescText>
                
                </ComicDesc>
            </ComicBody>
        </Comic>
    )
}

export default CardComic;
