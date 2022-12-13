import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login = ()=>{

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dbpassword, setdbPassword] = useState("");

  const submit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:4000/login", {email,password}, (err, user)=>{
        const {dbpassword} = user;
        setdbPassword(dbpassword);
        setEmail("");
        setPassword('');
        navigate("/profile");
    })
  }
  return (
     <> 
      <section className="login">
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
           disabled = {!email || !password || password !== dbpassword}
           > login</button>
          </form>
          </section>
     </>
  )
}

export default Login;