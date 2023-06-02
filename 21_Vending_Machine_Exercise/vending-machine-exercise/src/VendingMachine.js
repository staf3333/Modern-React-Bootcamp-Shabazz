import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Soda from './Soda';
import Apples from './Apples';
import Chips from './Chips';
import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div className='VendingMachine'>
                <h1>VendingMachine</h1>
                <Link to="/soda">Soda</Link>
                <Link to="/apples">Apples</Link>
                <Link to="/chips">Chips</Link>
            </div>
        )
    }
}

export default VendingMachine;