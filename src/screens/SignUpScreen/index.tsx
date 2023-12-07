import { useCallback, useContext, useReducer, useState } from "react"
import { View, Text } from "react-native"
import { AuthContext } from "../../contexts/Auth.context"
import { AuthSignupRequest } from "../../services/contracts/interfaces"


export const SignUpScreen = () => {
    const {signup} = useContext(AuthContext)

    const [data, setData] = useReducer((state : AuthSignupRequest, newState : Partial<AuthSignupRequest>) => 
        ({...state, ...newState}), {} as AuthSignupRequest)
        // exemplo de uso: onChangeText={(text) => setData({email: text})}

    const handleButtonSignUp = useCallback(async () => {
        await signup({
            ...data
        })
    }, [data])

    return (
        <View>
            <Text>SignUpScreen</Text>
        </View>
    )

}
