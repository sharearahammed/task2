import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        }
      ]
    },
  ]);

  export default router;