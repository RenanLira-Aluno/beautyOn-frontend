import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { StatusBar, TouchableOpacity, View } from "react-native"
import { AppRoutesParams } from "../../routes/app.routes"
import { Titulo } from "../../styles/Texto.style"
import styled from "styled-components/native"
import { moderateScale, verticalScale } from "react-native-size-matters"
import { theme } from "../../styles/theme"
import { ArrowArcLeft, ArrowCircleLeft } from "phosphor-react-native"


const HeaderAppContainer = styled.View`
    height: ${verticalScale(86)}px;
    flex-direction: row;
    gap: ${moderateScale(16)}px;
    align-items: center;
    padding-top: ${StatusBar.currentHeight}px;
    padding-left: ${moderateScale(16)}px;
    background-color: ${theme.colors.secondary};
`

export const HeaderApp = () => {

    const navigation = useNavigation<NavigationProp<AppRoutesParams>>()
    const route = useRoute<RouteProp<AppRoutesParams>>()


    return (
        <HeaderAppContainer>
            {navigation.canGoBack() && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowCircleLeft size={32} color="#fff" />
                </TouchableOpacity>
            )}
            <Titulo>BeautyOn</Titulo>
        </HeaderAppContainer>
    )
}
