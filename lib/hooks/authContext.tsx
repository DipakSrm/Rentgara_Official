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

interface SessionData{
  $id:string | undefined;
email:string | undefined;
name:string | undefined;
phone?:string | undefined;

}

interface AuthContextType {
  isLogged: boolean;
  handleDeleteSession: () => Promise<void>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  sessionData:SessionData;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children ,protectedRoutes}: { children: ReactNode ,protectedRoutes:string[]}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [sessionData,setSessionData]=useState<SessionData>({email:"",name:"",$id:"",phone:""})
  const router = useRouter();
  console.log("protextes",protectedRoutes)
const path = usePathname();
  useEffect(() => {
    const checkSession = async () => {
      const sessionExists = (await getSession()).success;
      if(sessionExists){
        setIsLogged(sessionExists);
        const sessionData = (await getSession()).data;
        if (sessionData) {
          const { email, $id, name, phone }: SessionData = sessionData;
          setSessionData({ email: email, name: name, $id: $id, phone: phone });
        }
      }
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
    <AuthContext.Provider value={{ isLogged, handleDeleteSession ,setIsLogged,sessionData}}>
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
