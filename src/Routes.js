import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/login";
import Signup from "./components/Login/signup";
import Profile from "./components/profile";

const Routes = createBrowserRouter([{
    path: '/' ,
    element: <App />
},
{
    path: '/login' ,
    element: <Login />
},
{
    path: '/register-user' ,
    element: <Signup />
},
{
    path: '/profile' ,
    element: <Profile />
}
])
export default Routes;