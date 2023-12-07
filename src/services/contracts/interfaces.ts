import { User } from "../../models/User"

export interface AuthLoginRequest {
    email: string
    senha: string
}

export interface AuthLoginResponse {
    access_token: string
}

export interface AuthSignupRequest {
    email: string
    senha: string
    telefone: string
    primeiroNome: string
    segundoNome: string
}

export interface AuthSignupResponse {
    message: string
}

export interface EstabelecimentosProximosRequest {
    lat: number
    long: number
}

export interface EstabelecimentosAllRequest {
    porNome?: string
    tipoServico?: string[]
}
