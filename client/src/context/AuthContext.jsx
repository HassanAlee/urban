import React, { useContext, useState } from "react";
const AuthContext = React.createContext();
import toast from "react-hot-toast";
import axios from 'axios'
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  //   handle the signup
  const handleSignup = async (values) => {
    setLoading(true);
    console.log(values);
    // try {
    //   const res = await axios.post(
    //     "http://localhost:3000/user/register",
    //     values
    //   );
    //   toast.success(res.data.message)
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.message || "Something went wrong, please try again");
    // } finally {
    //   setLoading(false)
    // }
  };
  return (
    <AuthContext.Provider value={{ loading, handleSignup }}>
      {children}
    </AuthContext.Provider>
  );
};
// custom hook for using context
export const useAuthContext = () => useContext(AuthContext);
export { AuthContext, AuthProvider };
