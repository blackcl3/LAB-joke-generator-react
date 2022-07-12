import { useState } from 'react';
import PropTypes from 'prop-types';
import getJoke from '../api/jokeData';

const GetJokeButton = ({ title }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0);
  const handleClick = () => {
    getJoke().then((response) => setValue(response));
  };
  return (
    <>
      <h2>{value.setup}</h2>
      <button type="button" onClick={handleClick}>
        {title}
      </button>
    </>
  );
};

GetJokeButton.propTypes = {
  title: PropTypes.string,
};

GetJokeButton.defaultProps = {
  title: 'Get Joke',
};

export default GetJokeButton;
