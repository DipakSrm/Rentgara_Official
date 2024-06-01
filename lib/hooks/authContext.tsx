"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getSession, deleteSession } from "@/auth/route";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextType {
  isLogged: boolean;
  handleDeleteSession: () => Promise<void>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children ,protectedRoutes}: { children: ReactNode ,protectedRoutes:string[]}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const router = useRouter();
  console.log("protextes",protectedRoutes)
const path = usePathname();
  useEffect(() => {
    const checkSession = async () => {
      const sessionExists = (await getSession()).success;
      setIsLogged(sessionExists);
    };
    checkSession();
  }, []);
  useEffect(() => {
    if (protectedRoutes.includes(path) && !isLogged) {
     router.push("/_not-found?message=Please login");
    }
  }, [isLogged, path, protectedRoutes, router]);

  const handleDeleteSession = async () => {
    try {
      await deleteSession();
      setIsLogged(false);
      router.push("/");
    } catch (error) {
      console.error("Failed to delete session:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, handleDeleteSession ,setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
