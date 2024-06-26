import React, { useEffect, useContext } from "react";
import { Image } from "react-native"; 
import { Container } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { UsuarioContex } from "../../Contexto/UsuarioContex";

export default () => {
    const { dispatch: userDispatch } = useContext(UsuarioContex);
    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () => {
            
            const token = await AsyncStorage.getItem('token');
            if(token !== null ){
             
                const res = { token: "token_simulado", data: { avatar: "avatar_simulado" } };
                if(res.token){
                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{name:'MainTab'}]
                    });

                }else{
                    navigation.navigate('Login');
                }
            }else{
                navigation.navigate('Login');
            }
        }
        checkToken();
    }, []);

    return (
        <Container delay={200}>
            <Image source={require('../../../assets/TAKO.png')} />
        </Container>
    );
}
