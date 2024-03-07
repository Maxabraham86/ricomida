



// Iniciando Tooltip
//const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
//const tooltipList = [...tooltipTriggerList].map//(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)//

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//function cambiar color()

 //   $("#cambio-color1").on("dbkclick", funcion(){)
///    $("#cambia_color1").toggleClass("text-danger")
//)}
//$ ("").on("click",

//(cambio)

 
  function esconder_texto(){
    $(".card-text").toggle("d-none")
  }
  $(".card-title").on("click", esconder_texto)

    
    function alerta () {
        alert('Email enviado con éxito')
    }
    $('#enviarCorreo').on('click', alerta)
    


    function cambiar_ingredientes(){
      $("#ingredientes").toggleClass("text-danger")
    }
    $("#ingredientes").on("click", cambiar_ingredientes)
    
    function cambiar_preparacion(){
      $("#cambiar_color2").toggleClass("text-danger")
    }
    $("#cambiar_color2").on("click", cambiar_preparacion
  )