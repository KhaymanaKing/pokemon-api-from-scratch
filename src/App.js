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
      <header className='App-header'>
        <span>Search Pokemon by Name</span>
        <form onSubmit={handleSearch}>
          <input onChange={e => setQuery(e.target.value)}/>
          <button>Search for Pokemon</button>
        </form>
      </header>
      <div className='pokemon-list'>
        {pokemon.map(({ 
          pokemon, 
          type_1, 
          type_2, hp, 
          url_image, 
          attack, 
          defense, 
          ability_1, 
          ability_2,
          ability_hidden,
        }, i) => <div className='pokemon' key={pokemon + i}>
          <h2>{pokemon}</h2>
          <p>Types: {type_1}, {type_2}</p>
          <p>Hit Points:{hp}</p>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>Ability 1: {ability_1}</p>
          <p>Ability 2: {ability_2}</p>
          <p>Hidden Move: {ability_hidden}</p>
          <img src={url_image}/>
        </div>)}
      </div>
    </div>
  );
}

export default App;
