import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Signup = ()=>{

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/register-user", {email,password}, (err, user)=>{
        setEmail("");
        setPassword('');
        navigate("/login");
        console.log(navigate);
    })
  }
  return (
     <> 
      <section className="signup">
       <form onSubmit={submit} >
        <input 
          type="text" 
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          placeholder = "someone@email.com"
          />
          <input 
          type="password" 
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          placeholder = "...."
          />
          <button 
           type="submit"
           disabled = {!email || !password}
           > Signup</button>
          </form>
          </section>
     </>
  )
}

export default Signup;