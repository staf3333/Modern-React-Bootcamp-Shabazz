import React, { Component, useEffect } from 'react';
import './Food.css';
import { useParams, Navigate } from 'react-router-dom';

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
    let { foodName } = useParams();
    const url = `https://source.unsplash.com/1600x900/?${foodName}`;
    // useEffect(() => {
    //     console.log(foodName);
    // }, []);
    return (
        <div className='Food'>
            {/\d/.test(foodName) ? (<Navigate to="/" />) : (
                <div>
                    <h1>I love to eat {foodName}</h1>
                    <img src={url} alt={foodName} />
                </div>
            )}

        </div>
    )
}

export default Food;