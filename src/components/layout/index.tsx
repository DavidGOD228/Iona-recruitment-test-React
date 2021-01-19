import React from 'react';
import {PagesNames} from '../../constants';
import {Container} from 'react-bootstrap';

// Layout wraps all the page into the container with pageName
export function Layout(props) {
    const pageName = PagesNames[props.name];

    return (
        <>
            <Container>
                <h1>{pageName}</h1>
                <div>
                    {props.children}
                </div>
            </Container>
        </>
    );
}