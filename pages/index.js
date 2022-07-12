import GetJokeButton from '../components/GetJokeButton';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <GetJokeButton title="Get Button Joke" />
    </div>
  );
}

export default Home;
