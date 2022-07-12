import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [value, setValue] = useState('Get Joke');
  const [data, setData] = useState(0);
  const handleClick = () => {
    if (value === 'Get Joke') {
      getJoke().then((response) => setData(response));
      setValue('Get Punchline');
    } else if (value === 'Get Punchline') {
      setValue('Get Another Joke');
    } else if (value === 'Get Another Joke') {
      setData(0);
      getJoke().then((response) => setData(response));
      setValue('Get Punchline');
    }
  };
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h2>{value === 'Get Punchline' ? data.setup : data.delivery}</h2>
        <button type="button" onClick={handleClick}>
          {value}
        </button>
      </div>
    </>
  );
}

export default Home;
