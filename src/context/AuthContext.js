// @/context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // Dummy credentials
    const DUMMY_EMAIL = "user@example.com";
    const DUMMY_PASSWORD = "password123";

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      const userData = {
        name: "John Doe",
        email: DUMMY_EMAIL,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/");
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  // Signup function
  const signup = (name, email, password) => {
    // For demo, we'll accept any signup and store the user
    const userData = {
      name,
      email,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    router.push("/");
    return { success: true };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}