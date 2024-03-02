import React from "react";
import { Logo } from "./loginassests/constant";
import { Form, Link } from "react-router-dom";
import animImg from "./loginassests/img_4207.gif";
import { BgAnimation } from "./loginassests/constant";

// importing reacticons
import { AiOutlineSwapRight } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="flex place-content-center h-screen p-3 bg-[#e5e5e5e9] ">
      <div className="container md:flex md:p-10 md:my-auto bg-white rounded-lg shadow-md">
        <div className="md:flex-[1] bg-[#ffffff] p-4 md:m-[2rem] rounded-md ">
          <div className="h-20 flex mb-10">
            <div>
              <Logo />
            </div>
          </div>

          <form>
            <p className=" font-philosopher_regular text-3xl m-2">Log In</p>
            <p className="font-abel font-extralight text-[#AAA9AD]">
              If you already have an account log in
            </p>
            <section className="flex flex-col mt-10 m-3">
              <label>E-mail</label>
              <div></div>
              <input
                type="email"
                name="email"
                placeholder="name.email.com"
                className="px-4 py-2 my-2 rounded-full placeholder:text-[#767575] border-2 border-[#767575] hover:bg-slate-50"
              ></input>
            </section>
            <section className="flex flex-col m-3">
              <label>password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="px-4 py-2 my-2 rounded-full placeholder:text-[#767575] border-2 border-[#767575] hover:bg-slate-50"
              ></input>
            </section>
            <button className=" bg-[#FF7F41] text-white mt-10 px-4 p-2 rounded ">
              Login
            </button>
          </form>
          <p className="mt-7 flex flex-col">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 italic">
              Click Here
            </a>
            <Link to={"/dashboard"}>dashboard </Link>
          </p>
        </div>

        <div className="md:flex-[1] relative bg-[#f3c082a4] blur-sm delay-50 hover:blur-none  p-8 rounded-lg">
          {/* the animated background */}
          <BgAnimation />

          <p className=" font-philosopher_regular text-3xl p-4 ">MumbleMate</p>
          <p className="font-abel font-extralight text-[#2c273aaf]">
            Create a new account for additional features
          </p>
          <ol className="flex flex-col gap-6 p-4 mt-10">
            <li className=" inline-flex gap-3 font-extralight font-philosopher_regular italic">
              <TbPointFilled />
              No credit Card
            </li>
            <li className=" inline-flex gap-3 font-extralight font-philosopher_regular italic">
              <TbPointFilled />
              Try Codejet today, its absolutely free
            </li>
            <li className=" inline-flex gap-3 font-extralight font-philosopher_regular italic">
              <TbPointFilled />
              Save your time, work faster
            </li>
          </ol>

          <footer className="filter mix-blend-multiply">
            <div className="p-3 flex justify-between bg-[#d0c7c2ab] bg:opacity-5 place-items-center rounded-lg mt-[35%] ">
              <p className="text-black italic font-abel_regular ">
                Don't have an account?
              </p>
              <Link to={"/register"}>
                <button className="hover:bg-orange-400  hover:text-[white] backdrop-blur-sm bg-white text-[#FF7F41] rounded-lg inline-flex justify-center align-middle gap-2 px-3 py-2 ">
                  Sign Up
                  <AiOutlineSwapRight />
                </button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
