//Habit tracker
let usuario;
let clave;
let habito;

ingreso();
aplicacion();

function ingreso(){
    while(true){
        usuario = prompt('ingrese su nombre de usuario');
        clave = prompt('ingrese su contraseña');
        if(usuario != usuario || clave != clave ){ 
            alert('Porfavor reingrese su clave');   
        }else{
            alert(`Bienvenido, ${usuario}!`);
            break; 
        }
    }
}
function aplicacion(){
    habito = prompt("Porfavor ingrese cual será su habito: ");
    var marcaje = "";
    for(let i = 1; i <= 21; i++){
        let decidir = prompt("Toma un total de 21 días llegar a formar un hábito. " + `${habito} ha sido realizado hoy? [Si - No]`);
         if(i == 21){
             decidir = prompt("Felicitaciones!, su habito ha formado ciclo!, le gustaría volverlo a intentar?[Si - No]");
             if(decidir == 'Si' || decidir == 'si' || decidir == 'S' || decidir == 's'){
                 aplicacion();}
             else{
                 decidir = prompt("Seleccione x para salir");
                 switch (decidir) {
                     case "x":
                     alert("Gracias por su tiempo, sus marcas: ");
                     break;
                     case "X":
                     alert("Gracias por su tiempo, sus marcas: ");
                     break;
                     default:
                     alert("Gracias por su tiempo, sus marcas: "); }
             }
            }
        else if(decidir == 'Si' || decidir == 'si' || decidir == 'S' || decidir == 's'){
            marcaje += "[#]";
            } 
            else{
                marcaje += "[  ]"
            }
            alert(marcaje);
        }
}