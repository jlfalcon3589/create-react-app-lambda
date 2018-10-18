import React from 'react'

export default class itemSearch extends React.Component {
    render() {
        const { name, id } = this.props;
        return (
            <li key={id} style={{ padding: '10px' }}>{name}<button>Agregar</button></li>
        );
    }
}

