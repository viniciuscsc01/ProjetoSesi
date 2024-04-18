import { Button, Text, FlatList, TextInput, TouchableOpacity, View } from "react-native";
import ProdutoLista from "./ProdutoLista";
import { useState } from "react";

const produtos = [
    {
        id: 1,
        nome: "fulano",
        setor: "secretaria",
        funcao: "secretario",
        imagem: require("./../assets/Icone-trabalhador-civil-Png.webp") 
    },
    {
        id: 2,
        nome: "fulano",
        setor: "secretaria",
        funcao: "secretario",
        imagem: require( "./../assets/Icone-trabalhador-civil-Png.webp")
    },
    {
        id: 3,
        nome: "fulano",
        setor: "secretaria",
        funcao: "secretario",
        imagem: require("./../assets/Icone-trabalhador-civil-Png.webp")
    },
    {
        id: 4,
        nome: "Junior",
        setor: "secretaria",
        funcao: "secretario",
        imagem: require("./../assets/Icone-trabalhador-civil-Png.webp")
    }
]

export default function Funcionarios()
{
   
    return(
        <View>
            <FlatList
                        data={produtos}
                        renderItem={ ({item}) => 
                        <ProdutoLista
                            nome={item.nome}
                            setor={item.setor}
                            funcao={item.funcao}
                            imagem={item.imagem}
                        /> }
                        keyExtractor={ (item) => item.id }
                        columnWrapperStyle={{
                        justifyContent: "space-between",
                        width: "50%",
                        padding: 10,
                        gap: 20
                        }}
                    numColumns={2}
                    />
        </View>
    )
}
    
