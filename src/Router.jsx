import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./general/Main";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },{
          path:'portfolio',
          element:<Portfolio/>
        }
      ]
    },
  ]);

  export default router;