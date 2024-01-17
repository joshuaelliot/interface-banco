


const usersBank =[];

let userFound = undefined;
// funcion que se usa en el sing up  ( crear un usuario )
export const RegisterNewUser = (dateNewUser)=>{
usersBank.push(dateNewUser); 
//console.log("hipoo : ",Object.keys(usersBank));
//console.log(usersBank[dateNewUser.id]);
console.log(usersBank);
}
// funcion que se usa en el login
export const ConprobateUser = (dateUser)=>{
const {name,password} = dateUser;
 const usersData = [...usersBank];

 const userfind = usersData.find((user)=>{
    return user.name === name && user.password === password
 });

if(userfind){
    userFound = usersData.filter((user)=>{return user.password === password && user.name === name});
    console.log("ENCONTRAMOS EL USUARIO")
    console.log("userFound : ", userFound);
    return true
}
console.log(userfind);
};

export  const getUser=()=>{
return userFound ;
}