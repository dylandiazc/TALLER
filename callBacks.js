//taller 2 
// punto 1

/*function aprendiz(nombre, planeta, edad, estatura, clasificar){
  let padawan={
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura
  }  
  clasificar (padawan);
}

aprendiz("Dylan","Tierra", 20, 1.80,function(estudiante){
  (estudiante.edad<15) ?
    console.log(`${estudiante.nombre} Manejo de la fuerza `):
  
    console.log(`${estudiante.nombre} manejo del sable de luz`) ;
  
})
*/
// punto 2
function robarPlanos(idPlano, despegar) {

    if (idPlano > 0 && idPlano <= 10) {

        let mensaje = "El plano que se consiguio fue el " + idPlano;
        despegar(null, mensaje);

    } else {
        let error = "Pilas!! no te has robado un plano real"
        despegar(error, null);
    }
}
robarPlanos(3, function(error, mensajeOK) {
    (error) ?
    (
        console.log(error),
        console.log("nos quedamos camellando")
    )
      : console.log(mensajeOK)
        console.log("estamos depegando")
    
    }

);