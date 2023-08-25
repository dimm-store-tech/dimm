import React, {useEffect} from "react";
import { useAuth } from "../context/AuthContext";
import DateComponent from "../components/DateComponent";
import TextRole from "../components/funcions/TextRole";
export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="mb-6 mt-16 w-full flex flex-col items-center mx-auto">
        <div className="bg-blue-600 color-text text-center w-32 h-32 rounded-full border flex items-center justify-center overflow-hidden">
          {user.picture == null ? (
            <h1 className="text-5xl text-white">{user.name.charAt(0)}</h1>
          ) : (
            <img src={user.picture} /> //Agregar foto de perfil aqui
          )}
        </div>
      </div>

      {/* Text profile */}
      <div className="text-center border bg-white w-full h-full color-text font-bold py-4">
        <h2 className="text-2xl">{`${user.paternal_surname} ${user.maternal_surname} ${user.name}`}</h2>
        <h2 className="color-text-primary my-2">{TextRole(user.role.name)}</h2>
        <h2>DNI: {user.dni}</h2>
        <div className="border my-5 mt-16">
          <p className="p-3 bg-gray-500  text-white font-normal">{DateComponent()}</p>
        </div>
      </div>
    </div>
  );
}
