import { useContext, useEffect, useState, createContext } from "react";

// creamos un contexto con valor por defecto false
const AuthContext = createContext({isAuthenticated:false});

// creamos un provedor de contexto 
// que nos servira para nevolver la app entera con su contexto
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {/*aqui abajo se ingresaran las etiquetas hijas */}
            {children}
        </AuthContext.Provider>
    )
};

// creamos un hook que retorna el contexto 
export const useAuth = () => {
    return useContext(AuthContext);
};


