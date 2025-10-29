import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { fetchData } from '../store/dataSlice';
import { Icon, MD3Colors } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native/types_generated/index';

const data = [
    { time: '08.00 - 09.00', room: 'Squats Room' },
    { time: '10.00 - 12.00', room: 'Lunges Room' },
];

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <View style={{ padding: 20, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 60,
                            height: 60,
                            backgroundColor: 'skyblue',
                            borderRadius: 40,
                        }}
                    >
                        <Text style={{ fontSize: 30, color: 'white' }}>Y</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Yosi</Text>
                        <Text>Web Developer</Text>
                    </View>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontWeight: '600' }}>Jadwal Ruang Meeting Hari ini</Text>

                    <View style={{ marginVertical: 10 }}>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: 8,
                                        marginBottom: 10,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontWeight: '500' }}>{item.time}</Text>
                                    <Text style={{ color: 'white', fontWeight: '500' }}>{item.room}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </View>

            <View style={{ height: 100, backgroundColor: '#D9D9D9', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image
                        source={require('../assets/icons/clipboard.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMethod='resize'
                        resizeMode='contain'
                    />

                    <Text style={{ paddingLeft: 10, fontSize: 10, color: 'black' }}>{`Jadwal\nRuang Meeting`}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Image
                        source={require('../assets/icons/write.png')}
                        style={{ width: 30, height: 30 }}
                        resizeMethod='resize'
                        resizeMode='contain'
                    />

                    <Text style={{ paddingLeft: 10, fontSize: 10, color: 'black' }}>{`Booking\nRuang Meeting`}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
});

export default HomeScreen;
