import "./App.css";

//import the pages
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

// import react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  //create a router
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
