import React, { Component } from 'react';
import './Pokecard.css'



class Pokecard extends Component {
    render() {
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`

        //destructure pokemon passed in 
        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;