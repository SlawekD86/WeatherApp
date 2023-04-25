import WeatherBox from './components/WeatherBox/WeatherBox';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import React from 'react';

const App = () => {

  return (
    <Container>
      <Header />
      <WeatherBox />
    </Container>
  );
}

export default App;
