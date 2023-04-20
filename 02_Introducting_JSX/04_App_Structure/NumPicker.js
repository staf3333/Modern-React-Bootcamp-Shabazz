function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    //num = getNum();
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = <div>
                <h2>CONGRATS YOU WIN!</h2>
                <img src="https://media0.giphy.com/media/z8XtwKGIRQSBCmU4sW/200w.gif?cid=6c09b952adzx9aj8lcw6i12nm2dvrm0eojoidqcg3xrnqpjo&rid=200w.gif&ct=g" />
            </div>
        } else {
            msg = <p>Sorry you lose...</p>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        )
    }
}


