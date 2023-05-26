import React from 'react';
import Markdown from 'marked-react';
import { ReviewLi } from './ReviewsElement.styled';
import parse from 'html-react-parser';
const ReviewsElement = ({ author, content }) => {
  const parsed = parse(content);
  return (
    <ReviewLi>
      <h4>Author: {author}</h4>
      {content.includes('<em>') ? (
        <p>{parsed}</p>
      ) : (
        <Markdown>{content}</Markdown>
      )}
    </ReviewLi>
  );
};
export default ReviewsElement;
