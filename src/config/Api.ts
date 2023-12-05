import axios from "axios"


export class Api {
    static readonly urlBase: string = "https://bullfrog-garb.cyclic.app/"

    static readonly instance = axios.create({
        baseURL: this.urlBase,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}