import { useState, useEffect } from 'react';

import ShowCard from './ShowCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://api.tvmaze.com/search/shows?';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shows, setShows] = useState([]);

  useEffect(() => {
    searchShows('Batman');
  }, []);

  const searchShows = async (title) => {
    const response = await fetch(`${API_URL}&q=${title}`);
    const data = await response.json();
    setShows(data.map((item) => item.show));
  };

  return (
    <div className='app'>
      <h1>TV Show Library</h1>
      <form
        className='search'
        onSubmit={(e) => {
          e.preventDefault();
          searchShows(searchTerm);
        }}>
        <input
          type='text'
          placeholder='Search for a show'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt='search-icon' />
      </form>
      {shows?.length > 0 ? (
        <div className='container'>
          {shows.map((show) => (
            <ShowCard show={show} key={show.id} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No shows found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
