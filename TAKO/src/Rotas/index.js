
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../pages/Inicial';
import Login from '../pages/Login';
import Cliente from '../pages/Cliente';
import Conteudocli from '../pages/Conteudocli';
import Cadastrocli from '../pages/Cadastrocli';
import MainTab from './MainTab';
import Descricao from '../pages/Descricao';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={{headerShown: false}}
            />

            <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />

            <Stack.Screen
                    name="Cliente"
                    component={Cliente}
                    options={{headerShown: false}}
                />


            <Stack.Screen
                    name="Conteudocli"
                    component={Conteudocli}
                    options={{headerShown: false}}
                />

            <Stack.Screen
                    name="Cadastrocli"
                    component={Cadastrocli}
                    options={{headerShown: false}}
                />
            
            <Stack.Screen
                    name="MainTab"
                    component={MainTab}
                    options={{headerShown: false}}
            />
            

            <Stack.Screen
                    name="Descricao"
                    component={Descricao}
                    options={{headerShown: false}}
                />
        

        </Stack.Navigator>

    )
}
