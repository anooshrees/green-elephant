import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Metrics } from '../../Themes';

export default function TransactionsOverview() {
    return (
        <View style={styles.container}>
            <Text>
                Transactions Overview
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Metrics.screenHeight,
        width: Metrics.screenWidth,
    }
})