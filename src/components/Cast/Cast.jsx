import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieCast } from 'services/api';
import CastElement from 'components/CastElement/CastElement';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { CastGrid } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  useEffect(() => {
    const getCast = async () => {
      const response = await getMovieCast(id);
      if (response !== null) {
        setCast([...response]);
      } else {
        setCast([]);
      }
    };
    getCast();
  }, [id]);

  return (
    <Container>
      <div ref={divRef} />
      {cast.length > 0 ? (
        <CastGrid>
          {cast.map(element => {
            return (
              <CastElement
                key={element.id + nanoid()}
                srcImg={element.srcImg}
                name={element.name}
                character={element.character}
              />
            );
          })}
        </CastGrid>
      ) : (
        <div>Cast not found</div>
      )}
    </Container>
  );
};

export default Cast;
