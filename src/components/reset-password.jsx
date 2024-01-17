import { Link } from "react-router-dom";
import "../styles/reset-password.css"
import ButtonReturn from "./btn-return";
const ResetPassword = () => {
  return (
    <section>
      <ButtonReturn texto={"Volver al menu"}/>
      <div className="login">
        <div className="inputBox">
          <label htmlFor="">ingresa tu nombre de Usuario:</label>
          <br />
          <input placeholder="nombre de usuario" type="text" name="" id="" />
        </div>
        <div className="next-container">
          <button>Siguiente</button>
        </div>
      </div>
    </section>
  )
}
export default ResetPassword;