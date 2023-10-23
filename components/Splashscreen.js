import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Dimensions, View, Text, StyleSheet } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Splashscreen = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/animation_lo2jc9wm.json')}
                autoPlay
                loop
                style={{
                    height: screenHeight * 0.4,
                    width: screenWidth
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        marginBottom: 0.25 * screenHeight,
        fontSize: 0.05 * screenHeight,
    }
});

export default Splashscreen;
