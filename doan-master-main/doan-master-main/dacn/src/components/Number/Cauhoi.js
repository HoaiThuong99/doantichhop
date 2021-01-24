import React, { Component } from 'react';

class Cauhoi extends Component {

    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    displayElement = () => {
        switch (this.props.code) {
            case "one":
                return (
                    <a onclick={this.toSpeak("one")}>
                        <img className="h1" src="/numberImage/one.JPG" alt="" style={{ display: 'block', height: '100px' }} />
                    </a>
                )
            case "six":
                return (
                    <a onclick={this.toSpeak("six")}>
                        <img className="h2" src="/numberImage/six.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "five":
                return (
                    <a onclick={this.toSpeak("five")}>
                        <img className="h3" src="/numberImage/five.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "two":
                return (
                    <a onclick={this.toSpeak("two")}>
                        <img className="h4" src="/numberImage/two.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "three":
                return (
                    <a onclick={this.toSpeak("three")}>
                        <img className="h5" src="/numberImage/three.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "nine":
                return (
                    <a onclick={this.toSpeak("nine")}>
                        <img className="h6" src="/numberImage/nine.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "four":
                return (
                    <a onclick={this.toSpeak("four")}>
                        <img className="h7" src="/numberImage/four.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            case "seven":
                return (
                    <a onclick={this.toSpeak("seven")}>
                        <img className="h8" src="/numberImage/seven.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
            default:
                return (
                    <a onclick={this.toSpeak("eight")}>
                        <img className="h9" src="/numberImage/eight.JPG" alt="" style={{ display: 'none' }} />
                    </a>
                )
        }
    }
    render() {
        return (
            <div className="number">
                {this.displayElement()}
            </div>
        );
    }
}

export default Cauhoi;