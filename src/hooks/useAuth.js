import axios from "axios";
const BASE_URL = "http://localhost:8000/api";

export const useAuth = () => {
  const auth = async ({ mail, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth`, { mail, password });
      if (data && data.JWT) {
        localStorage.setItem("userAuth", data.JWT);
      }
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  const logout = () => {
    localStorage.removeItem("userAuth");
  };
  return {
    auth,
    logout,
  };
};
