
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/card';
// import logo from './logo.svg';
// import Menu from './components/menu/menu';
// import Home from './components/home/home';
// import Pokemon from './components/pokemon/pokemon';
// import Tipos from './components/tipos/tipos';
// import Button from './components/button/button';





function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setId] = useState(1);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState('');

  // llamada a la api ( pokemon, tipo y descripcion)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);

        fetch(data.species.url)
          .then(res => res.json())
          .then(speciesData => {
            setPokemonDescription(speciesData.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text);
          });

        setPokemonTypes(data.types.map(type => type.type.name));
      })
      .catch(err => console.log(err));
  }, [pokemonId]);

  // boton anterior
  function prevClick(){
    if(pokemonId === 1){
      setId(1)
    }else{
      setId(pokemonId -1)
    }
  }
  // boton siguiente
  function nextClick(){
  setId(pokemonId +1)
  }

  // aplicacion
  return (
    <div className="App">
      <div className='card-container'>
        <Card
          name={pokemon.name}
          img={pokemon.sprites?.front_default}
          description={pokemonDescription}
          types={pokemonTypes}
          number={pokemon.id}
          prevClick={prevClick}
          nextClick={nextClick}
        />
      </div>
    </div>
  );
}
export default App;
