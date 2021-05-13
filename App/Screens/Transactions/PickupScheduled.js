import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function PickupScheduled({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.transactionListing}>
                <View style={styles.name}>
                    <Text style={styles.text1}>Luke</Text>
                </View>

                <View style={styles.itemCard}>
                    <Image source={require('../../Images/Transactions/lukesiphonecase.png')}
                        style={styles.image}/>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.text1}>iPhone Case</Text>

                        <View style={[styles.button1, {backgroundColor: '#FFDB83'}]}>
                            <Text style={styles.text2}>Pending...</Text>
                        </View>

                        <View style={styles.button2}>
                            <Text style={styles.text2}>Chat</Text>
                        </View>
                    </View>
                </View>
                

            </View>
            <View style={styles.transactionListing}>
                <View style={styles.name}>
                    <Text style={styles.text1}>Mike</Text>
                </View>

                <View style={styles.itemCard}>
                    <Image source={require('../../Images/Transactions/mikessunglasses.png')} 
                        style={styles.image}/>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.text1}>iPhone Case</Text>

                        
                        <View style={styles.button3}>
                            <Text style={styles.text2}>Pickup: Saturday, April 24th 7 PM @ Soto</Text>
                        </View>
                        

                        <View style={styles.button2}>
                            <Text style={styles.text2}>Chat</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.transactionListing}>
                <View style={styles.name}>
                    <Text style={styles.text1}>Taylor</Text>
                </View>

                <View style={styles.itemCard}>
                    <Image source={require('../../Images/Transactions/taylorsairpods.png')} 
                        style={styles.image}/>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.text1}>iPhone Case</Text>

                        <View style={[styles.button1, {backgroundColor: '#A1AFA0'}]}>
                            <Text style={styles.text2}>Transaction Completed</Text>
                        </View>

                        <View style={styles.button2}>
                            <Text style={styles.text2}>Chat</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionListing: {
        height: 210,
        width: Metrics.screenWidth * 0.9,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
    },
    name: {
        height: 45,
        justifyContent: 'flex-end',
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
    },
    itemCard: {
        height: 156,
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10, 
    },
    image: {
        width: 99,
        height: 142,
        resizeMode: 'contain',
    },  
    buttonContainer: {
        height: 142,
        width: 170,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button1: {
        height: 39,
        width: 174,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        height: 33,
        width: 108,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    button3: {
        height: 65,
        width: 174,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4DAA3',
    }
})