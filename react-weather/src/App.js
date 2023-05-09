import logo from './logo.svg';
import Form from './components/form'
import Banner from './components/banner'
import NewsLetter from './components/newsLetter'
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Banner />
      <Form />
      <NewsLetter />
    </div>
  );
}

export default App;
