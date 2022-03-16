import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteGallery from './QuoteGallery';

function App() {

  const [ philosopher, setPhilosopher ] = useState("");
  const [ quote, setQuote] = useState();
  const [ author, setAuthor] = useState();
  const [ loading, setLoading] = useState(false);

  const getQuote = (userChoice) => {
    if (userChoice !== "") {
      setLoading(true);
      axios({
        url: `https://api.quotable.io/random?author=${userChoice}`
      }).then((response) => {

        setQuote(response.data.content);
        setAuthor(response.data.author);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        setQuote("Sorry, our database is down as we seek to acquire more wisdom.");
      })
    } 
  }

  useEffect( () => {
    getQuote(philosopher);
  }, [philosopher] )

  const handleChange = (event) => {
    setPhilosopher(event.target.value)
  }

  const handleClick = () => {
    getQuote(philosopher);
  }

  return (
    <div className="App">
      <div className="wrapper">
      <header>
        <h1>Re: Mind</h1>
      </header>

      <div className='flexContainer'>
        <select onChange={handleChange} name="" id="">
          <option value="">Choose Philosopher</option>
          <option value="Aristotle">Aristotle</option>
          <option value="Confucius">Confucius</option>
          <option value="Epictetus">Epictetus</option>
          <option value="Marcus Aurelius">Marcus Aurelius</option>
          <option value="Seneca the Younger">Seneca the Younger</option>
        </select>

        <button onClick={handleClick}>Get Another Quote</button>
      </div>

      <QuoteGallery loading={loading} quote={quote} author={author} />
      </div>
    </div>
  );
}

export default App;
