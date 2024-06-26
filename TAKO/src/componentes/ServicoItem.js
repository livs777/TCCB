import React from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const Empresa = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const SeeBtn = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #01497C;
    border-radius: 10px;
    justify-content: center;
    align-items: center;    
`;


const SeeBtntext = styled.Text``;

export default ({ data }) => {
    const navigation = useNavigation();

    const descricao = () => {
        navigation.navigate('Descricao', {
          avatar: data.avatar,
          name: data.nomeEmpresa,
          photos: data.photos || [],
          disponibilidade: data.disponibilidade || [],
          services: data.services || []
          // Se desejar, você pode passar mais parâmetros aqui
        });
    };
    
    return (
        <Area onPress={descricao}>
            {data.avatar && <Avatar source={data.avatar} />}
                <InfoArea>
                    <Empresa>{data.nomeEmpresa}</Empresa>
                    <SeeBtn>
                        <SeeBtntext>Ver Perfil</SeeBtntext>
                    </SeeBtn>
                </InfoArea>
        </Area>
    );
}

