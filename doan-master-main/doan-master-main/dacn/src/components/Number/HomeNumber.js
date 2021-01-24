import React, { Component } from 'react';
import "./2.css"
import Cauhoi from "./Cauhoi";
class HomeNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
            number: ""
        }
    }
    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    componentDidMount() {
        const presentNumber = this.state.numbers.find(number => number === this.props.match.params.number);
        if (presentNumber) {
            this.setState({
                number: presentNumber
            })
            // this.toSpeak(presentNumber)
        }
        else {
            this.props.history.push("/home-number/one")
        }
    }
    again = () => {
        this.props.history.push("/home-number/one");
        window.location.reload();
    }
    exit = () => {
        this.props.history.push("/chude2");
        window.location.reload();
    }
    render() {
        return (
            <div id="numberplay">
                <div>
                    <h1 className="game-title">Play-Game</h1>
                </div>
                <div>
                    <h1 className="win" style={{ display: 'none', marginTop: '50px' }}>YOU ARE WINER</h1>
                </div>
                <a id="again" onClick={() => this.again()} style={{display: 'none', marginTop: 50, cursor:'pointer'}}>Again</a>
                <a id="exit" onClick={() => this.exit()} style={{display: 'none', marginTop: 50, cursor:'pointer'}}>Exit</a>
                <Cauhoi
                    code={this.state.number}
                />
            </div>
        );
    }
}

export default HomeNumber;