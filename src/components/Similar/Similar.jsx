import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieSimilar } from 'services/api';
import SimilarElement from 'components/SimilarElement/SimilarElement';
import { Container } from '../SharedLayout/SharedLayout.styled';
import { CastGrid } from '../Cast/Cast.styled';

const Similar = () => {
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  useEffect(() => {
    const getSimilar = async () => {
      const response = await getMovieSimilar(id);
      if (response !== null) {
        setSimilar([...response]);
      } else {
        setSimilar([]);
      }
    };
    getSimilar();
  }, [id]);

  return (
    <Container>
      <div ref={divRef} />
      {similar.length > 0 ? (
        <CastGrid>
          {similar.map(element => {
            return (
              <SimilarElement
                key={element.id + nanoid()}
                srcImg={element.srcImg}
                title={element.title}
                releaseDate={element.releaseDate}
              />
            );
          })}
        </CastGrid>
      ) : (
        <div>Similar movies not found</div>
      )}
    </Container>
  );
};

export default Similar;
