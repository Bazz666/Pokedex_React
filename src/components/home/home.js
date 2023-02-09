import React from 'react';
import Pikachu from "../../components/assets/pikachu.png"
import "./home.css";
function Home() {
    return(
    <div>
        <h1> Pokedex Retro</h1>
        <img className='principal' src={Pikachu} alt="Pikachu"></img>
        <h2>Bienvenido a la version Beta</h2>

    </div>)
}

export default Home