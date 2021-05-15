import React, { useState } from 'react';
import { Colors, Metrics, Images } from '../../Themes';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import MapView, {Marker} from 'react-native-maps';


export default function Map({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.backgroundView}>
                    <View style={styles.localiCardView}>
                        <MapView style={styles.map}
                            initialRegion={{
                            latitude: 37.424107,
                            longitude: -122.16303507642922,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.02,
                            }}
                        >
                            <Marker coordinate={{
                                latitude: 37.42426209641202,
                                longitude: -122.16303507642922}}>
                            </Marker>

                            <Image
                                style={styles.itemImage}
                                resizeMode={"contain"}
                                source={require('../../Images/items.png')}
                            />
                        </MapView>
                    </View>
            </View>
            
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
/*     map: {
        width: 287,
        height: 150,
        borderRadius: 15,
        marginBottom: 5,
    }, */
    descripView: {
        height: 40,
        width: Metrics.screenWidth * 0.9,
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 5,
    },
    itemImage: {
        width: Dimensions.get('window').width,
        height: 400,
        position: 'absolute',
        bottom: 145,
    },
    descrip: {
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    backgroundView: {
        marginTop: 10,
        height: Metrics.screenHeight * 0.9 - 40,
        width: Metrics.screenWidth * 0.9,
        alignItems: 'center',
    },
/*     backgroundBlurView: {
        alignItems: 'center',
        justifyContent: 'center',
    }, */
    
    middleDescrip: {
        flexDirection: 'row',
        width: 320,
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 5,
    },
    middleDescripTextView: {
        height: 38,
        width: 190,
        flexDirection: 'row',
    },
    middleDescripText: {
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
    },
    locationTextView: {
        height: 30,
        width: 60, 
        justifyContent: 'space-between',
    },
    locationText: {
        fontSize: 11.21,
    },
    locationLine: {
        height: 15,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});