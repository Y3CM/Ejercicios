let user = document.getElementById('user');
let password = document.getElementById('password');
let btn = document.getElementById('btn')

/* localStorage.setItem('user', user.value)
localStorage.password = password.value */

btn.addEventListener('click', () =>{

   if (user.value==localStorage.user && password.value==localStorage.password) {
            alert('te logueaste correctamente');
   } else {
            alert('usuario no existe')
   }
})
