class Hello extends React.Component {
    render() {
        console.log(this.props.to);
        return (
            <div>
                <p>Hi {this.props.to}, {this.props.from} says hello!</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));