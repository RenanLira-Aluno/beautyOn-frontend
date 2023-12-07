import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"
import { theme } from "../styles/theme"
import { HeaderApp } from "../components/headers/HeaderApp"
import { View } from "react-native"


export type AppRoutesParams = {
    home: undefined
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
        </Stack.Navigator>
    )
}