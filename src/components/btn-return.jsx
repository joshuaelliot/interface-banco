import { Link } from "react-router-dom"

const ButtonReturn = ({texto})=>{
    return  (
        <button className="return-home"> 
      <Link className={"return-link"} to={"/"}>{texto} </Link>
      </button>
    )
}

export default ButtonReturn;