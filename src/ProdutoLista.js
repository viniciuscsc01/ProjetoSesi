import { View, Text, StyleSheet, Image } from "react-native";

export default function ProdutoLista({nome, setor, funcao, imagem}) {
    return(
        <View style={css.container}>
            <Image style={css.img} source={imagem} />
            <Text style={css.name}>{nome}</Text>
            <Text style={css.preco}>{setor}</Text>
            <Text style={css.color}>{funcao}</Text>
            
        </View>
    )
}

const css = StyleSheet.create({ 
    container: {
        width: "100%",
        height: 250,
        backgroundColor: "white", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontWeight: "bold",
        fontSize: 30,
    },
    preco: {
        color: "blue",
        fontSize: 20
    },
    color: {
        fontSize: 15
    },
    img: {
        width: "100%",
        height: 150,
        resizeMode: "contain",
    }
})