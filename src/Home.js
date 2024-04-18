import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const App = () => {
  const [data] = useState([
    {
      id: 1,
      title: 'Comunicado 24/10',
      content: 'Por falta ed recursos amanhã não vai ter aula',
    },
    {
      id: 2,
      title: 'Comunicado 24/10',
      content: 'Por falta ed recursos amanhã não vai ter aula',
    },
    {
      id: 3,
      title: 'Título 3',
      content: 'Conteúdo da tela 3',
    },
    {
      id: 4,
      title: 'Título 3',
      content: 'Conteúdo da tela 3',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
    <View>
    <Image style={css.img} source={require("./../assets/casa.webp")}></Image>
    </View>
    <View style={css.rapa}>
    <Image style={css.agen} source={require("./../assets/agenda.webp")}></Image>
    <Image style={css.ema} source={require("./../assets/email.png")}></Image>
    <Image style={css.peo} source={require("./../assets/people.png")}></Image>
    <Image style={css.gps} source={require("./../assets/gps.png")}></Image>
    </View>
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        centerContent={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  item: {
    width: '30%',
    height: '45%',
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    marginTop: 50,
    textAlign: "right"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  caixa: {
    backgroundColor: "lightblue",
    width: "100%",
    height: 180,
    
  }
});

export default App;

const css = StyleSheet.create({
  img: {
      height: 50,
      width: 50,
      borderRadius: 100,
      marginLeft: 15,
      marginTop: 10
  },
  agen: {
    height: 70,
    width: 70,
    marginLeft: 25
  },
  ema: {
    height: 70,
    width: 70,
    marginLeft: 25
  },
  peo: {
    height: 70,
    width: 70,
    marginLeft: 25
  },
  gps: {
    height: 70,
    width: 70,
    marginLeft: 20
  },
  rapa: {
    flexDirection: "row",
    marginTop: 80
  }
})