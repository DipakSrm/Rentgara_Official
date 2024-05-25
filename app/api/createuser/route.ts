import { databases } from "@/lib/database";
import { ID } from "appwrite";
import { signUpAuth } from "@/auth/route";

type InputData = {
  First: string;
  Last: string;
  Email: string;
  Password: string;
  Client_Type: string;
  Ph_Num?: string | null;
  Ward?: string | null;
  Municipality?: string | null;
  Category?: string[] | null;
  CreatedAt: string;
};



export async function POST(req: Request): Promise<Response> {
  if (req.method === "POST") {
    try {
      
      const userData: InputData = await req.json();
      console.log("this is userdata", userData);

      const response1 = await databases.createDocument(
        "66503d34000d156b3ef9",
        "66503d76000de6feb81c",
        ID.unique(),
        {
          First: userData.First,
          Second: userData.Last,
          Email: userData.Email,
          Password: userData.Password,
          Type: userData.Client_Type,
          Ph_No: userData.Ph_Num || null,
          Ward: userData.Ward || null,
          Municipality: userData.Municipality || null,
          Category: userData.Category || null,
          CreatedAt: userData.CreatedAt,
        }
      );

      const [response] = await Promise.all([response1]);
      console.log(response);

      const signUpResponse = await signUpAuth({
        email: userData.Email,
        password: userData.Password,
        name: userData.First,
      });

      return new Response(
        JSON.stringify({ message: "User data received successfully" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error: any) {
      console.error("Error receiving user data:", error.message);
      return new Response(
        JSON.stringify({
          message:
            error.message || "An error occurred while receiving user data",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } else {
    console.error("Invalid request method");
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}