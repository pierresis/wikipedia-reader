import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitRandom = this.handleSubmitRandom.bind(this);
    }
    
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //     console.log("ok");
    // }

    handleSubmit(event) {
        event.preventDefault();
        console.log("ok");
    }

    handleSubmitRandom(event) {
        const random = "https://en.wikipedia.org/wiki/Special:Random";
        console.log(random);
    }

	render() {
		return (
			<div>
                <h1 class="main-title">Hello World</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input placeholder="Search" type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button
                    value="Random Article"
                    className="btn btn-submit"
                    onClick={this.handleSubmitRandom}>
                </button>
			</div>
		);
	}
}

export default App;
