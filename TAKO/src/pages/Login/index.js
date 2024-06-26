import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import *as animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Login(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#013A63" barStyle="light-content" />
            <View style={styles.logo}>
                <animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/TAKO.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.form}>
                <Text style={styles.titulo}>Facilite seus agendamentos aqui!</Text>
                <Text style={styles.texto}>Comece já</Text>

                <TouchableOpacity 
                  style={styles.botao1}
                  onPress={ () => navigation.navigate('Cliente')}
                >
                    <Text style={[styles.btntexto, {textAlign: 'center'}]}>Login</Text>
                </TouchableOpacity>


            </animatable.View>

        </View>
    );

}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#013A63'
},
logo:{
    flex: 2,
    justifyContent: 'center',
    alignItems:'center'
},
form:{
    flex: 1,
    backgroundColor: '#f3f3f3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingStart: '5%',
    paddingEnd: '5%'
},
    titulo:{
    fontSize:21.5,
    fontWeight: 'bold',
    marginTop: 19,
    marginBottom: 5,
    color: '#000000'

},
texto:{
    color: '#000000',
    fontSize: 15.5
},
botao1:{
    backgroundColor: '#0077B6',
    borderRadius: 50,
    paddingVertical: 11,
    width: '55%',
    alignSelf: 'center',
    bottom:'15%',
    padding: 10,
    bottom: '0.2%',
    marginTop: 59
},
btntexto:{
    color: '#F5F5F5',
    fontSize: 17,
    justifyContent: 'center',
    fontWeight: 'bold'

}



})
