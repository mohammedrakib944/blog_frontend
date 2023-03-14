import { useRouter } from "next/router";
import axiosBase from "../utils/axiosSetup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const admin = () => {
  // const { posts } = useContext(blogContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosBase({
        method: "POST",
        url: "/auth/login",
        data: {
          username,
          password,
        },
        withCredentials: true,
      });
      router.push("/dashboard");
    } catch (err) {
      let errMessage = err.response?.data?.message || "There is an error!";
      console.log("Error: ", errMessage);
      toast.error(errMessage);
    }
  };

  return (
    <div className="min-h-[480px]">
      <ToastContainer theme="colored" />
      <div>
        <h2 className="text-3xl mx-auto text-center py-10 font-bold mt-10">
          Admin Login
        </h2>
        <div>
          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handleLogin}
          >
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button
              type="submit"
              className="w-[250px] btn btn-primary rounded-full mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default admin;
