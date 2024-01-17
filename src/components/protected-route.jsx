
import{ Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

/*
El propopsito de crear el protected es 
para hacer un alto o un stop  antes de mostrar
el componente dashboard  
*/

export default function Protected(){
    // auth es un hook creado por mi para retornar el valor del context
const auth = useAuth();

    return auth ? <Outlet></Outlet> : <Navigate to="/"/>
};