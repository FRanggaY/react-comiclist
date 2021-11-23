import React from 'react';

import styled from 'styled-components';

import Gap from '../atom/gap';

import Tab from '../common/tab-static';

import CardTop from '../card/top';
import CardGenre from '../card/genre';


const Right = styled.div`
    height: max-content;
    position: sticky;
    top: var(--sticky-top-right);

    @media screen and (max-width: 992px){
        padding-left: 6rem;
    }

    @media screen and (max-width: 576px){
        padding-left: 0;
    }

`;

const Tops = styled.div`
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-bottom: 1rem;
`;

const TopHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Aside() {
    return (
        <Right>
            <Gap width={10} height={20} />
            <Tops>
                <TopHead>
                    <h4>Top :</h4>
                </TopHead>

                <Gap width={10} height={20} />

                <Tab/>
                
                <CardTop 
                    img={'https://cdn.myanimelist.net/images/manga/3/227280l.jpg'} 
                    title={'Kage no Jitsuryokusha ni Naritakute'}
                    rank={'1'}
                />
                <CardTop 
                    img={'https://cdn.myanimelist.net/images/manga/4/156638l.jpg?_gl=1*bwn4hi*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk2MDMyNi40LjEuMTYzNjk2MjUxOS42MA..'} 
                    title={'Mob Psycho 100'}
                    rank={'2'}
                />
                <CardTop 
                    img={'https://cdn.myanimelist.net/images/manga/3/210341l.jpg?_gl=1*gsnxap*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1MDkyOC4yLjEuMTYzNjk1MDkyOS41OQ..'} 
                    title={'Jujutsu Kaisen'}
                    rank={'3'}
                />
                <CardTop 
                    img={'https://cdn.myanimelist.net/images/manga/5/207526l.jpg?_gl=1*1a2rsbl*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk2MDMyNi40LjEuMTYzNjk2Mjc3NS4xMw..'} 
                    title={'Tensei shitara Slime Datta Ken'}
                    rank={'4'}
                />
                
            </Tops>
            <CardGenre />

            {/* <div className="genre">
                <div className="heading">
                    <h4>Genre :</h4>
                </div>
                <div className="genre-body">
                    <div className="genres">
                        <div className="genre btn btn-primary">Action</div>
                        <div className="genre btn btn-primary">Isekai</div>
                        <div className="genre btn btn-primary">Adventure</div>
                        <div className="genre btn btn-primary">Reincarnation</div>
                        <div className="genre btn btn-primary">Drama</div>
                        <div className="genre btn btn-primary">School</div>
                    </div>
                </div>
            </div> */}

        </Right>
    )
}

export default Aside;
