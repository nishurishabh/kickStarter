import React from 'react';
import {Container} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

export default  (props) => {
    return <Container> <head>
        <link rel="stylesheet"
         href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </head>
        <Header />
        {props.children}
        <h1>Footer</h1>
    </Container>;
};