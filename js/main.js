//Se debe hacer cada vez que se inicie un documento
$(document).ready(function(){
  console.log("El documento ya está listo");
});

var numeroAlAzar;
var indiceActual = 0;
var puntos = 0;
var intentos = 5;


var imagenes = [ "Adriana.JPG", "Ana.JPG", "Analy.JPG", "Areli.JPG", "Bety.JPG", "Ceci.JPG",
  "Claudia.JPG", "Dany.JPG", "Eli.JPG", "Eve.JPG", "Gaby.JPG", "Griss.JPG",
  "Heredia.JPG", "Johana.JPG", "Joyce.JPG", "Karen.JPG", "Karla.JPG", "Leslie.JPG", 
  "Lupita.JPG", "Milca.JPG", "Mishel.JPG", "Moni.JPG", "Naibit.JPG", "Naye.JPG",
  "Nelly.JPG", "Ofe.JPG", "Paty.JPG", "Reyna.JPG", "Ruth.JPG", "San.JPG", "Sandy.JPG",
  "Sharon.JPG", "Tayde.JPG", "Vianey.JPG", "Zaz.JPG"];

var nombres = ["Adriana", "Ana", "Analy", "Areli", "Bety", "Ceci",
  "Claudia", "Dany", "Eli", "Eve", "Gaby", "Griss",
  "Heredia", "Johana", "Joyce", "Karen", "Karla", "Leslie", 
  "Lupita", "Milca", "Mishel", "Moni", "Naibit", "Naye",
  "Nelly", "Ofe", "Paty", "Reyna", "Ruth", "San", "Sandy",
  "Sharon", "Tayde", "Vianey", "Zaz"];


  function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
  };

  function desplegarPuntos(){
    $('#spanPuntos').text(puntos);
  };

  function desplegarNuevaJugada() {
    var tamanoArreglo = nombres.length;
    if (tamanoArreglo > 0){
      numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
      var imagen = 'fotos/' + imagenes[numeroAlAzar];
      //Cambiar un atributo 
      $('#imagenPersona').attr('src', imagen);
    } else {
      alert('Ganaste');
    }

   };

  $(document).ready(function(){
    $('#btnRevisar').click(function(){
    var nombre =$('#inputNombre').val();
    console.log(nombre);

    var nombreAdivinar = nombres[numeroAlAzar];
    console.log('El nombre correcto es: '+nombreAdivinar);

    if (nombre === nombreAdivinar) {

      puntos = puntos + 5;
      //Para quitar el elemento que ya no queremos
      nombres.splice(numeroAlAzar,1);
      imagenes.splice(numeroAlAzar,1);

      desplegarNuevaJugada();      
    } else {
      puntos = puntos-1; //puntos--
      intentos--; //intentos++
      alert('Vuelve a intentar, te quedan: '+intentos+' intentos.');
      if (intentos<=1) {
        alert('Perdiste!');
      }
    }

    desplegarNuevaJugada(); 
    desplegarPuntos();
    });
  });


//Asignar un valor a un input
  //$('#inputNombre').val('Algo aqui');

 /*
  if (nombres.length > 0) {
      indiceActual = enteroRandomEnRango(0, nombres.length);
      var nombre = nombres[indiceActual];

      console.log('Desplegando jugada de: ' + nombre);
      $('#imagenPersona').attr('src','fotos/' + nombre + '.JPG')
  } else {
      $('#contenedorJuego').hide();
      $('#contendorFinal').show();
      $('#headResult').text('Finalizaste con ' + puntos + ' puntos');
  } */


/*
  function actualizarPuntos() {
  $('#score').text('' + puntos);
  }

  //Decirle que ejecute cuando se haga click
  $('#btnRevisar').click(function(){
      //Va a hacer esto cuando haga click
      //Obtener el valor 
      var nombre = $('#inputNombre').val();
      console.log('Nombre: '+nombre);
  if (nombre == nombres[indiceActual]) {
      console.log('Bien!');
      nombres.splice( indiceActual ,1);
      puntos = puntos + 5; //Aqui le suma 5 puntos
      actualizarPuntos();
      intentos = 0;
      desplegarNuevaJugada();
    } else {
      console.log('Mal!');
      puntos--;   //Aqui le quita un punto
      actualizarPuntos();
      intentos++;
      
      if (intentos == 5) {
        nombres.splice( indiceActual ,1);
        intentos = 0;
        desplegarNuevaJugada();
      }

    }

});
});

*/
