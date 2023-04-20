class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 6
    }

    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p>Hi {this.props.to}, {this.props.from} says hello {bangs}</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));