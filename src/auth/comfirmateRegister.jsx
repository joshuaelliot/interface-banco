export const ConfirmateRegister = (dateUser)=>{
const {name,password,email}=dateUser;
const nameValidate = confirmateName(name);
const passwordValidate =confirmatePassword(password);
const emailValidate = confirmateEmail(email);

if(nameValidate && passwordValidate && emailValidate){
    
    const idUser = generateId();
    const urlFace = "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/05/11/16522607459954.jpg";
    console.log("los datos son validos :",name,idUser,email);
    const newUser = {id:idUser,name,password,email,money:2000,imageUrl :urlFace};
    return  newUser;
}else{
    console.log("los datos son invalidos ")
    return false;
}

}

const confirmateEmail = (emailUser)=>{
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    let emailComprobate= emailUser.match(emailRegex);
  
    return emailComprobate;
}
const confirmatePassword = (passwordUser)=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,12}$/;
    let passwordComprobate= passwordUser.match(passwordRegex);
  
    return passwordComprobate;
};

const confirmateName = (nameUser)=>{
    const nameRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,12}$/;

    let nameComprobate= nameUser.match(nameRegex);
  
    return nameComprobate;
}

const generateId = ()=>{
    let  id = "id" + Math.random().toString(16).slice(2)
return id;
}