import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import { Text, View } from "react-native";


function ItemProduto({produto}:{produto:Produto}){
return(
    <View style = {Style.card}>
        <Text style ={Style.cardText}>{produto.nome}</Text>
        <Text style = {Style.cardText}>{produto.preco}</Text>
    </View>
)

}

export default  ItemProduto;