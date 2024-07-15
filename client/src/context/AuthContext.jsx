import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext();
import toast from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [navLoader, setNavLoader] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  //   handle the signup
  const handleSignup = async (values) => {
    setLoading(true);
    console.log(values);
    const formData = new FormData()
    for (let key in values) {
      formData.append(key, values[key])
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/user/register",
        formData, {
        withCredentials: true
      })
      toast.success(res.data.message)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong, please try again");
    } finally {
      setLoading(false)
    }
  };
  // get the user info
  const getMyInfo = async () => {
    try {
      const res = await axios.get('http://localhost:3000/user/get-my-info', { withCredentials: true });
      setUser(res.data.user)
    } catch (error) {
      console.log(error);
    } finally {
      setNavLoader(false)
    }
  }
  // login user
  const loginUser = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/user/login', data, {
        withCredentials: true
      })
      toast.success(res.data.message)
      setUser(res.data.user)
      setTimeout(() => {
        navigate("/")
      }, 1500)
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }
  useEffect(() => {
    if (!user) {
      getMyInfo()
    }
  }, [])
  return (
    <AuthContext.Provider value={{ loading, handleSignup, user, loginUser, navLoader }}>
      {children}
    </AuthContext.Provider>
  );
};
// custom hook for using context
export const useAuthContext = () => useContext(AuthContext);
export { AuthContext, AuthProvider };
