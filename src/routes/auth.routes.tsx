import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen"
import { LoginScreen } from "../screens/LoginScreen"


export type AuthRoutesParams = {
    login: undefined
    signUp: undefined
}

const Stack = createNativeStackNavigator<AuthRoutesParams>()

export const AuthRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: `#003840`
                }
            }}
        >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signUp" component={HomeScreen} />
        </Stack.Navigator>
    )
}