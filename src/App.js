// create your App component here
import React, { Component, Fragment } from 'react'

import AstroContainer from './AstroContainer'
export default class App extends Component {

    state = {
        astros: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => {
                const astros = json.people
                this.setState({ astros })
            })
    }

    render() {
        console.log(this.state.astros)
        return (
            <div>
                <AstroContainer astros={this.state.astros} />
            </div>
        )
    }
}