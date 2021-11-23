import React from 'react';
// import './section.css';
import styled from 'styled-components';

import Gap from '../atom/gap';

import CardPopular from '../card/popular';
import CardComic from '../card/comic';

const Middle = styled.div`
    padding-left: 1rem;

    @media screen and (max-width: 992px){
        padding-left: 6rem;
    }
    @media screen and (max-width: 576px){
        padding-left: 0;
    }
`;

const Populars = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0.5rem;
`;

const Comics = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media screen and (max-width: 576px){
        flex-direction: column;
        align-content: center;
    }

`;

function Section() {
    return (
        <Middle>
            <Gap width={10} height={20} />
            <Populars>
                <CardPopular 
                    title={'Jujutsu Kaisen'}
                    img={'https://cdn.myanimelist.net/images/manga/3/210341l.jpg?_gl=1*gsnxap*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1MDkyOC4yLjEuMTYzNjk1MDkyOS41OQ..'}
                />
                <CardPopular 
                    title={'One Punch Man'}
                    img={'https://cdn.myanimelist.net/images/manga/3/80661l.jpg?_gl=1*1dl22io*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1NjU3NS4zLjEuMTYzNjk1Njc3Ny4xNQ..'}
                />
                <CardPopular 
                    title={'Overlord'}
                    img={'https://cdn.myanimelist.net/images/manga/3/161407l.jpg'}
                />
                <CardPopular 
                    title={'Berserk Of Gluttony'}
                    img={'https://cdn.myanimelist.net/images/manga/3/212091l.jpg?_gl=1*1mdd0i0*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1NjU3NS4zLjEuMTYzNjk1NjczNi41Ng..'}
                />
            </Populars>

            <Comics>
                <CardComic 
                    title={'Kage no Jitsuryokusha ni Naritakute!'} 
                    category={'Manga'} 
                    img={'https://cdn.myanimelist.net/images/manga/3/227280l.jpg'} 
                    score={'8.96'}/>
                <CardComic 
                    title={'Solo Levelling'} 
                    category={'Manhwa'} 
                    img={'https://cdn.myanimelist.net/images/manga/3/222295l.jpg?_gl=1*1khwg9d*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1NjU3NS4zLjEuMTYzNjk1NjY0NS41NA..'} 
                    score={'8.00'}/>
                <CardComic 
                    title={'Mashle: Magic and Muscles'} 
                    category={'Manga'} 
                    img={'https://cdn.myanimelist.net/images/manga/1/230705l.jpg'} 
                    score={'8.00'}/>
                <CardComic 
                    title={'Noragami'} 
                    category={'Manga'} 
                    img={'https://cdn.myanimelist.net/images/manga/2/90899l.jpg?_gl=1*6mugao*_ga*NTE3MzgzNjIuMTYzNzYzNDk5OQ..*_ga_26FEP9527K*MTYzNzYzNTAwMC4xLjEuMTYzNzYzNTA1Ni40'} 
                    score={'8.96'}/>
                <CardComic 
                    title={'Enen no Shouboutai'} 
                    category={'Manga'} 
                    img={'https://cdn.myanimelist.net/images/manga/3/178996l.jpg?_gl=1*1xyfdes*_ga*NTE3MzgzNjIuMTYzNzYzNDk5OQ..*_ga_26FEP9527K*MTYzNzYzNTAwMC4xLjEuMTYzNzYzNTEyMi41'} 
                    score={'8.96'}/>
            </Comics>

        </Middle>
    )
}

export default Section;
