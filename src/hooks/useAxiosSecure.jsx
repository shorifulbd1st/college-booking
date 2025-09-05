import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        // console.log('error caught from our verify own axios interceptor--->', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          handleLogout();
          navigate("/signin");
        }
      }
    );
  }, [handleLogout, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
