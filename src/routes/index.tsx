import { useContext } from "react"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { AuthContext } from "../contexts/Auth.context"

export const Routes = () => {

    const {logged} = useContext(AuthContext)

    return (
        logged ? <AppRoutes /> : <AuthRoutes />
    )
}