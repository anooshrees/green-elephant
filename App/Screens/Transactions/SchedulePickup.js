import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { Metrics } from '../../Themes';

export default function SchedulePickup({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.formSection}>
                <View style={styles.formTitle}>
                    <Text style={styles.text1}>Rank Pickup Dates</Text>
                </View>

                <View style={styles.entryContainer}>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 23rd</Text>
                        <Image source={require('../../Images/Transactions/arrows.png')}
                            style={styles.arrows} />
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 24th</Text>
                        <Image source={require('../../Images/Transactions/arrows.png')}
                            style={styles.arrows} />
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 25th</Text>
                        <Image source={require('../../Images/Transactions/arrows.png')}
                            style={styles.arrows} />
                    </View>
                </View>
            </View>

            <View style={styles.formSection}>
                <View style={styles.formTitle}>
                    <Text style={styles.text1}>Select Available Times</Text>
                </View>

                <View style={styles.entryContainer}>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>Early Morning</Text>
                        <View style={styles.checkBox}></View>
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>Morning</Text>
                        <View style={styles.checkBoxActive}></View>
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>Early Afternoon</Text>
                        <View style={styles.checkBox}></View>
                    </View>
                </View>
            </View>

            <View style={styles.formSection}>
                <View style={styles.formTitle}>
                    <Text style={styles.text1}>Rank Pickup Dates</Text>
                </View>

                <View style={styles.entryContainer}>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 23rd</Text>
                        <View style={styles.checkBoxActive}></View>
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 24th</Text>
                        <View style={styles.checkBox}></View>
                    </View>
                    <View style={styles.entry}>
                        <Text style={styles.text2}>April 25th</Text>
                        <View style={styles.checkBox}></View>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Confirm Pickup Time')}>
                <View style={styles.button1}>
                    <Text style={styles.text2}>Schedule Pickup</Text>
                </View>
            </TouchableOpacity>
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
    formSection: {
        height: 190,
        width: Metrics.screenWidth * 0.9,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
    },
    formTitle: {
        height: 45,
        justifyContent: 'flex-end',
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 15,
    },
    entryContainer: {
        height: 190-60,
        marginTop: 20,
    },
    entry: {
        height: 267,
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrows: {
        width: 70,
        height: 20,
        resizeMode: 'contain',
    },
    checkBox: {
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
    }, 
    checkBoxActive: {
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: 'black',
    },  
    button1: {
        height: 32,
        width: 205,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#63D4F9',
    },
})