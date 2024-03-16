import React, { useState } from "react";
import { BgAnimation, Logo } from "../Login/loginassests/constant";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiOutlineSwapRight } from "react-icons/ai";
// import Alert from "react-bootstrap/Alert";
import Login from "../Login/login";
import axios from "axios";

export default function register() {
  const [data, setdata] = useState([
    {
      username: "",
      email: "",
      password: "",
    },
  ]);

  const [redflag, setRedflag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Authenticaton in form

    if (!data.username || !data.email || !data.password) {
      setRedflag(true);
      alert("all fields are expected to be filled");
    } else {
      setRedflag(false);
      // store variable in laocalstorage
      localStorage.setItem("username", JSON.stringify(data.username));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("password", JSON.stringify(data.password));

      console.log("saved in localStorage");

      async function postdata() {

     
        try {
          const res = await axios.post("http://localhost:8000/api/register", {
            headers: { accept: "application/json" },
            body: JSON.stringify(data),
          });

          const dataRes = await res.json;
          console.log(dataRes);
        } catch (err) {
          console.log(err);
        }
      
    }
      postdata();
      setLogin(!login);
    }
  };

  return (
    <div>
      {login ? (
        <div className="flex place-content-center h-screen p-3 bg-[#e5e5e5e9] ">
          <div className="container md:flex md:p-10 md:my-auto bg-white rounded-lg ">
            <div className="md:flex-[1] bg-[#ffffff] p-4 md:m-[2rem] rounded-md ">
              <div className="h-20 flex mb-10">
                <div>
                  <Logo />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <p className=" font-philosopher_regular text-3xl m-2">
                  Let Us know You!
                </p>
                <p className="font-abel font-extralight text-[#AAA9AD]">
                  Register
                </p>
                <section className="flex flex-col mt-10 m-3">
                  <label className="font-semibold">E-mail</label>
                  <div></div>
                  <input
                    type="email"
                    name="email"
                    placeholder="name.email.com"
                    value={data.email}
                    className="px-4 py-2 my-1 rounded-full placeholder:text-[#767575] border-2 border-[#767575] hover:bg-slate-50"
                    onChange={(e) =>
                      setdata({ ...data, email: e.target.value })
                    }
                  ></input>
                </section>
                <section className="flex flex-col m-3">
                  <label className="font-semibold">Username</label>
                  <div></div>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={data.username}
                    className="px-4 py-2 my-1 rounded-full placeholder:text-[#767575] border-2 border-[#767575] hover:bg-slate-50"
                    onChange={(e) =>
                      setdata({ ...data, username: e.target.value })
                    }
                  ></input>
                </section>
                <section className="flex flex-col m-3">
                  <label className=" font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="px-4 py-2 my-1 rounded-full placeholder:text-[#767575] border-2 border-[#767575] hover:bg-slate-50"
                    onChange={(e) =>
                      setdata({ ...data, password: e.target.value })
                    }
                  ></input>
                </section>
                <button
                  type="submit"
                  className=" bg-[#FF7F41] text-white mt-10 px-4 p-2 rounded flex place-items-center gap-3"
                >
                  <p> Register</p> <AiOutlineSwapRight />
                </button>
              </form>
            </div>

            <div className="md:flex-[1] relative bg-[#9ddee882]  blur-sm delay-50 hover:blur-none p-8 rounded-lg">
              {/* the animated background */}
              <BgAnimation />

              <p className=" font-philosopher_regular text-3xl p-4 ">
                MumbleMate
              </p>
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
                <div className="p-3 flex justify-between bg-[#c2cdd0ab] bg:opacity-5 place-items-center rounded-lg mt-[35%]  ">
                  <p className="text-black italic font-abel_regular ">
                    Have an account?
                  </p>
                  <Link to={"/login"}>
                    <button className="hover:bg-orange-400  hover:text-[white] backdrop-blur-sm bg-white text-[#FF7F41] rounded-xl inline-flex justify-center align-middle gap-2 px-5 py-2 border-2 border-spacing-7 hover:border-r-8 border-white ">
                      Login
                    </button>
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
