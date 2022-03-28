import React, { Fragment } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import robotData from './robots';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robotData,
            searchfield: ''
        }
    }

    onSearchChange = (e)=>{
        this.setState({searchfield: e.target.value});
    }

    render() {

        const filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <SearchBar searchChange={this.onSearchChange} />
                <h1>Robo Friends</h1>
                <CardList robots={filtered} />
            </div>
        )
    }

}

export default App;
