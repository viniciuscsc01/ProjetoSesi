import react from "react"
import { Keyboard, TouchableOpacity, TextInput, View,StyleSheet,Text } from "react-native"
import { useState } from "react"

export default function Login({ setLogado, setCadastro}) {

    const[ Email, setEmail ] = useState("");
    const[ Senha, setSenha ] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( Email == "viniciuscsantosc@gmail.com" && Senha == "1234") {
            setLogado(true);
        }

    }

    function Cadastrar()
    {
        setLogado(true);
        setCadastro(true);
    }

    return(
        <View style={css.container}>
            <TextInput onChangeText={(digitado) => setEmail(digitado)}
            value={Email}

            />

            <TextInput onChangeText={(digitado) => setSenha(digitado)}
            
            value={Senha}
            />
            <TouchableOpacity onPress={Login}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
})