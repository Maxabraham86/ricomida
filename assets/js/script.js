



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

 

//function esconder_titulo(){
 //   $(".card-text").toggle("d-none")
//}

//    $(".card-title").on("click", esconder_titulo)//


  //  function esconder_titulo () {
   //     $('.card-text').toggle('d-none')
  //    }
    
  //    $('.card-title').on('click', esconder_titulo)





   // Carlos — Today at 11:01 PM
   // $('#cambio-color1').on('dblclick', function () {
   //     $('#cambio-color1').toggleClass('text-danger')
    //});
    
    //$('#cambio-color2').on('dblclick', function () {
    //    $('#cambio-color2').toggleClass('text-danger')
    //});
    
    
   // function esconder_titulo () {
   //   $('.card-text').toggle('d-none')
   // }
    
    //$('.card-title').on('click', esconder_titulo)
    
    
    
    function alerta () {
        alert('Email enviado con éxito')
    }
    $('#enviarCorreo').on('click', alerta)
    