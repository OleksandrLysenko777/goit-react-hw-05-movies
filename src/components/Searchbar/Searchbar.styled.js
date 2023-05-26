import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0;
  margin-bottom: 20px;
  height: 30px;
  width: 70vw;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  height: 100%;
  width: 320px;
  border-color: white;
  border-radius: 4px;
  outline: none;
  color: #261c09;
  box-shadow: 4px 4px 6px rgba(58, 43, 12, 0.22);
`;

export const Button = styled.button`
  text-align: center;
  height: 100%;
  width: 100px;

  padding: 0 20px;
  background-color: orange;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: inset 3px 6px 16px -8px rgba(249, 243, 232, 0.9),
    inset -2px -2px 8px 1px rgba(77, 57, 19, 0.75),
    4px 4px 6px rgba(58, 43, 12, 0.22);
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: inset 2px 2px 3px rgba(77, 57, 19, 0.75),
      inset -2px -2px 4px rgba(249, 243, 232, 0.6);
  }
`;