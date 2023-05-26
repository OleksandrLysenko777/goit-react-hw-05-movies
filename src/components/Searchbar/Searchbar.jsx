import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './Searchbar.styled';

const Searchbar = ({ searcher }) => {
  const [filter, setFilter] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    searcher(filter);
    setFilter('');
  };
  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Input
        type="search"
        name="query"
        value={filter}
        placeholder="Enter a movie title"
        onChange={event => handleChange(event)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

Searchbar.propTypes = {
  searcher: PropTypes.func.isRequired,
};

export default Searchbar;
