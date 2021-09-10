import React, { Component } from 'react';

class Recordatory extends Component {
    render() {
            return (
        <div className="recordatorio">
            <h3>Selección anterior: {this.props.lastSelection}</h3>
            <h4>Historail de opciones elegidas: </h4>
            <ul>{this.props.historical}</ul>
        </div>
        )
    }
}

export default Recordatory;
