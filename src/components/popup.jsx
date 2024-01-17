import { useState } from "react"
import "../styles/popup.css"
export const Popup = (props) => {
  const [inportTransaction, setInportTransaction] = useState(undefined);
  const handleInput = (e) => {
  
    const inputValue = e.target.value;
    const convertedNumber = parseInt(inputValue, 10);
  if(isNaN(convertedNumber)){
    setInportTransaction("");
  }else{
    setInportTransaction(convertedNumber)
  }
    
  }
  return (
    <div className="popup-container">
      <input
      className="inport-number"
        onChange={handleInput}
        placeholder="$0.00" type="text"
        value={inportTransaction}/>
      {props.transfer ? 
      <input className="count-transfer" placeholder="cuenta a Transferir" type="text" /> : ""}
      <div className="btns-container">
        <button onClick={() => {
          let convertionMoney = parseInt(inportTransaction);
          props.transaction(convertionMoney);
        }}>
          {props.operation}</button>
        {props.children}
      </div>

    </div>
  )
}