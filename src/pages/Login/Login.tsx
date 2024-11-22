import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="w-full min-h-screen py-10 px-3 flex justify-center items-center">
      <div className="w-full sm:w-[590px] p-20 border flex flex-col gap-7 shadow-md rounded-md">
        <img src={logo} alt="logo" className="w-20" />

        <h1 className="text-[#463730] font-bold text-2xl">
          Login your account
        </h1>
        <div className="w-full">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="w-full">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Password"
          />
          <div className="w-full flex justify-end items-end">
            <small className="cursor-pointer text-blue-600">
              Forget Password?{" "}
            </small>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-[#463730] text-white rounded-md w-full p-2 font-semibold"
        />
      </div>
    </div>
  );
};

export default Login;
