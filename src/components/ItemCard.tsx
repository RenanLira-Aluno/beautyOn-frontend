import { Image, TouchableOpacity, View } from "react-native"
import { TextBase } from "../styles/Texto.style"
import styled from "styled-components/native"
import { moderateScale, scale, verticalScale } from "react-native-size-matters"
import { theme } from "../styles/theme"
import { useCallback } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AppRoutesParams } from "../routes/app.routes"


interface ItemCardProps {
    fotoPerfil?: string
    nome: string
    id: string
}

const CardContainer = styled.View`

    width: ${scale(122)}px;
    background-color: ${theme.colors.secondary};
    align-items: center;
    border-radius: ${moderateScale(8)}px;
    overflow: hidden;
    gap: ${verticalScale(8)}px;
    padding-bottom: ${moderateScale(8)}px;
`
const TextLabel = styled(TextBase)`
    text-align: center;
`

export const urlPadrao = `https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg`

export const ItemCard = ({ ...props }: ItemCardProps) => {
    const navigation = useNavigation<NavigationProp<AppRoutesParams>>()

    const handlePress = useCallback(() => {
        navigation.navigate(`PerfilEstabelecimento`, { id: props.id })
    }, [navigation])


    return (
        <TouchableOpacity activeOpacity={.5} onPress={handlePress}>
            <CardContainer>
                <Image source={{ uri: props.fotoPerfil ?? urlPadrao }} style={{ width: `100%`, aspectRatio: 1, height: `auto` }} />
                <TextLabel>{props.nome}</TextLabel>
            </CardContainer>
        </TouchableOpacity>
    )

}
