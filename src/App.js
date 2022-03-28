import React, { Fragment } from 'react';
import Card from './Card';
import data from './robots';

export default function App() {
    return (
        <Fragment>
            <h1>Robots</h1>
            <Card id={data[0].id} name={data[0].name} username={data[0].username} email={data[0].username} />
            <Card id={data[1].id} name={data[1].name} username={data[1].username} email={data[1].username} />
            <Card id={data[2].id} name={data[2].name} username={data[2].username} email={data[2].username} />
        </Fragment>
    )
}
