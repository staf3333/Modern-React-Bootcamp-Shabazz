class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p>Hi {this.props.to}, {this.props.from} says hello {bangs}</p>
                <img src={this.props.img} />
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));