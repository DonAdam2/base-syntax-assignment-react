import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: ['Bassant', 'Adam', 'Max']
    };

    clickHandler = () => {
      this.setState({
          username: [this.state.username[0], this.state.username[1], 'Smsma']
      })
    };

    changeNameHandler = (event) => {
        this.setState({
            username: [this.state.username[0], event.target.value, this.state.username[2]]
        })
    };

    render() {
        return (
            <div className="App container">
                <UserInput changeName={this.changeNameHandler} username={this.state.username[1]}/>
                <UserOutput username={this.state.username[0]}/>
                <UserOutput username={this.state.username[1]}/>
                <UserOutput username={this.state.username[2]} click={this.clickHandler}/>
            </div>
        );
    }
}

export default App;
