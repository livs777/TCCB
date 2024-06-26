import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { cadastrarUsuario } from '../../Api';


export default function Cadastrocli(){
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    const clicklog = async () => {
        if(nameField !== '' && emailField !== '' && passwordField !== ''){
            try {
                await cadastrarUsuario(nameField, emailField, passwordField); // Chamando a função cadastrarUsuario
                alert("Usuário cadastrado com sucesso!");
                navigation.reset({
                    routes: [{name:'Cliente'}]
                });
            } catch (error) {
                alert("Erro ao cadastrar usuário: " + error);
            }
        } else {
            alert("Preencha os campos!");
        }
    }

    const clickcad = () => {
        navigation.reset({
            routes: [{name: 'Cliente'}]
        });
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />

            <Animatable.View animation="fadeInUp" style={styles.form}>
                <Text style={styles.pri}>Nome:</Text>
                <TextInput
                    placeholder="Nome completo"
                    style={styles.input}
                    value={nameField}
                    onChangeText={(text) => setNameField(text)}
                />

                <Text style={styles.pri}>E-mail:</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
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
                    style={styles.buttonregistro}
                    onPress={clickcad}>
                    <Text style={styles.btnregistro}>Já possui uma conta? Faça Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={clicklog}>
                    <Text style={styles.btntexto}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f3f3f3',
    },

    form:{
        backgroundColor: '#f3f3f3',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    
    pri:{
        fontSize:20,
        marginTop: 27,
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 15,
    },

    button:{
        backgroundColor: '#0077B6',
        width: '135%',
        alignSelf: 'center',
        borderRadius: 70,
        paddingVertical: 70,
        marginTop: 300,
        justifyContent: 'center',
        alignItems:'center'
    },
    
    
    btntexto:{
        color:'#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },

    buttonregistro:{
        marginTop: 14,
        alignSelf: 'center',
    },
});
