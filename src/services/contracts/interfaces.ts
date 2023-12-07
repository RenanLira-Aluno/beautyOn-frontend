import { User } from "../../models/User"

export interface AuthLoginRequest {
    email: string
    senha: string
}

export interface AuthLoginResponse {
    access_token: string
}

export interface EstabelecimentosProximosRequest {
    lat: number
    long: number
}

