// IMPORTS
    import React from 'react';
    import ReactDOM from 'react-dom';
    // Redux Imports
        // boilerplate
        import { createStore } from 'redux';
        import { Provider } from 'react-redux'
        // reducers
        import { rootReducer } from './redux/reducers'
        // dev-tools
        import { compose, applyMiddleware } from 'redux'
        import logger from 'redux-logger'
        import thunk from 'redux-thunk'
    // Components
    import App from './App';

// ENHANCERS
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// STORE
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
        // composeEnhancers(applyMiddleware(logger))
        // composeEnhancers()
    )
    // console.log('STORE',store)
    // console.log('store.getState',store.getState())

//  RENDERING //  
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


