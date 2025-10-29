import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ gap: 10 }}>
                <Text style={[styles.text, { fontSize: 24 }]}>Selamat Datang</Text>
                <Text style={[styles.text, { fontSize: 20, textAlign: 'left' }]}>Di Aplikasi</Text>
                <Text style={[styles.text, { fontSize: 24 }]}>Ruang Meeting</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 40 }}>
                <Button mode="contained" onPress={() => onFinish()}>
                    Next
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontWeight: '600',
    },
});

export default SplashScreen;
