class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend
                    name="Frieda"
                    hobbies={['Drawing', 'Painting', 'Hooping']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))