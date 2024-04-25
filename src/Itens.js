import { StyleSheet, Text, View, Image } from "react-native";

export default function Itens({nome, cor, imagem}) {
    return(
        <View style={css.container}>
            <Image source={imagem} style={css.imagem}/>
            <Text>{nome}</Text>
            <Text>{cor}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 180,
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    nome: {
        fontWeight: "bold"
    },
    imagem: {
        width: "30%",
        height: 100,
        resizeMode: "contain",
        marginTop: 10
    }
})