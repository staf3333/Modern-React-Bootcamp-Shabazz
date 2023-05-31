import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            deck: null
        }
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
        this.setState({
            deck: deck.data
        });
    }
    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            //make request using deck id
            let cardUrl = `${API_BASE_URL}/${id}/draw/?count=1`
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No cards remaining!");
            }
            let card = cardRes.data.cards[0];
            this.setState(state => ({
                cards: [
                    ...state.cards,
                    {
                        id: card.code,
                        img: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (err) {
            alert(err);
        }
        //     let response = await axios.get(url);
        //     console.log(response.data);
        //set state using new card info from api
    }
    render() {
        const cards = this.state.cards.map(card => (
            <Card key={card.id} imgSrc={card.img} alt={card.name} />
        ))
        return (
            <div className='Deck'>
                <h1 className='Deck-title'>◆ Card Dealer ◆</h1>
                <h2 className='Deck-title subtitle'>◆ A little demo made with react ◆</h2>
                <button className='Deck-btn' onClick={this.getCard}>Get Card!</button>
                <div className='Deck-cardarea'>
                    {cards}
                </div>

            </div>
        )
    }
}

export default Deck;