import React, { Component } from 'react';
import './UserOutput.css';

export class UserOutput extends Component {
    render(){
        return (
            <div className="card">
                <p onClick={this.props.click} className="main">Username is: {this.props.username}</p>
                <p className="secondary">Username is: {this.props.username}</p>
            </div>
        )
    }
}

export default UserOutput;