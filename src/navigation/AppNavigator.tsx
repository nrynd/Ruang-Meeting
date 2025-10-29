import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Home: undefined;
    Order: undefined;
    Schedule: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
);

const MainStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
);

const AppNavigator = () => {
    const [showSplash, setShowSplash] = useState(true);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            {showSplash ? (
                <SplashScreen onFinish={() => setShowSplash(false)} />) :
                isAuthenticated ? <MainStack /> : <AuthStack />
            }

        </NavigationContainer>
    );
};

export default AppNavigator;
