import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const produtos = [
  { id: 1, nome: "Coca-cola", preco: 5.5 },
  { id: 2, nome: "Pepsi", preco: 7.5 },
  { id: 3, nome: "Fanta", preco: 5.5 },
  { id: 4, nome: "Dolly", preco: 9.5 }
];



export default function Index() {
 let [contador, setContador]=useState(0);
  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p) => (
        <View>
          <Text style={estilo.titulo}>{p.nome}</Text>
          <Text style ={estilo.text}>R${p.preco.toFixed(2)}</Text>
        </View>
      )
      )}

      <Button title={`Clicado ${contador}`} onPress={clicarBotao}></Button>


    </View>
  );
  function clicarBotao(){
    setContador(contador+1);
  }
  
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,
    

  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",

  },

  titulo:{
    color: "black",
    fontSize: 30,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  }

});
