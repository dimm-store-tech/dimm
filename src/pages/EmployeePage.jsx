import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig.js";
import { getEmployeesRequest } from "../api/Employee.api";
import TextRole from "../components/funcions/TextRole.jsx";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");
      axios.defaults.headers["x-access-token"] = token;
      const res = await getEmployeesRequest();
      setEmployees(res.data);
    }

    if (employees.length <= 0) {
      getEmployees();
    }
  }, [employees]);

  useEffect(() => {
    console.log(employees); // Esto mostrará el estado actualizado después de que se haya actualizado.
  }, [employees]);

  return (
    <div>
      <ul>
        {employees.map((employee, index) => (
            <div key={index} className="flex items-center mx-3 mt-6 mb-4 p-3 text-white bg-gray-500 rounded shadow">
                <img className="w-10 h-10 rounded-full mr-4" src={employee.user == null ? "null" : employee.user.picture} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                    <p className="leading-none text-base font-bold">{employee.user == null ? "null" : employee.user.name + ' ' +  employee.user.paternal_surname + ' ' + employee.user.maternal_surname}</p>
                    <p className="">{employee.user == null ? "null" : TextRole(employee.user.role.name)}</p>
                </div>
            </div>
        ))}
      </ul>
    </div>
  );
}
