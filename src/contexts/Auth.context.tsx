import { PropsWithChildren, createContext, useCallback } from "react"
import { Cliente, Estabelecimento, User } from "../models/User"
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage"
import { AuthLoginRequest, AuthSignupRequest } from "../services/contracts/interfaces"
import { Auth } from "../services/auth"
import { jwtDecode } from "jwt-decode"
import { TokenDecode } from "../models/tokenDecode"
import { SignIn } from "phosphor-react-native"


interface AuthContextData {
    user: User | null,
    logged: boolean,
    token: string | null,
    login: (data: AuthLoginRequest) => Promise<void | string>
    logout: () => Promise<void>
    signup: (data: AuthSignupRequest) => Promise<void | string>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)
const storage = new MMKVLoader().withEncryption().withInstanceID(`Users`).initialize()
const AuthApi = new Auth()

interface AuthProviderProps extends PropsWithChildren { }
export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useMMKVStorage<User | null>(`user`, storage, null)
    const [token, setToken] = useMMKVStorage<string | null>(`token`, storage, null)

    const login = useCallback(async ({ email, senha }: AuthLoginRequest) => {
        try {
            const token = await AuthApi.login({ email, senha })
            setToken(token.access_token)

            const decode: TokenDecode = jwtDecode(token.access_token)

            const user = await AuthApi.me<Cliente | Estabelecimento>(token.access_token)

            setUser(user)

        } catch (error: any) {
            console.log(error)
            return error.message
        }

    }, [setUser, setToken])

    const signup = useCallback(async ({...body} : AuthSignupRequest) => {
        try {
            await AuthApi.signup({...body})

            await login({email: body.email, senha: body.senha})


        } catch (error: any) {
            console.log(error)
            return error.message
        }
    }, [setUser])

    const logout = useCallback(async () => {
        setUser(null)
        setToken(null)
    },[])

    return (
        <AuthContext.Provider value={{ user, logged: !!user, token, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    )
}