import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, profileRequest } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [isAutenticaded, setIsAutenticaded] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()
    const login = async (user) => {
      try {
        const res = await loginRequest(user);
        setIsLoading(false)
        setIsAutenticaded(true)
        if(res.data) navigate('/profile')
      } catch (error) {
        setErrors(error.response.data)
        console.log(error.response.data)
      }
    }

  // Eliminar errores despues de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    // Define la función asíncrona dentro del useEffect
    const fetchData = async () => {
      try {
        const res = await profileRequest(); 
        if(res.data) {
          setIsAutenticaded(true);
          setUser(res.data)
          setIsLoading(false)
          return
        }
      } catch (error) {
        navigate('/login')
      }

    };
  
    fetchData();
  }, [user]); 

  return (
    <AuthContext.Provider value={{ isAutenticaded,setIsAutenticaded,login,errors,isLoading}}>
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
