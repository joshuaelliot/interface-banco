import ButtonReturn from "./btn-return";
import { getUser } from "../../public/dataBase/data-base";
import { useState } from "react";
import "../styles/dashboard.css";
import { Popup } from "./popup";

const DashboardUser = () => {
  const [dataUser] = getUser(); true
  const [popupTransfer, setPopupTransfer] = useState(false);
  const [popupDeposited, setPopupDeposited] = useState(false);
  const [popupWithDraw, setPopupWithDraw] = useState(false);
  const [user, setUser] = useState(dataUser);

  const retirar = (inportMoney) => {
    if (user.money > inportMoney) {
      setUser({ ...user, money: user.money - inportMoney });
    }

  };
  const depositar = (inportMoney) => {
    if (user.money >= 0) {
      setUser({ ...user, money: user.money + inportMoney });
    }
  };
  const transferir = (inportMoney) => {
    if (user.money > inportMoney) {
      setUser({ ...user, money: user.money - inportMoney });
    }

  };
  return (
    <section id="dashboard-container">
      <ButtonReturn texto={"singout"}/>
      <header className="header-dashboard-container">
        <nav className="nav-dashboard-container">
          <span>{" 🏦 "}</span>
          <ul>
            <li className="list-dashboard">{ `💵 ${user.money}`}</li>
            <li>
              <img
                className="image-perfil-dashboard"
                src={dataUser.imageUrl} alt="foto de perfil del usuario"></img>
            </li>
          </ul>
        </nav>
      </header>
      <h1 id="title-dashboard">Hola de nuevo 😄</h1>

      {popupTransfer ?
        <Popup transfer={true}
          operation={"Comfirm"}
          transaction={transferir}>
          {<button
            onClick={() => {
              setPopupTransfer(!popupTransfer);
            }}
          >Cancel</button>}
        </Popup> : ""}
      {
        popupDeposited ?
          <Popup transfer={false}
            operation={"Comfirm"}
            transaction={depositar}>
            {<button
              onClick={() => {
                setPopupDeposited(!popupDeposited);
              }}
            >Cancel</button>}
          </Popup> : ""
      }
      {popupWithDraw ?
        <Popup
          transfer={false}
          operation={"Comfirm"}
          transaction={retirar}retirar>
          {<button
            onClick={() => { setPopupWithDraw(!popupWithDraw) }}
          >Cancel</button>}
        </Popup>
        : ""
      }

      <article>
        <div className="btns-operations-container">
          <button
            onClick={() => {
              setPopupTransfer(true);
            }}
            className="btn-operation"
          >transferir</button>
          <button
            onClick={() => {
              setPopupWithDraw(true);
            }}
            className="btn-operation">retirar</button>
          <button
            onClick={() => {
              setPopupDeposited(true);
            }}
            className="btn-operation">depositar</button>
        </div>
      </article>

    </section>
  )
}

export default DashboardUser;