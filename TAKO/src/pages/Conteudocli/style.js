import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
   flex: 1;
   background-color: #01497C;

`;

export const Scroller = styled.ScrollView`
   flex: 1;
   padding: 20px;
`;

export const Cabecalho = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

`;

export const Titulo = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
   
`;

export const BotaoPesq = styled.TouchableOpacity`
    width: 20px;
    height: 26px;
    margin-right: 28px;
`;

export const Localizacao = styled.View`
   background-color: #013A63;
   height: 60px;
   border-radius: 30px;
   flex-direction: row;
   align-items: center;
   padding-left: 20px;
   padding-right: 20px;
   margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
   flex: 1;
   font-size: 16px;
   color: #fff;
`;

export const LocalizaFinder = styled.TouchableOpacity`
   width: 24px;
   height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
   margin-top: 50px;
`;

export const ListArea = styled.View`
   margin-top: 30px;
   margin-bottom: 30px;

`;