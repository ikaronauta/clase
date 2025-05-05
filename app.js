const passToday = 'cLaSe05AbrIl';

const links = {
  link1: 'https://docs.google.com/spreadsheets/d/1Y8w4h_919t1lFECFMEJonRsc9pDKRZpdg9A2rlocHsU/edit?gid=0#gid=0',
  link2: 'https://docs.google.com/spreadsheets/d/1s0xGlDV2i6SxNnjOwD9tHpygtbGsygcmosh9KQAQQ3Y/edit?gid=999757978#gid=999757978'
}

function inicio() {
  $('#tabs').hide();
  initEventListeners();
}

function initEventListeners(){
  $('form').on('submit', function(e){
    e.preventDefault();

    const password = $(this.password).val();

    if(password == ''){
      Swal.fire({
        title: "Upps",
        text: "Debes ingresar una contraseña",
        icon: "error", // o "error", "warning", "info", "question"
        confirmButtonText: "Aceptar"
      });
    } else if(password == passToday){
      Swal.fire({
        title: "Bienvenido",
        text: "Clase del 05 de abril del 2025",
        icon: "success", // o "error", "warning", "info", "question" "success"
        confirmButtonText: "Aceptar"
      });

      $('#password').val('');
      $('#login').hide();
      $('#tabs').show();

      $('.tabSection').removeClass('active');
      $($('.tabSection')[0]).addClass('active');

      $(".container-section").hide();
      $($(".container-section")[0]).show();
    } else {
      Swal.fire({
        title: "Upps",
        text: "Contraseña errada",
        icon: "error", // o "error", "warning", "info", "question" "success"
        confirmButtonText: "Aceptar"
      });
    }
  });

  $(".tabSection").on("click", function () {
    let value = $(this).data("tab");

    $('.tabSection').removeClass('active');

    $(".container-section").each(function (idx, element) {
      if (value == $(element).attr("id")) {
        $(element).show();
        $(`[data-tab="${value}"]`).addClass('active');

        if(value == 'home' || value == 'salir'){
          inicioSalir(value);
        } else {
          showLink(value);
        }

      } else {
        $(element).hide();
      }
    });
  });
}

function showLink(link){
  debugger;
  $(`#${link}`).find('a').attr('href', links[link])
}

function inicioSalir(item){
  if(item == 'home'){
    return;
  }

  $('#login').show();
  $('#tabs, .container-section').hide();
  
}


inicio();