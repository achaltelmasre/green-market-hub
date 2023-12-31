import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import 'bootstrap-icons/font/bootsrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./views/Home/Home" ;
import About from "./views/About/About";
import Order from "./views/Order/Order";
import Review from "./views/Review/Review"; 
import Contact from "./views/Contact/Contact";
import SignUp from "./views/SignUp/SignUp";
import Login from "./components/Form/LoginForm/LoginForm";
import ReadPost from "./views/Order/ReadPost/ReadPost";
import axios from "axios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path:"/review",
    element: <Review/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  },

{
  path:"/signup",
  element: <SignUp/>,
},
{
  path:"/login",
  element: <Login/>,
},
  
  {
    path: '/Post/ReadPost/:id',
    element: <ReadPost/>

  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)