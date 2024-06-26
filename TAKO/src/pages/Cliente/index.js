// cliente.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../Api';

export default function Cliente() {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    const clicklog = async () => {
        if (emailField !== '' && passwordField !== '') {
            try {
                const response = await loginUser(emailField, passwordField);
                if (response === "Login successful") {
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    Alert.alert("Erro", response);
                }
            } catch (error) {
                console.error("Error:", error);
                Alert.alert("Erro", "Erro ao tentar fazer login. Por favor, tente novamente.");
            }
        } else {
            Alert.alert("Preencha os campos!");
        }
    }

    const clickcad = () => {
        navigation.reset({
            routes: [{ name: 'Cadastrocli' }]
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#0077B6" barStyle="light-content" />
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabecalho}>
                <Text style={styles.mensagem}>Bem-Vindo (a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.form}>

                <Text style={styles.pri}>E-mail:</Text>
                <TextInput
                    placeholder="Digite seu E-mail"
                    style={styles.input}
                    value={emailField}
                    onChangeText={(text) => setEmailField(text)}
                />

                <Text style={styles.pri}>Senha:</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    value={passwordField}
                    onChangeText={(text) => setPasswordField(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={clicklog}>
                    <Text style={styles.btntexto}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonregistro}
                    onPress={clickcad}>
                    <Text style={styles.btnregistro}>Não possui uma conta? Cadastra-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0077B6',
    },

    cabecalho: {
        marginTop: '10%',
        marginBottom: '7%',
        paddingStart: '5%',
        alignItems: 'center'
    },

    mensagem: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },

    form: {
        backgroundColor: '#f3f3f3',
        flex: 1,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    pri: {
        fontSize: 20,
        marginTop: 27,
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 15,
    },

    button: {
        backgroundColor: '#0077B6',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btntexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonregistro: {
        marginTop: 14,
        alignSelf: 'center',
    },

    btnregistro: {
        color: '#696969'
    }
});
