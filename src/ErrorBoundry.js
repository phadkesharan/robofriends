import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }

    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Opps Something went wrong!</h1>
        }
        else {
            return this.props.children;
        }
    }
}
