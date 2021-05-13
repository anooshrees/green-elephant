import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { Metrics } from '../../Themes';

export default function Confirm({ navigation }) {

    return (
        <View style={styles.container}>
            <Image source={require('../../Images/Transactions/sunglasses.png')}
                style={styles.image1}/>
            <Text style={styles.text1}>Nicole and Mike's Transaction Scheduled for</Text>
            <Image source={require('../../Images/Transactions/timeScheduled.png')}
                style={styles.image2}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Schedule Pickup')}>
                    <View style={styles.button1}>
                        <Text style={styles.text2}>Reschedule</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Pickup Scheduled')}>
                    <View style={styles.button2}>
                        <Text style={styles.text2}>Confirm Time</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image1: {
        height: 136,
        width: 93,
        resizeMode: 'contain',
    },
    text1: {
        width: Metrics.screenWidth * .8,
        fontSize: 26,
        textAlign: 'center'
    },
    image2: {
        height: 213,
        width: 355,
        resizeMode: 'contain',
    },
    text2: {
        fontSize: 20,
    },
    buttonContainer: {
        height: 44,
        width: 335,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button1: {
        height: 43,
        width: 160,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EB7F82',
    },
    button2: {
        height: 43,
        width: 160,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4DAA3',
    },
})