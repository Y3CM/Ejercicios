let saludo = document.getElementById("saludo")
let  cerrar = document.getElementById("cerrar")
let login = localStorage.getItem("login")


if(login != undefined){
    let users = localStorage.getItem('users')
    users = JSON.parse(users)
        users.forEach(item => {
            saludo.innerHTML = (`Bienvenido ${item.nombre} ${item.apellido}`)
        });     

}else{
    window.location.href = "index.html"
}

cerrar.addEventListener('click', () =>{
    localStorage.removeItem('login')
    window.location.href = "index.html"
})


let salida = document.getElementById("tablas");
let show = document.getElementById("show");
let num = document.getElementById("num");

const vacio = ()=>{
    return num.value === ""
}

const mostrar = ()=>{
let numero = parseInt(num.value);
salida.innerHTML = ""
    if(vacio()){
        alert("Ingrese un número");
        return;
    }else{
        for(let i = 1 ; i <= 10 ; i++){
            salida.innerHTML += "<p> " + numero + " x " + i + " = "+ numero * i + "</p>"; 
        }
    }

}

show.addEventListener('click',mostrar)

num.addEventListener('Keypress',(event) =>{
    if(event.key === 'Enter'){
        mostrar();
        event.preventDefault();
    }
 
})