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
        { id: '5', title: 'Tentang', enabled: true },
        { id: '6', title: 'Versi', enabled: false },
        { id: '7', title: 'Kirimkan Umpan Balik', enabled: true },
        { id: '8', title: 'Laporan Masalah', enabled: false },
        { id: '9', title: 'Kebijakan Privasi', enabled: true },
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
        <View>
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
            </View>
            <View>
                <TouchableOpacity style={styles.signOutButton}>
                    <Text style={styles.signOutText}>Keluar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '76%',
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
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 150,
    },
    signOutText: {
        color: 'white',
        fontSize: 18,
    },
});

export default SettingsScreen;
