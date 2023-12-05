import { User } from "../../models/User";
import { AuthLoginRequest, AuthLoginResponse } from "./interfaces";


export interface AuthContract {
    login({} : AuthLoginRequest) : Promise<AuthLoginResponse>
    me(token: string) : Promise<User>
}