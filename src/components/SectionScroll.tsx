import { FlatList, FlatListProps, ScrollView } from "react-native"
import { EstabelecimentoWithServices } from "../models/User"
import { ItemCard } from "./ItemCard"


interface SectionScrollProps {
    data: EstabelecimentoWithServices[]
}
export const SectionScroll = ({...props} : SectionScrollProps) => {

    return (
        <FlatList
            data={props.data}
            renderItem={({item}) => <ItemCard id={item.id} nome={item.nomeEmpresa} fotoPerfil={item.fotoPerfil} />}
            horizontal
            contentContainerStyle={{gap: 16}}
            showsHorizontalScrollIndicator={false}
            fadingEdgeLength={86}
        />
    )
}
