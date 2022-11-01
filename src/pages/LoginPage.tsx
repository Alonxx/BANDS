import React from "react";
import { useUserDataStore } from "src/stores";

export const LoginPage: React.FC = () => {
  const [user, setUser] = React.useState<string>("");
  const { loginUser } = useUserDataStore();

  const handleLoginUser = () => {
    loginUser(user);
  };

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div>
        <span className=" text-3xl text-yellow-web md:text-6xl">
          Nubceo - Bands
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-20">
        <input
          onChange={(e) => handleUserInputChange(e)}
          placeholder="User"
          className="w-full rounded-md outline-none pl-2 h-[30px]"
        />
        <input
          type={"password"}
          placeholder="Password"
          className="w-full rounded-md outline-none pl-2 h-[30px] "
        />
      </div>

      <div className="flex flex-col gap-5 justify-center w-full items-center mt-10">
        <button
          onClick={() => handleLoginUser()}
          className="bg-green-500 rounded-md p-2 w-[200px]"
        >
          <span className="text-white ">Login</span>
        </button>
        <button
          onClick={() => handleLoginUser()}
          className="bg-blue-500 rounded-md p-2 w-[200px]"
        >
          <span className="text-white">Register</span>
        </button>
      </div>
    </div>
  );
};
