import React, { useState } from 'react'
import { Keyboard, Touchable, TouchableOpacity, View, TextInput, Text, StyleSheet, Image } from 'react-native'
import Cadastro from './Cadastro';

//import Logo from '../assets/projetoSesi-removebg-preview.png'
//<Image source={Logo/>
export default function Login( { setLogado, setCadastro } ) {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    
    function Login()
    {
        Keyboard.dismiss();
        if( email == "fefe@gmail.com" && senha == "1234" ) {
            setLogado(true)
        }        
    }

    function Cadastro()
    {
        setLogado(true);
        setCadastro(true);
    }

  return (
    <View style={css.view}>
        <Image style={css.imagine} source={require("./../assets/raja.png")}/>
        <View style={css.caixinha}>
        <Text style={css.enois}> Bem-vindo(a)! Insira seu E-mail  para continuar.</Text>
        </View>
        <TextInput 
        placeholder='Insira seu E-mail'   
        style={css.texto2} 
        onChangeText={ (digitado) => setEmail(digitado) } 
        value={email} 
        TextInput={email}
        />
        <TextInput
        placeholder='Insira sua Senha' 
        style={css.texto2} 
        onChangeText={ (digitado) => setSenha(digitado) } 
        value={senha} 
        TextInput={senha}
        />
        <TouchableOpacity style={css.login} onPress={Login} >
            <Text style={css.rara}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.cadastro} onPress={Cadastro}>
            <Text style={css.rara1}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create( {
    view: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    login: {
        backgroundColor: "aquamarine",
        width: 330,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderRadius: 5,
    },
    cadastro: {
        backgroundColor: "white",
        marginTop: 17,
        alignItems: "center",
        justifyContent: "center",
    },
    texto2: {
        width: 330,
        borderWidth: 2,
        marginTop: 24 ,
        height: 50,
        backgroundColor: "lightgrey",
        borderRadius: 5,
        textAlign: "center",
    },
    caixinha: {
        width: 280,
        alignItems: "center"
    },
    enois: {
        fontSize: 32,
        fontWeight: "bold",
        color: "aquamarine"
    },
    imagine: {
        width: 100,
        height: 100,
        borderRadius: 200,
        marginBottom: 10
    },
    rara1: {
        color: "blue",
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    rara: {
        fontWeight: "bold",
        color: "white",
        fontSize: 17
        }
} )
