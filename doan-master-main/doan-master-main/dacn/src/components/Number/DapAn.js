import React, { Component } from 'react';

class DapAn extends Component {
    render() {
        return (
            <div>
                <div className="img1" style={{ textAlign: 'center' }}>
                    <img src={this.props.dapan1} style={{ marginRight: '50px', marginBottom: '50px', marginTop: '100px' }} width="100px" height="100px " />
                    <img src={this.props.dapan2} style={{ marginRight: '50px', marginBottom: '50px' }} width="100px" height="100px " />
                    <img src={this.props.dapan3} style={{ marginRight: '50px', marginBottom: '50px' }} width="100px" height="100px " />
                    <img src={this.props.dapan4} style={{ marginRight: '50px', marginBottom: '50px' }} width="100px" height="100px " />
                </div>
                <button className="next1" style={{ backgroundColor: 'rgb(47, 248, 255)', display: 'none', borderRadius: '10px', width: '100px', height: '50px', marginLeft: '800px' }}>NEXT</button>
            </div>
        );
    }
}

export default DapAn;