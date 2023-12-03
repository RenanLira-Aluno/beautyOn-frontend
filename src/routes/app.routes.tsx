import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"


export type AppRoutesParams = {
    home: undefined
}

const Stack = createNativeStackNavigator<AppRoutesParams>()

export const AppRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarColor: `transparent`,
                
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    )
}