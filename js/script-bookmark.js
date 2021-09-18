
// -------------script menú-------------//
$(document).ready(function(){
    $("#hide").click(function(){
      $("#hide-menu").hide();
    });
    $("#show").click(function(){
      $("#hide-menu").show();
    });
});

// -------------script slider-------------//
$(document).ready(function(){
  $("#hide-1").click(function(){
    $("#hide-slider-1").show();
    $("#hide-slider-2").hide();
    $("#hide-slider-3").hide();
    $('#line-bottom-2').removeClass("line-bottom");
    $('#line-bottom-3').removeClass("line-bottom");
    $('#line-bottom-1').addClass("line-bottom");
   
  });
  $("#hide-2").click(function(){
    $("#hide-slider-1").hide();
    $("#hide-slider-2").show();
    $("#hide-slider-3").hide();
    $('#line-bottom-1').removeClass("line-bottom");
    $('#line-bottom-2').addClass("line-bottom");
    $('#line-bottom-3').removeClass("line-bottom");
  });
  $("#hide-3").click(function(){
    $("#hide-slider-1").hide();
    $("#hide-slider-2").hide();
    $("#hide-slider-3").show();
    $('#line-bottom-1').removeClass("line-bottom");
    $('#line-bottom-2').removeClass("line-bottom");
    $('#line-bottom-3').addClass("line-bottom");
  });

});


// -------------script validación-------------//
function validartxtcorreo() {
  var enviar = false;
  var objeto = document.getElementById("txtEmail");
  var spanerror = document.getElementById("txtEmailError");
  var iconerror = document.getElementById("iconError");
  if ((objeto.value).length == 5) {
      // ocultar el span
      iconerror.className = "error0";
      spanerror.className = "error1";
      // Cumple la condición, se cambia el estado de enviar a true
      return enviar = true;
  } else {
      // No cumple, se lanza error y se muestra span con mensaje de error
      spanerror.innerHTML="<b class='text-red'>Complete el campo correo electronico</b>";
      // activar visibilidad del span error
      spanerror.className = "error1";
      // Se cambia el estado de enviar a false por no cumplir requisitos

      // No cumple, se lanza error y se muestra span con mensaje de error
      iconerror.innerHTML="<img src='images/icon-error.svg' alt='rror' class='error' >";
      // activar visibilidad del span error
      iconerror.className = "error0";
      // Se cambia el estado de enviar a false por no cumplir requisitos
      return enviar = false;
  }
}
function enviarFormulario() {
  var contador=0;
  if ( validartxtcorreo() ) {
      contador++;
  }
}