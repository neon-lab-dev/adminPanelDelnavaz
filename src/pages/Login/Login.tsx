/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        "https://podcast-backend-snowy.vercel.app/api/v1/auth/admin/login",
        data,
        {
          withCredentials: true,
        }
      );

      const user = response?.data?.data
      // Store the token in a cookie
      const token = response.data?.token;
      if (token) {
        Cookies.set("authToken", token, { expires: 7 });
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Logged in successfully!");
        navigate("/dashboard/users")
      } else {
        toast("Token not found in the response.");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Invalid login credentials.");
      setIsLoading(false);
    } finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-7 p-[56px] max-w-[500px] mx-auto border order-[#EBEDF0] rounded-xl"
      >
        <img src={logo} alt="logo" className="w-20" />

        <h1 className="text-[#463730] font-bold text-2xl">
          Login to your account
        </h1>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-[#424242]">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-[#424242]">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
            placeholder="Enter Your Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          {/* <div className="w-full flex justify-end items-end">
            <small className="cursor-pointer text-blue-600">
              Forgot Password?
            </small>
          </div> */}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-[#463730] text-white rounded-md w-full p-2 font-semibold cursor-pointer">
            {
              isLoading? "Loading..." : "Login"
            }
        </button>
      </form>
    </div>
  );
};

export default Login;
