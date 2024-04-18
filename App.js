import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Home from './src/Home';
import Calendario from './src/Calendario';
import Agenda from './src/local';
import Login from './src/Login';
import Funcionarios from './src/Funcionarios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const[ logado, setLogado ] = useState(false);
  const[ cadastro, setCadastro ] = useState(false);

  if( !logado ) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro} /> )
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado} /> )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
       screenOptions={{
        tabBarStyle: { backgroundColor: "red" },
        headerStyle: { backgroundColor: "red" },
        tabBarLabelStyle: { color: "white" },
        headerTitleStyle: { color: "white" },
        tabBarActiveTintColor: "gray",
        tabBarInactiveTintColor: "white"
      }}
      >
        <Tab.Screen name ="Home" component={Home}
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen 
        name="Calendario" 
        component={Calendario}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='calendar-check-outline' color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen 
        name="local" 
        component={Agenda}
        options={{
          tabBarLabel: 'local',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='map' color={color} size={size}/>
          ),
        }}
        />
        <Tab.Screen 
        name="Funcionarios" 
        component={Funcionarios}
        options={{
          tabBarLabel: 'AgenFuncionariosda',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='clipboard-account' color={color} size={size}/>
          ),
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
