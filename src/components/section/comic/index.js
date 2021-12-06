import React, { Component} from 'react';
import styled from 'styled-components';

import Gap from '../../atom/gap';


const Middle = styled.div`
    padding-left: 1rem;

    @media screen and (max-width: 992px){
        padding-left: 6rem;
    }
    @media screen and (max-width: 576px){
        padding-left: 0;
    }
`;

const ComicDetail = styled.div`
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

`;


const ComicDetailHead = styled.div`
display: flex;

gap: 1rem;

div{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    font-size: 1rem;
    font-weight: bold;
        border-radius: 0.4rem;
    }

    span{
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--color-gray);
        border-radius: 50%;
    }

    @media screen and (max-width: 576px){
        flex-wrap: wrap;
    }
`;

const ComicDetailHeadImg = styled.div`
    img{
        width: 10rem;
        height: 15rem;
        border-radius: var(--card-border-radius);
    }
`;

const ComicDetailHeadLink = styled.div`  
`;

const ComicDetailHeadDesc = styled.div`
    span{
        font-weight: bold;
    }
`;

const ComicDetailScore = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    text-align: center;

    div{
        background: var(--color-primary);
        color: white;
    }
    span{
        font-size: 2rem;
        border: 2px solid var(--color-primary);
    }
`;

const ComicDetailHref = styled.a`
    color: var(--color-primary);

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;


class ComicSection extends Component {
    render() {
        return (
            <Middle>
                <Gap width={10} height={35} />
                <div>
                    <ComicDetail>
                        <ComicDetailHead>
                            <ComicDetailHeadImg>
                                <img src="https://cdn.myanimelist.net/images/manga/3/210341l.jpg?_gl=1*gsnxap*_ga*MjE0Mjk4MTMzNS4xNjM2OTQxNzY0*_ga_26FEP9527K*MTYzNjk1MDkyOC4yLjEuMTYzNjk1MDkyOS41OQ.." alt="" />
                            </ComicDetailHeadImg>
                            <ComicDetailHeadLink>
                                <ComicDetailHref>Add to Bookmark</ComicDetailHref>     
                            </ComicDetailHeadLink>
                        </ComicDetailHead>
                        <Gap width={10} height={20} />
                        <ComicDetailHeadDesc>
                            <h3>Jujutsu Kaisen</h3>
                            <p className="text-muted"><span>Alternative Titles :</span> Sorcery Fight</p>
                            
                            <Gap width={10} height={10} />

                            <ComicDetailScore>
                                <div>SCORE</div>
                                <span>8.55</span>
                            </ComicDetailScore>

                            <Gap width={10} height={10} />

                            <h4>Information</h4>
                            <p className="text-muted"><span>Genres :</span> Action, Fantasy, Supernatural</p>
                            <p className="text-muted"><span>Type :</span> Manga</p>
                            <p className="text-muted"><span>Published :</span> Mar 5, 2018 to ?</p>
                        </ComicDetailHeadDesc>
                        
                    </ComicDetail>
                    <Gap width={10} height={10} />
                    <ComicDetail>
                        <p>
                            [Written by MAL Rewrite] Source : <a target="_blank" rel="noreferrer" href="https://myanimelist.net/manga/113138/jujutsu_kaisen">MyAnimelist/Jujutsu Kaisen</a>
                        </p>
                    </ComicDetail>
                </div>
                
    
            </Middle>
        )
    }
}

export default ComicSection;
