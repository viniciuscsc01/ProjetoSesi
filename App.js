import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TextInput, TouchableOpacity, MaterialCommunityIcons } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Home from './src/Home';
import Itens from './src/Itens';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const[logado, setLogado] = useState(false);
  const[Cadastro, setCadastro] = useState(false);

  if(logado == false) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }
  if (!Cadastro) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {backgroundColor: "#1BC3AF"},
          headerStyle: {backgroundColor: "#1BC3AF"},
          tabBarLabelStyle: {color: "#1BC3AF"},
          headerTitleStyle: {color: "#1BC3AF"},
          tabBarActiveTintColor: "#1BC3AF",
          tabBarInactiveTintColor: "#1BC3AF"
        }}
        >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          
        }}/>
           
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});