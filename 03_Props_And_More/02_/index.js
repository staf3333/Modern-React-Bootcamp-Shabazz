class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1680462155279-4d73bdbf46ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <Hello
                    to="Britney"
                    from="Adele"
                    bangs={4}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));