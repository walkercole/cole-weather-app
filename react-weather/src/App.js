import logo from './logo.svg';
import Form from './components/form'
import Banner from './components/banner'
import NewsLetter from './components/newsLetter'
import Stack from './components/stack'
import Hero from './components/hero'
import Weather from './components/weather'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Banner />
      <Hero />
      <Form />
      {/* <Weather /> */}
      <Stack />
      <NewsLetter />
    </div>
  );
}

export default App;
