import { isAxiosError } from "axios";
import { Api } from "../config/Api";
import { AuthContract } from "./contracts/auth.contract";
import { AuthLoginRequest, AuthLoginResponse } from "./contracts/interfaces";
import { User } from "../models/User";


export class Auth implements AuthContract {
    constructor(
        private readonly apiInstance = Api.instance
    ) {
        this.apiInstance.defaults.baseURL += '/auth'
    }
    
    async login({email, senha} : AuthLoginRequest) {
        const response = await this.apiInstance.post<AuthLoginResponse>('/login', {
            email,
            senha
        })

        return response.data
    }

    async me<T>(token: string) {
        const response = await this.apiInstance.get<User>('/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data as T
    }

}