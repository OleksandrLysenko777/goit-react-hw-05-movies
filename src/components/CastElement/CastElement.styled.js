import styled from 'styled-components';

export const Portrait = styled.div`
  max-width: 160px;
  background-color: grey;
  box-shadow: 0px 6px 3px -2px rgba(0, 0, 0, 0.36);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
   & > img {border-radius: 6px;}

  &:hover {
    transform: scale(1.03);
    transform: box-shadow;
    box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.46);
`;

export const Role = styled.div`
  font-size: 12px;
  height: 40px;
  padding: 10px 0;
  margin-bottom: 8px;
`;

export const CastGridItem = styled.li`
  flex-basis: calc((100% - 15px) * 1 / 2);

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 340px) {
    flex-basis: calc((100% - 15px * 2) / 3);
  }
  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 15px * 3) / 4);
  }
  @media screen and (min-width: 620px) {
    flex-basis: calc((100% - 15px * 4) / 5);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 15px * 5) / 6);
  }
  @media screen and (min-width: 968px) {
    flex-basis: calc((100% - 15px * 6) / 7);
  }
  @media screen and (min-width: 1140px) {
    flex-basis: calc((100% - 15px * 7) / 8);
  }
`;
