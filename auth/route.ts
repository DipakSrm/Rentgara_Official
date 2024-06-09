import { account, databases } from "@/lib/database";
import { ID } from "appwrite";

async function signUpAuth({ email, password, name }: { email: string; password: string; name: string }) {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    return {
      success: true,
      message: "User signed up successfully",
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An error occurred while signing up",
    };
  }
}

async function signInAuth({ email, password }:{email:string,password:string}) {
  try {
    const response = await account.createEmailPasswordSession(email, password);
  
    return {
      success: true,
      message: "User signed in successfully",
      data: response,
      status: 200,
    };
  } catch (error:any) {
    return {
      success: false,
      message: error.message || "An error occurred while signing in",
    };
  }
}

async function deleteSession() {
  try {
    const response = await account.deleteSession("current");
    return {
      success: true,
      message: "Session deleted successfully",
      data: response,
    };
  } catch (error:any) {
    return {
      success: false,
      message: error.message || "An error occurred while deleting the session",
    };
  }
}

async function getSession() {
  try {
    const response = await account.get();
    
    return {
      success: true,
      message: "Session retrieved successfully",
      data: response,
    };
  } catch (error:any) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving the session",
    };
  }
}


export { signUpAuth, signInAuth, deleteSession, getSession };
