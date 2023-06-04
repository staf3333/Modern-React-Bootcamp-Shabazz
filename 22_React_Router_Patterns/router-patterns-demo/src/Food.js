import React, { Component } from 'react';
import './Food.css';
import { useParams, useEffect } from 'react-router-dom';

// class Food extends Component {
//     render() {
//         const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
//         console.log(this.props);
//         return (
//             <div className='Food'>
//                 <h1>I love to eat {this.props.name}</h1>
//                 <img src={url} alt={this.props.name} />
//             </div>
//         )
//     }
// }

// export default withRouter(Food);

const Food = (props) => {
    let { name } = useParams();
    useEffect(() => {
        console.log(name);
    }, []);
    return (
        <div className='Food'>
            <h1>I love to eat {this.props.name}</h1>
            <img src={url} alt={this.props.name} />
        </div>
    )
}

export default Food;