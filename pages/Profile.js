import React, { useState } from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from "@expo/vector-icons";

const data = [
    {
        id: '1',
        title: 'Account',
        description: 'Privacy, security, change number',
        icon: 'person-outline'
    },
    {
        id: '2',
        title: 'Privacy',
        description: 'Last seen, profile photo, about',
        icon: 'lock-open-outline'
    },
    {
        id: '3',
        title: 'Avatar',
        description: 'Profile photo, about',
        icon: 'image-outline'
    },
    {
        id: '4',
        title: 'Chats',
        description: 'Theme, wallpapers, chat history',
        icon: 'chatbox-ellipses-outline'
    },
    {
        id: '5',
        title: 'Notifications',
        description: 'Message, group & call tones',
        icon: 'notifications-outline'
    },
    {
        id: '6',
        title: 'Storage and data',
        description: 'Network usage, auto-download',
        icon: 'cloud-upload-outline'
    },
    {
        id: '7',
        title: 'Help',
        description: 'Help center, contact us, privacy policy',
        icon: 'help-buoy-outline'
    },
];

const Profile = () => {
    const inset = useSafeAreaInsets();
    const [avatar, setAvatar] = useState('https://cdn.pixabay.com/photo/2023/10/12/12/54/woman-8310746_1280.jpg');

    const handleAvatarPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View>
            <StatusBar animated={true} backgroundColor="white"/>
            <View style={{...styles.container, paddingTop: inset.top }}>
                <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_1280.jpg',}} style={{ ...styles.backgroudImage, paddingTop: inset.top }}/>
                <TouchableOpacity onPress={handleAvatarPress}>
                    <Image source={{uri: avatar,}} style={styles.avatar}/>
                    <Text style={styles.name}>Prayoga Boedihartoyo</Text>
                    <Text style={{ fontSize: 15, color: 'white' }}>Software Engineer</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={{ padding: 18, flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={item.icon} size={40} color={'#5C6D6F'} style={{ marginRight: 20 }} />
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>{item.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    backgroudImage: {
        width: Dimensions.get('window').width,
        height: 300,
        position: 'absolute',
        borderBottomRightRadius: 100,
    },
    container: {
        padding: 20,
        flexDirection: 'row',
        height: 300,
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
        marginRight: 300,
        marginTop: 80,
    },
});

export default Profile;
