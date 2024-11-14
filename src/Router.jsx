import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./general/Main";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ClientsPage from "./components/Clients/ClientPage";
import BlogPage from "./components/Blog/BlogPage";
import Contact from "./components/Contact/Contact";
import ThirdMiddle from "./components/ThirdMiddleSection/ThirdMiddle";

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
        },{
          path:'clients',
          element:<ClientsPage/>

        },
        {
          path:'blog',
          element:<BlogPage/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:"booking",
          element:<ThirdMiddle/>
        }
      ]
    },
  ]);

  export default router;