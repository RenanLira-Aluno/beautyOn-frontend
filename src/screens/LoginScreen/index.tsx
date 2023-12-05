import { useCallback, useContext, useEffect, useState } from "react"
import { FormContainer, GroupInputContainer, PageContainer } from "../../styles/Containers.style"
import { Auth } from "../../services/auth"
import { AuthContext } from "../../contexts/Auth.context"
import { InputWithIcon } from "../../components/InputWithIcon"
import { EnvelopeSimple, Key } from "phosphor-react-native"
import { Titulo } from "../../styles/Texto.style"
import styled from "styled-components/native"
import { verticalScale } from "react-native-size-matters"
import { Button } from "../../components/Button"
import { ScrollView, Text } from "react-native"
import { ScrollViewContainer } from "../../styles/ScrollView.style"
import { err } from "react-native-svg"


const LoginPageContainer = styled(PageContainer)`
    padding: 0;
    align-items: center;
    justify-content: center;
    gap: ${verticalScale(32)}px;
`

export const LoginScreen = () => {

    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [error, setError] = useState<string | undefined>(``)

    const handlePress = useCallback(async () => {
        const error = await login({email, senha: password})
        setError(error ?? undefined)
    }, [email, password])


    return (
        <ScrollViewContainer>

        <LoginPageContainer>
            <Titulo $color="#fff" >
                Faça Seu Login Para Continuar
            </Titulo>
            <FormContainer>
                <GroupInputContainer>
                    <InputWithIcon Icon={EnvelopeSimple} keyboardType="email-address" 
                        placeholder="E-mail" 
                        value={email} 
                        onChangeText={(text) => setEmail(text)} />
                    <InputWithIcon Icon={Key} 
                        secureTextEntry 
                        placeholder="Senha" 
                        value={password}
                        onChangeText={(text) => setPassword(text)} />
                </GroupInputContainer>
                {error && <Text style={{color: `#fff`}}>{error}</Text>}
                <Button texto="Entrar" width={'100%'} onPress={() => login({email, senha: password})}/>
            </FormContainer>
        </LoginPageContainer>
        </ScrollViewContainer>
    )
}