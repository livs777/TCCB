import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loadUsers } from '../../Api'; // Make sure the path is correct
import * as FileSystem from 'expo-file-system';


export default function Perfil() {
    const navigation = useNavigation();
    const [user, setUser] = useState({ nome: '', email: '' });

    useEffect(() => {
        const fetchUser = async () => {
            await loadUsers();
            const userEmail = 'SEUEMAIL@email.com.br'; // Replace with the logged-in user's email
            const currentUser = users.find(user => user.email === userEmail);
            if (currentUser) {
                setUser(currentUser);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
      try {
          // Assuming you store session info in a file called 'session.json'
          const sessionFilePath = FileSystem.documentDirectory + 'session.json';
          await FileSystem.deleteAsync(sessionFilePath, { idempotent: true });
          console.log('Logout successful');
          Alert.alert('Logout', 'Você saiu da conta com sucesso!');
          navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }], // Adjust the route name to your login screen
          });
      } catch (error) {
          console.error("Erro ao sair da conta:", error);
          Alert.alert('Erro', 'Ocorreu um erro ao sair da conta. Tente novamente.');
      }
  };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>

            <View style={styles.profile}>
                <View style={styles.avatar}>
                    {/* Replace with your actual avatar implementation */}
                    <Text style={styles.avatarText}></Text>
                </View>
                <Text style={styles.name}>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.logoutContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01497C', // Blue background
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
        borderRadius: 5,
    },
    backButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // White text
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#0077B6', // Light blue avatar
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007bff', // Blue text
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#fff', // White text
    },
    email: {
        fontSize: 18,
        marginTop: 10,
        color: '#fff', // White text
    },
    logoutContainer: {
        padding: 20,
    },
    logoutButton: {
        backgroundColor: '#fff', // White button
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff', // Blue text
    },
});