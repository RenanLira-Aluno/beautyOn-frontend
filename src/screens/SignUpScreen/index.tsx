import { useCallback, useContext, useState } from "react"
import { View, Text } from "react-native"
import { AuthContext } from "../../contexts/Auth.context"
import { AuthSignupRequest } from "../../services/contracts/interfaces"


export const SignUpScreen = () => {
    const {signup} = useContext(AuthContext)

    const [data, setData] = useState<AuthSignupRequest>({} as AuthSignupRequest)


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
