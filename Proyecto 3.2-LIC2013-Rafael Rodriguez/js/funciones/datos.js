var Datos = new Object();
Datos.nombre="";
Datos.apellido="";
Datos.edad="";
Datos.email="";
Datos.comentario="";

function principal(){
    tomarDatos();
    
}


function tomarDatos(){
    
    Datos.nombre = $F('txtnombre');
    //alert(Datos.nombre);
    Datos.apellido= $F('txtapellido');
    Datos.edad= $F('txtedad');
    Datos.email= $F('txtemail');
    Datos.comentario= $F('txtcomentario');
    validar();
}

function validar(){
      var regEdad= new RegExp(/^[0-9]/);
      var regNombre = new RegExp(/^[a-zA-Z]/);
      var regEmail = new RegExp(/^[a-zA-Z0-9]{2,}@([a-zA-Z0-9])/);
      
      alert(Datos.nombre);
      alert(Datos.apellido);
      if (regNombre.test(Datos.nombre)){
          if (regNombre.test(Datos.apellido)){
              if(regEdad.test(Datos.edad)){
                  if(regEmail.test(Datos.email)){
                      enviarDatos();
                  }
                  else
                  {
                      alert("Correo escrito de manera incorrecto");
                  }
              }
              else
              {
                  alert("Edad ingresado de manera incorrecta");
              }
          }
          else
          {
              alert("Apellido mal ingresado");
          }
      }
          else
          {
              alert("Nombre mal ingresado");
          }
      
}

function enviarDatos(){
    
    alert("Tu comentario ha sido enviado. Gracias, tu opinión es muy importante");
}