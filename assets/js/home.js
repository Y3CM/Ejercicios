let saludo = document.getElementById("saludo")
let  cerrar = document.getElementById("cerrar")
let login = localStorage.getItem("login")


if(login != undefined){
    let users = localStorage.getItem('users')
    user = JSON.parse(users)
        user.forEach(item => {
            saludo.innerHTML = (`Bienvenido ${item.nombre} ${item.apellido}`)
        });

}else{
    window.location.href = "index.html"
}

cerrar.addEventListener('click', () =>{
    localStorage.removeItem('login')
    window.location.href = "index.html"
})