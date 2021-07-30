    import React from 'react';
    import PropTypes from 'prop-types';
    import Head from 'next/head';
    import 'bootstrap/dist/css/bootstrap.css'
    import wrapper from '../store/configureStore'
  
    const NodeBird = ({Component}) => {
        return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>트위터</title>
                </Head>
                <Component/>
            </>
        )
    }
    NodeBird.proptypes = {
        Component :PropTypes.elementType.isRequired
    }

    export default wrapper.withRedux(NodeBird);
    