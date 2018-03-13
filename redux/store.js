import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default initStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('.', () => {
            const nextRootReducer = require('./rootReducer');

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
