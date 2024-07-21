
let user = document.getElementById("user")
let newPass = document.getElementById("newPass")
let confirmPass = document.getElementById("confirmPass")
let btn = document.getElementById("btn")
let error = document.getElementById("error")
let errorpas = document.getElementById("errorpas")



btn.addEventListener('click',()=>{
    let userReg = localStorage.getItem("users")
    userReg = JSON.parse(userReg)
    if(userReg != null){
        userReg.forEach(element => {
             if (element.correo == user.value) {
                if(newPass.value == "" || confirmPass.value == ""){
                    errorpas.setAttribute('class','error')
                    return errorpas.innerHTML = "algunos campos estan vacios"
                }
                if(newPass.value == confirmPass.value)
                 {element.password = newPass.value
                    console.log(element)
                    localStorage.setItem("users",JSON.stringify(userReg))
                    alert('contraseña recuperada correctamente')
                     window.location.href = "./index.html" 
                 }
                 else{
                    errorpas.setAttribute('class','error')
                   return  errorpas.innerHTML = "Las contraseñas no coinciden"
                 }
             } else {
                error.setAttribute('class','error')
                return error.innerHTML = "Error, Usuario no registrado"  
             }
        });
     }
         else{
            error.setAttribute('class','error')
            return error.innerHTML = " no hay Usuarios registrados"
         }
        
 })
