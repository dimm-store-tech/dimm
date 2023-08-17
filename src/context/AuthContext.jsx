import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth.api";

const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [isAutenticaded, setIsAutenticaded] = useState(false);

    const login = async (user) => {
      try {
        const res = await loginRequest(user);
        console.log(res)
      } catch (error) {
        
      }
    }




  return (
    <AuthContext.Provider value={{ isAutenticaded,setIsAutenticaded,login}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}
