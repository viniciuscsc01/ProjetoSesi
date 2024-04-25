import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export default function Cadastro({ setLogado, setCadastro}) {
    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }
  return (
   <View>
    <TextInput />
    <TextInput />
    <TouchableOpacity onPress={Cadastrar}>
        <Text>Cadastrar</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={Voltar}>
        <Text>Voltar</Text>
    </TouchableOpacity>
   </View>
  )
}
