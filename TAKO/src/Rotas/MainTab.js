import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Conteudocli from "../pages/Conteudocli";
import Consulta from "../pages/Consulta";
import Perfil from "../pages/Perfil";
import Index from "../componentes/index";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={(props) => <Index {...props} />}>
        <Tab.Screen name="Conteudocli" component={Conteudocli} options={{headerShown: false}} />
        <Tab.Screen name="Consulta" component={Consulta} options={{headerShown: false}} />
        <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
    </Tab.Navigator>
);
