import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar, View } from "react-native"
import { AppRoutesParams } from "../../routes/app.routes"
import { Titulo } from "../../styles/Texto.style"
import styled from "styled-components/native"
import { moderateScale, verticalScale } from "react-native-size-matters"
import { theme } from "../../styles/theme"


const HeaderAppContainer = styled.View`
    height: ${verticalScale(86)}px;
    padding-top: ${StatusBar.currentHeight}px;
    padding-left: ${moderateScale(16)}px;
    background-color: ${theme.colors.secondary};
`

export const HeaderApp = () => {

    const navigation = useNavigation<NavigationProp<AppRoutesParams>>()
    const route = useRoute<RouteProp<AppRoutesParams>>()


    return (
        <HeaderAppContainer>
            <Titulo>BeautyOn</Titulo>
        </HeaderAppContainer>
    )
}