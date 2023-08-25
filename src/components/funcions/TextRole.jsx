export default function TextRole (roleName) {
    if (roleName === "Seguridad") return "Personal de seguridad";
    else if (roleName === "Cliente") return "Cliente";
    else if (roleName === "Seguridad") return "Personal de Seguridad"
    else if (roleName === "Administrador") return "Administrador"
    else if (roleName === "Sala") return "Personal de Sala"
    else return "User"
}