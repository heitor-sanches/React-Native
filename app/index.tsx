import { useState,useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adptadores/ListaProdutos";
import Style from "./Styles/Default";
import axios from "axios";



export default function Index() {
 let [contador, setContador]=useState(0);
 let[produtos,setProdutos]=useState([]);

 useEffect(()=>{
  carregarProdutos();
},[]);

function carregarProdutos(){
  axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
    .then((resp)=>{
      setProdutos(resp.data);
    })

}

  return (
    <View
      style={Style.container}
      >
      <ListaProdutos produtos={produtos}></ListaProdutos>

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
