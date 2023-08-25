import React,{useState,useEffect} from "react";
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';

export default function DateComponent() {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const formattedDate = format(currentDate, "eeee, d 'de' MMMM h:mm:ss a", { locale: esLocale });
  
    return formattedDate
  }
