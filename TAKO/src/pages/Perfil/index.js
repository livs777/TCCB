import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
//import { loadUsers } from '../../Api';


export default function Perfil(){

    const navigation = useNavigation();
    const [user, setUser] = useState({});


//useEffect(() => {
     //   loadUsers().then((users) => {
     //       const userEmail = 'teste50@email.com'; // Replace with the logged-in user's email
      //      const user = users.find((user) => user.email === userEmail);
      //      if (user) {
//setUser(user);
       //     }
//});
  //  }, []);


    const handleLogout = () => {

      console.log('Logout initiated');

    };


    return (

      <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

          <Text style={styles.backButtonText}>{'<'}</Text>

        </TouchableOpacity>

        <View style={styles.profile}>

          <View style={styles.avatar}>

            {/* Replace with your actual avatar implementation */}

            <Text style={styles.avatarText}>{'Avatar'}</Text>

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

};

const styles = StyleSheet.create({

    container: {
  
      flex: 1,
  
      backgroundColor: '#007bff', // Blue background
  
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
  
      backgroundColor: '#fff', // White avatar
  
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
  
      backgroundColor: '#007bff', // Blue button
  
      padding: 15,
  
      borderRadius: 5,
  
      alignItems: 'center',
  
    },
  
    logoutButtonText: {
  
      fontSize: 18,
  
      fontWeight: 'bold',
  
      color: '#fff', // White text
  
    },
  
  });