import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { ConprobateUser } from "../../public/dataBase/data-base";



const Login = () => {

const [userName,setUserName]= useState("");
const [userPassword,setUserPassword]= useState("");

let navigate = useNavigate();

  return (
<section className="interface-container">
<div className='login'>
      <h2>Sing In</h2>
      <div className='inputBox'>
        <input onChange={(e)=>{
          setUserName(e.target.value);
          console.log(userName);
        }}
        value={userName}
        placeholder="ingrese su nombre de usuario " 
        type="text" name="" id="" />
      </div>
      <div className='inputBox'>
        <input onChange={(e)=>{
          setUserPassword(e.target.value);
          console.log(userPassword);
        }} 
        value={userPassword}
        placeholder="ingrese su contraseña " 
        type="password" name="" id="" />
      </div>
      <div className='inputBox'>
        <button onClick={()=>{
          const dateUser = {
            name:userName,
            password:userPassword
          }
          const enterDashboard = ConprobateUser(dateUser);

         if(enterDashboard){
          navigate("/dashboard");
         }else{
          let textAlert = `El usuario : ${dateUser.name} y \n
           password :${dateUser.password}\n 
           no son correctos o no existen `;
          alert(textAlert);
         }
        }}>Entrar</button>
      </div>
      <div className="group">
        <Link className={"enlace"} to={"/reset-password"}>¿Olvidaste tu contraseña?</Link>
        <Link className="enlace" to={"/sing-up"}>Sing Up</Link>
      </div>
    </div>
</section>
    

  )
}

export default Login;