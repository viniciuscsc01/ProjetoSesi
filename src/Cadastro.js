import React from "react";
import {useState} from 'react'
import { View, TouchableOpacity, TextInput ,StyleSheet, Text, Image } from "react-native";

export default function Cadastro({ setLogado, setCadastro }) {

     const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Cadastrar() {
        setCadastro( false );
        setLogado( false );
    }
    function Voltar() {
        setCadastro( false );
        setLogado( false );
    }

  return (
    <View style={css.view} >
        <Image style={css.imagine} source={require("./../assets/raja.png")} />
        <View style={css.caixinha}>
        <Text style={css.enois}>  Insira suas  informações pessoais para    continuar.</Text>
        </View>
        <TextInput placeholder='Insira seu E-mail' style={css.texto2} onChange={ (digitado) => setEmail(digitado) } value={email} />
        <TextInput placeholder='Insira sua Senha' style={css.texto2} onChange={ (digitado) => setSenha(digitado) } value={senha} />
        <TextInput/>
        <TextInput/>
        <TouchableOpacity style={css.cadastrar} onPress={Cadastrar} >
            <Text style={css.cad} >Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Voltar} >
            <Text style={css.rara1} >Voltar</Text>
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
        width: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    enois: {
        fontSize: 32,
        fontWeight: "bold",
        color: "aquamarine",
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
    cadastrar: {
        backgroundColor: "aquamarine",
        width: 330,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginBottom: 20
    },
    cad: {
        fontWeight: "bold",
        color: "white",
        fontSize: 17
    }
} )
