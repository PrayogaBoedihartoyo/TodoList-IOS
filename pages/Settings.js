import React, { useState } from 'react';
import { View, Text, FlatList, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const SettingsScreen = () => {
    const inset = useSafeAreaInsets();
    const [settings, setSettings] = useState([
        { id: '1', title: 'Notifikasi', enabled: true },
        { id: '2', title: 'Tema Gelap', enabled: false },
        { id: '3', title: 'Privasi', enabled: true },
        { id: '4', title: 'Bantuan', enabled: false },
    ]);

    const toggleSwitch = (id) => {
        const updatedSettings = settings.map((setting) => {
            if (setting.id === id) {
                setting.enabled = !setting.enabled;
            }
            return setting;
        });
        setSettings(updatedSettings);
    };

    return (
        <View style={{...styles.container, paddingTop: inset.top}}>
            <FlatList
                data={settings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.settingItem}>
                        <Text style={styles.settingTitle}>{item.title}</Text>
                        <Switch
                            value={item.enabled}
                            onValueChange={() => toggleSwitch(item.id)}
                        />
                    </View>
                )}
            />
            <TouchableOpacity style={styles.signOutButton}>
                <Text style={styles.signOutText}>Keluar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingVertical: 12,
    },
    settingTitle: {
        fontSize: 16,
    },
    signOutButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    signOutText: {
        color: 'white',
        fontSize: 18,
    },
});

export default SettingsScreen;
