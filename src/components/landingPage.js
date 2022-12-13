import Login from "./Login/login";
import Signup from "./Login/signup";
import { useNavigate } from "react-router-dom";
const LandingPage = ()=>{

   const navigate = useNavigate();
   const login = ()=>  navigate("/login");
   const Signup = ()=>  navigate("/register-user");

    return(
        <>
          <h1>Welcome to serverless react application!</h1>
          <button onClick={login}>Login</button> | <button onClick={Signup}>Create new account</button>
        </>
    );
}
export default LandingPage;