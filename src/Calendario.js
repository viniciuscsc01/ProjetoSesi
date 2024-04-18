import { Text, View, Image, StyleSheet } from "react-native";
import calendario from '../assets/calendario.png'

export default function Calendario()
{
    return(
        <View>
            <Image style={css.img} source={require("./../assets/calendario.png")}></Image>
        </View>
    )
}
const css = StyleSheet.create({
    img: {
        height: 689,
        width: 500,
        resizeMode: "stretch",
        marginLeft: -50
    }
})