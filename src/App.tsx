import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './store';


export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <AppNavigator />
            </PaperProvider>
        </Provider>
    );
}
