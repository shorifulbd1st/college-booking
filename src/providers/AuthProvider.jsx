import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const notify = (value, message) => {
    if (value == "success") toast.success(`${message}`, { toastId: "hello" });
    else toast.error(`${message}`, { toastId: "hello" });
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState("");

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        notify("success", "logout successfully");
      })
      .catch((error) => {});
  };

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // useEffect(() => {
  //     console.log('user--->', user)
  // }, [user])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
        // console.log(data)
      } else {
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    notify,
    user,
    setUser,
    loading,
    newEmail,
    setNewEmail,
    handleGoogleLogin,
    handleRegister,
    handleLogin,
    updateUserProfile,
    forgetPassword,
    handleLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
