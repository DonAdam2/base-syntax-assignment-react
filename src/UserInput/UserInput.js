import React, { Component } from 'react';


export class UserInput extends Component {
    render(){
        const style = {
            border: '1px solid green',
            padding: '5px'
        };

        return (<input style={style} type="text" onChange={this.props.changeName} value={this.props.username}/>)
    }
}

export default UserInput;