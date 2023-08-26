import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { getEmployeeRequest } from "../../api/Employee.api";
import { InputForm2 } from "../../components/specific/ComponentsForm";
import TextRole from '../../components/funcions/TextRole'
export default function UpdateEmployee() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();
  console.log("adsadsads", id);
  useEffect(() => {
    async function getEmployee() {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");
      axios.defaults.headers["x-access-token"] = token;
      const res = await getEmployeeRequest(id);
      setEmployee(res.data);
    }

    if (employee == null) {
      getEmployee();
    }
  }, [employee]);

  useEffect(() => {
    console.log("El elmplopyee ", employee); // Esto mostrará el estado actualizado después de que se haya actualizado.
  }, [employee]);

  if (employee == null) return <h1>Cargando...</h1>;
  return (
    <div>
      {/* Formik */}
      <Formik
        initialValues={{
          name: employee == null ? null : employee.user.name,
          password: employee == null ? null : employee.user.password,
          paternal_surname: employee == null ? null : employee.user.paternal_surname,
          maternal_surname: employee == null ? null : employee.user.maternal_surname,
          dni: employee == null ? null : employee.user.dni,
          permissions: employee == null ? null : employee.user.permissions,
          role: employee == null ? null : employee.user.role,
          phone: employee == null ? null : employee.user.phone,
          address: employee == null ? null : employee.address,
          agge: employee == null ? null : employee.agge,
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="m-2 mt-5">
              <div className="flex flex-row gap-3 text-black w-full">
                <img
                  className="w-40"
                  src={employee == null ? null : employee.user.picture}
                  alt="Foto de perfil"
                />

                <div>
                  <InputForm2
                    labelName="Nombre"
                    type="text"
                    name="name"
                    autofocus={true}
                    onChange={handleChange}
                    value={values.name}
                  />

                  <InputForm2
                    labelName="Apellido Paterno"
                    type="text"
                    name="paternal_surname"
                    onChange={handleChange}
                    value={values.paternal_surname}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 overflow-hidden">
                <InputForm2
                  labelName="DNI"
                  type="text"
                  name="dni"
                  onChange={handleChange}
                  value={values.dni}
                />
                <InputForm2
                  labelName="Contraseña"
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />

                {/* Permissions */}
                <div className="mb-4">
                  <h2 className="text-lg mb-3 font-bold">Permisos</h2>
                  <table>
                      <tbody>
                      {values.permissions.map(permission => (
                        <tr key={permission._id}>
                          <td><input className="h-5 w-5" type="checkbox" name="" id="" /></td>
                          <td className="pl-1">{permission.name}</td>
                        </tr>
                      ))}
                      </tbody>
                  </table>
                </div>

                <div className="flex flex-col text-black">
                  <label htmlFor="countries" className="text-white text-lg mb-3 font-bold">Rol</label>
                  <select id="countries" className="bg-transparent text-white w-full py-2 mb-4 px-3 border-b-2 border-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500">
                    <option className="text-black">{TextRole(values.role.name)}</option>
                    <option className="text-black" value="US">Administrador</option>
                    <option className="text-black" value="US">Personal de Seguridad</option>
                    <option className="text-black" value="US">Personal de Sala</option>
                    <option className="text-black" value="US">Cliente</option>
                  </select>
                </div>

              <InputForm2
                  labelName="Telefono"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  />
              <InputForm2
                  labelName="Edad"
                  type="text"
                  name="agge"
                  onChange={handleChange}
                  value={values.agge}
                  />
              <InputForm2
                  labelName="Dirección"
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  />
            
              </div>


              {/* submit */}
              <button
                type="submit"
                className="mt-6 button-primary w-full py-2 text-white rounded-xl md:rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
