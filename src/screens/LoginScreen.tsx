import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, ActivityIndicator } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/authSlice';
import { AppDispatch, RootState } from '../store';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

    const onLogin = async () => {
        await dispatch(loginAsync({ email, password }));
    };

    if (isAuthenticated) {
        navigation.replace('Home');
    }

    // email : yosi@gmail.com
    // password : password

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Text style={styles.title}>Ruangan Meeting</Text>
            </View>

            <View style={{ padding: 20, backgroundColor: 'skyblue', borderRadius: 10 }}>
                <Text variant="headlineSmall" style={{ marginBottom: 16, alignSelf: 'center' }}>
                    Sign in
                </Text>
                <TextInput label="Email" value={email} onChangeText={setEmail} style={{ width: '100%', marginBottom: 12 }} />
                <TextInput label="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ width: '100%', marginBottom: 12 }} />

                {loading ? (
                    <ActivityIndicator animating />
                ) : (
                    <Button mode="contained" onPress={onLogin} style={{ width: '100%' }}>
                        Login
                    </Button>
                )}

                {error && (
                    <Text style={{ color: 'red', marginTop: 8, textAlign: 'center' }}>{error}</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});
