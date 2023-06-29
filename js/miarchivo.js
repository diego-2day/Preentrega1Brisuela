//Habit tracker
let usuario;
let clave;
let habito;


function ingreso(){
    for(let i=1; i<=3; i++){
        usuario = prompt('ingrese su nombre de usuario');
        clave = prompt('ingrese su contraseña');
        if((usuario == usuario)&&(clave == clave )){ // Si ((contraseñaIngresada !== contraseñaCorrecta)||...)
            alert(`Bienvenido, ${usuario}!`);
            break; 
        }else{
            console.log('Porfavor reingrese su clave');
        }
    }
}
