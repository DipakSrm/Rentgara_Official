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
import { databases } from "../database";
import { Query } from "appwrite";

interface SessionData{
  $id:string | undefined;
email:string | undefined;
name:string | undefined ;
phone?:string | undefined ;

}
interface UserDataProps {
  $id: string | undefined;
  Cur_Long: number | undefined | null;
  Cur_Lat: number | undefined | null;
  Type: string | undefined | "";

}
interface AuthContextType {
  isLogged: boolean;
  handleDeleteSession: () => Promise<void>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  sessionData:SessionData;
  userData:UserDataProps;
}
//this is for retrieving customer data


const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children ,protectedRoutes}: { children: ReactNode ,protectedRoutes:string[]}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [sessionData,setSessionData]=useState<SessionData>({email:"",name:"",$id:"",phone:""})
  const [userData,setUserData]=useState<UserDataProps>({Cur_Lat:null,Cur_Long:null,$id:"",Type:""})
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
        if(sessionData?.email){
         const response=await  getUserId(sessionData.email);
         if(response?.sucess){
            const data=response.data;
             console.log("response of user",data);
            setUserData({Cur_Lat:data.Cur_Lat,Cur_Long:data.Cur_Long,$id:data.$id,Type:data.Type})
          
         }
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

  //gettying user id

async function getUserId(email: string) {
  try {
    const response = await databases.listDocuments(
      "66503d34000d156b3ef9",
      "66503d76000de6feb81c",
      [
        Query.equal("Email",email)
      ]
      
    );

    return {
      sucess: true,
      message: "User id retrieved successfully",
      data: response.documents[0],
    };

  } catch (error) {
    console.log(error);
  }
}

console.log("userdata",userData)
  return (
    <AuthContext.Provider value={{ isLogged, handleDeleteSession ,setIsLogged,sessionData,userData}}>
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
