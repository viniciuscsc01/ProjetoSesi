import { Text, View, TextInput, TouchableOpacity, Button, StyleSheet, FlatList } from "react-native";
import Itens from "./Itens";
import { useState } from "react";


const itens = [
    {
        id: 1,
        nome: "zsdfds",
        cor: "#fff",
        imagem: "sfdfds"

    }


]

export default function Home({ navigation }) {
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    return (
        <View style={css.container}>
            <FlatList
                data={itens}
                renderItem={({ item }) => <Itens nome={item.nome} cor={item.cor} imagem={item.imagem} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    width: '33.33%',
                    padding: 10,
                    gap: 20
                }}
                numColumns={2}
            />
        </View>

    )

}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#1BC3AF",
        height: "100%"
    },
    texto1: {
        height: "70%"
    },
    texto2: {

    }

})