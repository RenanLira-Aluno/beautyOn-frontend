import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"
import { theme } from "../styles/theme"
import { HeaderApp } from "../components/headers/HeaderApp"
import { View } from "react-native"
import { PerfilEstabelecimento } from "../screens/PerfilEstabelecimento"


export type AppRoutesParams = {
    home: undefined
    PerfilEstabelecimento: { id: string}
}

const Stack = createNativeStackNavigator<AppRoutesParams>()

export const AppRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <HeaderApp />,
                contentStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="PerfilEstabelecimento" component={PerfilEstabelecimento} />
        </Stack.Navigator>
    )
}
