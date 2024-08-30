import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import Style from "@/app/Styles/Default";
import Produto from "@/app/Models/Produto";


function ListaProdutos({ produtos}:{produtos: Produto[]}) {
    return (
    <ScrollView>
        <View style = {Style.container}>
        {produtos.map((p) => 
        <ItemProduto produto ={p}key={p.id}>
            
        </ItemProduto>)}
        </View>
    </ScrollView>
    )
}

export default ListaProdutos