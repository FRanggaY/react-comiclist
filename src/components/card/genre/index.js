import React from 'react';
import styled from 'styled-components';

import Gap from '../../atom/gap';

const Genre = styled.div`
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
`;

const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const GenreButton = styled.a`
    background: var(--color-primary);
    margin: 0.3rem 0.2rem;
`;

function CardGenre() {
    return (
        <Genre>
            <div>
                <h4>Genre :</h4>
            </div>
            <Gap width={10} height={20} />
            <div>
                <Genres>
                    <GenreButton href="test" className="btn btn-primary">Action</GenreButton>
                    <GenreButton href="test" className="btn btn-primary">Isekai</GenreButton>
                    <GenreButton href="test" className="btn btn-primary">Adventure</GenreButton>
                    <GenreButton href="test" className="btn btn-primary">Reincarnation</GenreButton>
                    <GenreButton href="test" className="btn btn-primary">Drama</GenreButton>
                    <GenreButton href="test" className="btn btn-primary">School</GenreButton>
                </Genres>
            </div>
        </Genre>
    )
}

export default CardGenre;
