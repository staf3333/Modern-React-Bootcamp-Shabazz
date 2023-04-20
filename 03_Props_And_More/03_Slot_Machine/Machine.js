function getEmoji() {
    // how many symbols?
    let emojiArr = ['🍇', '🍒', '🍊']
    //random number to pick emoji from array (values between 0 and 2)
    let num = Math.floor(Math.random() * 3)
    return emojiArr[num]
}

class Machine extends React.Component {
    render() {
        //s1, s2, s3
        let s1 = getEmoji();
        let s2 = getEmoji();
        let s3 = getEmoji();
        let msg;
        if (s1 === s2 && s2 === s3) {
            msg = <div>
                <p>Congratulations, you won!</p>
            </div>
        } else {
            msg = <div>
                <p>Sorry, you suck ass. Try again</p>
            </div>
        }
        return (
            // three emojis that were randomly generated (should I do random inside or outside... Outside!)
            // message saying whether or not the person one
            //display them all
            //if all the values are equal, give a win message

            //if not, tell them they fucking suck
            <div>
                <p>{s1}{s2}{s3}</p>
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<Machine />, document.getElementById('root'))