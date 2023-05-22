import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { height: 300, width: 300, backgroundColor: "pink", id: uuidv4() },
                { height: 500, width: 400, backgroundColor: "orange", id: uuidv4() }
            ]
        }
        this.createBox = this.createBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    createBox(box) {
        let newBox = { ...box, id: uuidv4() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }
    removeBox(id) {
        this.setState(state => ({
            boxes: state.boxes.filter(box => box.id !== id)
        }));
    }
    render() {
        return (
            <div>
                <NewBoxForm createBox={this.createBox} />
                {this.state.boxes.map(box => (
                    <Box boxStyle={box} removeBox={this.removeBox} key={box.id} />
                ))}
            </div>
        )
    }
}

export default BoxList;