import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  async function load(){
    const response = await getPokemon(query);
    setPokemon(response.data.results);
  }
  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSearch(e){
    e.preventDefault();
    load();
  }
  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={e => setQuery(e.target.value)}/>
        <button>Search for Pokemon</button>
      </form>
      <div className='pokemon-list'>
        {pokemon.map(({ pokemon, type, hp, url_image }, i) => <div className='pokemon' key={pokemon + i}>
          <h1>{pokemon}</h1>
          <p>Type:{type}</p>
          <p>Hit Points:{hp}</p>
          <img src={url_image}/>
        </div>)}
      </div>
    </div>
  );
}

export default App;
