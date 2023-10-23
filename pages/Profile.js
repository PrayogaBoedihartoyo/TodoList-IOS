import {View, Text} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile !</Text>
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

export default Profile;
