import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/useContext";

export default function dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Link to="/login">
        <button className=" bg-blue-500 p-2 rounded text-white">login</button>
      </Link>

      <Link to={`/register`}>
        <button className="bg-green-500 p-2 ml-4 rounded text-white">
          Register
        </button>
      </Link>

      
    </div>
  );
}
