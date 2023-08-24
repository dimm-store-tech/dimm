import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, profileRequest } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import axios from '../api/axiosConfig'
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
        window.localStorage.setItem('token',res.data.token );
        if(res.data) {
          console.log(res.data.userFound)
          setUser(res.data.userFound) 
          setIsLoading(false)
          setIsAutenticaded(true) 
          navigate('/profile')
        } 
      } catch (error) {
        setErrors(error.response.data)
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
        const token = localStorage.getItem('token');
        if(!token) return navigate('/login');
        axios.defaults.headers['x-access-token'] = token; // Agrega el token a los encabezados
        const res = await profileRequest(); 
        console.log(res.data)
        if(res.data) {
          setUser(res.data)
          setIsAutenticaded(true);
          setIsLoading(false)
          return
        }
      } catch (error) {
        navigate('/login') //Navergar a la pagina de error
      }

    };
      fetchData();
  }, []); 

  return (
    <AuthContext.Provider value={{ isAutenticaded,setIsAutenticaded,login,errors,isLoading,user}}>
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
