import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('pi');

  async function load(){
    const { data : { results } } = await getPokemon(query);
    setPokemon(results);
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
        {pokemon.map(({ name, type, hp, pokedex }, i) => <div key={name + i}>
          <p>{name}</p>
          <p>{type}</p>
          <p>{hp}</p>
          <href>{pokedex}</href>
        </div>)}
      </div>
    </div>
  );
}

export default App;
