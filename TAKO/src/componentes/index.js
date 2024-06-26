import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { UsuarioContex } from '../Contexto/UsuarioContex';

const TabArea = styled.View`
    height: 60px;
    background-color: #013A63;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabCenterItem = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    border-radius: 35px;
    border: 3px solid #013A63;
    margin-top: -20px;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

const HomeIcon = require('../../assets/homE.png');
const HojeIcon = require('../../assets/Hoje.png');
const UserIcon = require('../../assets/User.png');

export default ({ state, navigation }) => {
    const {state: user} = React.useContext(UsuarioContex);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Conteudocli')}>
                <Image source={HomeIcon} style= {{ width: 24, height: 24, tintColor: '#fff', opacity: state.index===0? 1 : 0.05 }} />
            </TabItem>
            <TabCenterItem onPress={() => goTo('Consulta')}>
                <Image source={HojeIcon} style={{ width: 32, height: 32, tintColor: '#013A63'}} />
            </TabCenterItem>
            <TabItem onPress={() => goTo('Perfil')}>
            {user.avatar != ''? 
                <AvatarIcon source={{uri: user.avatar}}  />
                :
                <Image source={UserIcon} style={{ width: 24, height: 24, tintColor: '#fff', opacity: state.index===4? 1 : 0.05 }} />
            }
            </TabItem>
        </TabArea>
    );
}
