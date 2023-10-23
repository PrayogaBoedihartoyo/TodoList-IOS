import {View, Text, FlatList, TextInput, Image} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const chatData = [
    { id: '1', message: 'Hi there!', sender: 'user' },
    { id: '2', message: 'Hello!', sender: 'friend' },
    { id: '3', message: 'How are you?', sender: 'user' },
    { id: '4', message: 'I am good, thanks!', sender: 'friend' },
    { id: '5', message: 'What have you been up to?', sender: 'friend' },
    { id: '6', message: 'Not much, just working.', sender: 'user' },
    { id: '7', message: 'Sounds good!', sender: 'friend' },
    { id: '8', message: 'See you later!', sender: 'user' },
    { id: '9', message: 'Bye!', sender: 'friend' },
    { id: '10', message: 'Bye!', sender: 'user' },
    { id: '11', message: 'Bye!', sender: 'friend' },
    { id: '12', message: 'Bye!', sender: 'user' },
    { id: '13', message: 'Bye!', sender: 'friend' },
    { id: '14', message: 'Bye!', sender: 'user' },
    { id: '15', message: 'Bye!', sender: 'friend' },
];

const Chat = () => {
    return (
        <View style={styles.container}>
            {/*Header */}
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg')}
                        style={styles.profileImage}
                    />
                </View>
                <Text style={styles.headerText}>Michael</Text>
                <View style={styles.called}>
                    <Ionicons name="call" size={24} color="#2C2A29" />
                </View>
                <View style={styles.callvideo}>
                    <Ionicons name="videocam" size={28} color="#2C2A29" />
                </View>
            </View>

            {/*Messages */}
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageContainer,
                            item.sender === 'user' ? styles.userMessage : styles.friendMessage,
                        ]}>
                        <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                )}
            />

            {/*Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    placeholderTextColor="#aaaaaa"
                />
                <View style={styles.send}>
                    <Ionicons name="paper-plane" size={28} color="#2C2A29" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    callvideo: {
        marginRight: 10,
        marginTop: 7,
        marginLeft: 10,
    },
    send: {
        marginLeft: 'auto',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    messageContainer: {
        maxWidth: '80%',
        padding: 8,
        borderRadius: 8,
        marginVertical: 8,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007BFF',
        color: 'white',
    },
    friendMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
    },
    messageText: {
        color: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingRight: 10,
        marginBottom: 16,
        backgroundColor: '#D7E2E3',
        borderRadius: 8,
        padding: 10,
        width: '100%',
    },
    headerText: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        bottom: 0,
    },
    profileContainer: {
        width: 40,
        height: 40,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: 'gray',
    },
    called: {
        marginLeft: 'auto',
        flexDirection: 'row',
        marginTop: 7,
        marginRight: 10,
    }
});

export default Chat;
