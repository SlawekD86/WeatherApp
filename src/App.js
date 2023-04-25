import WeatherBox from './components/WeatherBox/WeatherBox';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import React from 'react';

const App = () => {
console.log(process.env.REACT_APP_API_KEY)
  return (
    <Container>
      <Header />
      <WeatherBox />
    </Container>
  );
}

export default App;
