import { jwtDecode } from "jwt-decode";

const getRole = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);

    return decoded.role;
};

export default getRole;
