import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useNavigation();

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Username dan password harus diisi.');
            return;
        }

        // Lakukan panggilan API login ke server di sini (menggunakan fetch atau pustaka lain)

        if (username === 'User' && password === 'User') {
            router.replace('Router');
        } else {
            setError('Username atau password salah.');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <LottieView
                    source={require('../assets/animation_lo2jc9wm.json')}
                    autoPlay
                    loop
                    style={{
                        height: 400,
                        width: 400
                    }}
                />
            </View>
            <Text style={styles.errorText}>{error}</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                returnKeyType="next"
                onSubmitEditing={() => {
                    passwordInput.focus();
                }}
            />
            <TextInput
                ref={(input) => {
                    let passwordInput = input;
                }}
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                returnKeyType="go"
                onSubmitEditing={handleLogin}
            />
            <View style={styles.button}>
                <Button color='white' title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#555D5B',
        width: '80%',
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 40,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
