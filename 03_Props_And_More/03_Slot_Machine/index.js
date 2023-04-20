class App extends React.Component {
    render() {
        return (
            // render Machine component with the emoji properties (which will prolly be an array)
            <div>
                <Machine />
                <Machine />
                <Machine />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))