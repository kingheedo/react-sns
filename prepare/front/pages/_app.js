    import React from 'react';
    import PropTypes from 'prop-types';
    import Head from 'next/head';
    import 'bootstrap/dist/css/bootstrap.css'
    import wrapper from '../store/configureStore'
    import withReduxSaga from 'next-redux-saga'
    const NodeBird = ({Component}) => {
        return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>NodeBird</title>
                </Head>
                <Component/>
            </>
        )
    }
    NodeBird.proptypes = {
        Component :PropTypes.elementType.isRequired
    }

    export default wrapper.withRedux(withReduxSaga(NodeBird));
    