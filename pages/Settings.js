import {Text, View} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingsScreen;