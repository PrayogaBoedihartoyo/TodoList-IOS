import {View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import * as React from "react";
import {StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Chat = () => {
    const insets = useSafeAreaInsets();
    const chatData = [
        {
            id: '1',
            name: 'John Doe',
            image: 'https://cdn.pixabay.com/photo/2023/10/12/12/54/woman-8310746_1280.jpg',
            lastMessage: 'Hello, how are you?',
            timestamp: '3 mins ago',
        },
        {
            id: '2',
            name: 'Lily',
            image: 'https://cdn.pixabay.com/photo/2023/01/11/20/27/woman-7712737_1280.jpg',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        },
        {
            id: '3',
            name: 'Michael',
            image: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        },
        {
            id: '4',
            name: 'Lumen',
            image: 'https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361_1280.jpg',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        },
        {
            id: '5',
            name: 'Prayog Boedihartoyo',
            image: 'https://media.istockphoto.com/id/1359069231/id/foto/wanita-muda-asia-yang-cantik-dengan-kulit-segar-bersih-dengan-latar-belakang-putih-perawatan.jpg?s=612x612&w=0&k=20&c=iHlCR3rmuT3NnuQhInRR2Z-qDeYgaGy516oEpg5vnWg=',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        },
        {
            id: '6',
            name: 'Jessica',
            image: 'https://media.istockphoto.com/id/1278139568/id/foto/potret-studio-wanita-berusia-20-tahun.jpg?s=2048x2048&w=is&k=20&c=2JLQfZbrQ6uLRIfCuJaPsScIAESr3U3fBqmDMF5m6Nc=',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        },
        {
            id: '7',
            name: 'Barron',
            image: 'https://media.istockphoto.com/id/953282064/id/foto/wanita-cantik-muda-tersenyum.jpg?s=2048x2048&w=is&k=20&c=ppRbbl_tXuNepH5A51nUGRe13wdmML7foIjsqEHmLaQ=',
            lastMessage: 'I am doing great, thanks!',
            timestamp: '5 mins ago',
        }
    ];

    return (
        <View style={{paddingTop: insets.top}}>
            <View style={styles.header}>
                <Text style={styles.textChat}>Chats</Text>
                <View style={styles.iconHeader}>
                    <Ionicons name={'camera'} size={24} color={'#fff'} />
                    <Ionicons name={'search'} size={24} color={'#fff'} />
                    <Ionicons name={'ellipsis-vertical'} size={24} color={'#fff'} />
                </View>
            </View>
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.chatItem}>
                            <Image source={{ uri: item.image }} style={styles.profileImage} />
                            <View style={styles.chatDetails}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                            </View>
                            <Text style={styles.timestamp}>{item.timestamp}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    iconHeader: {
        flexDirection: 'row',
        paddingLeft: 235,
        gap: 20,
    },
    textChat: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'flex-start',
    },
    header: {
        padding: 20,
        backgroundColor: '#5C6D6F',
        flexDirection: 'row',
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 4,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatDetails: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: '#888',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
});

export default Chat;
