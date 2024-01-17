import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/singup.css"
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import ButtonReturn from "./btn-return";
import { ConfirmateRegister } from "../auth/comfirmateRegister";
import { RegisterNewUser } from "../../public/dataBase/data-base";

const SingUp = () => {
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");


  async function handleSubmit(e) {

    e.preventDefault();
/*
    try {

      if (confimEmail()) {
        const response = await fetch("http://localhost:3000/api/singup", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: userPassword,
            email: userEmail,
          })
        });
        if (response.ok) {

          console.log("logramos enviar los datos y se creo el usuario")
        } else {
          console.log("algo salio mal , revisa los datos que enviantes")
        }
      }
    } catch (error) {
      console.error(error);
    }
*/
  }


  const navigate = useNavigate();
 
  /*
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard"></Navigate>
  }*/
  return (
    <section className="interface-container">
      <ButtonReturn texto={"Volver al home"}/>
      <form className="sing-up" onSubmit={handleSubmit}>
        <h2>Sing Up</h2>
        <div className="inputBox">
          <label htmlFor="">Usuario</label>
          <br />
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={userName}
            placeholder="name" type="text" name="" id="input-user" />
        </div>
        <div className="inputBox">
          <label htmlFor="">email</label>
          <br />
          <input
            onChange={(e) => {
              setUserEmail(e.target.value)
            }}
            value={userEmail}
            placeholder="@email" type="email" name="" id="input-email" />
        </div>
        <div className="inputBox">
          <label htmlFor=""> contraseña</label>
          <br />
          <input
            onChange={(e) => {
              setUserPassword(e.target.value)
            }}
            value={userPassword}
            placeholder="password" type="password" name="" id="input-password" />
        </div>

        <div className="inputBox ">
          <button
            onClick={() => {
              const dateUser = {
                name: userName,
                password: userPassword,
                email: userEmail,
              };
              const validateRegister = ConfirmateRegister(dateUser);

              if (validateRegister) {
                RegisterNewUser(validateRegister);
                alert("usuario correctamente registrado")
                navigate("/");
              } else {
                alert("sus datos son incorrectos ");
              }

            }}
            type="submit">
            Create User
          </button>
        </div>

      </form>
    </section>
  )
}

export default SingUp;