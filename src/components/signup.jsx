import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom';
export default function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();

    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            email:email,
            password:password
        }
        //console.log("user",user)
        axios.post('https://final-api-varma.herokuapp.com/signup',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
          // history.push("/d");
            alert(res.data)
         }   
         else{
             alert("login failed")
            // history.push("/");
         }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   

    return (
        <div>
              <div className="form">
              <form onSubmit={onSubmitHandler}>
             
             <input type="email" placeholder="enter your email" id="email" value={email} onChange={onEmailHandler}/>
           
             <input type="password" placeholder="enter your password" id="password" value={password} onChange={onPasswordHandler}/>
           
             <button type="submit" >Sign up</button>
             <Link to="/login">  <p>Already user ? Login</p></Link>
          
         </form>
         </div>
        </div>
    )
}
