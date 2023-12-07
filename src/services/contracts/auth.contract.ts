import { User } from "../../models/User";
import { AuthLoginRequest, AuthLoginResponse, AuthSignupRequest, AuthSignupResponse } from "./interfaces";


export interface AuthContract {
    login({} : AuthLoginRequest) : Promise<AuthLoginResponse>
    me(token: string) : Promise<User>
    signup({} : AuthSignupRequest) : Promise<AuthSignupResponse>
}