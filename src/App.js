import React, { Fragment } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((users) => {
                console.log(users);
                this.setState({ robots: users });
            })
    }

    render() {

        const filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <SearchBar searchChange={this.onSearchChange} />
                <h1>Robo Friends</h1>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filtered} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }

}

export default App;
