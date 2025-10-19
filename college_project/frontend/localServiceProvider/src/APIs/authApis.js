import axios from "axios";

export const handleAlreadyLogged = async (token) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/already-logged-in`,{}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("dsdsd",response.data)
    return response.data; // ✅ returns user info if valid
  } catch (error) {
    console.error("Token validation failed:", error);
    return null;
  }
};

export const logOut = async (token) => {
try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/log-out`,{}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("dsdsd",response.data)
    return response.data; // ✅ returns user info if valid
  } catch (error) {
    console.error("Token validation failed:", error);
    return null;
  }
}