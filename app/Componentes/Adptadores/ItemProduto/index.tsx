import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import React from "react";
import { Text, View } from "react-native";

interface PropProd{
    produto:Produto,
}

const ItemProduto: React.FC<PropProd> = ({produto})=>{

    console.log(produto)
return(
    <View style = {Style.card}>
        <Text style ={Style.cardText}>{produto.nome}</Text>
        <Text style = {Style.cardText}>{produto.preco}</Text>
    </View>
)

}

export default  ItemProduto;