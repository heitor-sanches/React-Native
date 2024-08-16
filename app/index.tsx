import { Text, View, StyleSheet } from "react-native";

const produtos = [
  {id: 1, nome: "Coca-cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 7.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Dolly", preco: 9.5}
];

export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",

  },
  text: {
    color: "white",
    fontSize: 50,
    fontFamily: "sanserifa",

  }

});
