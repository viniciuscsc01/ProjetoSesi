import { Text, View, StyleSheet, Image } from "react-native";

export default function local()
{
    return(
        <View>
            <View style={css.back}></View>
            <Image style={css.casa} source={require("./../assets/casasi.webp")}></Image>
            <Image style={css.img} source={require("./../assets/altura.png")}></Image>
        </View>
    )
}
const css = StyleSheet.create({
    back: {
        backgroundColor: "lightblue",
        width: "100%",
        height: 120
    },
    img: {
        width: 400,
        height: 550,
        position: "absolute",
        marginTop: 110
    },
    casa: {
        width: 80,
        height: 80,
        marginTop: 60,
        marginLeft: 160,
        position: "absolute",
        zIndex: 1
    }
})