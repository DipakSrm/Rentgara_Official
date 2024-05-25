"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { signInAuth } from "../../auth/route";
import { useAuth } from "@/lib/hooks/authContext";

type FormData = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();
const {setIsLogged}=useAuth();
  const onSubmit=async (data: FormData) => {
    try {
      const response = await signInAuth(data );
      if(response.success){
        setIsLogged(true)
        router.push("/")
        toast.success("User signed in successfully")
      }
      else{
        toast.error("Invalid Credentials")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold ">
                    Login With Your Credentials
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        {...register("email", { required: true })}
                      />
                      {errors.email && toast.error("Email is required")}
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && toast.error("Password is required")}
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative flex items-center justify-between">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                      <button
                        className="bg-pink-500 text-white rounded-md px-2 py-1"
                        onClick={() => router.push("/SignUpPage")}
                      >
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
