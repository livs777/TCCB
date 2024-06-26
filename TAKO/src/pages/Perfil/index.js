import React from "react";
import { View, Text,} from 'react-native';
import { useNavigation } from '@react-navigation/native'
    
export default function Perfil(){
    const navigation = useNavigation();
    return (
    <View>
        <Text>Perfil</Text>
    </View>

    );

}