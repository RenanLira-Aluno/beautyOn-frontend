import { useContext, useEffect } from "react"
import { PageContainer } from "../../styles/Containers.style"
import { Auth } from "../../services/auth"
import { AuthContext } from "../../contexts/Auth.context"




export const LoginScreen = () => {

    const {login} = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const res = await login({email: "renan@email.com", senha: "12345"}) 

        })()
    }, [])


    return (
        <PageContainer>

        </PageContainer>
    )
}