const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit((ev) => {
  ev.preventDefault()
  
  const error = Math.random() > 0.5
  $formGroup.removeClass().addClass('form-group')
  $formControl.removeClass().addClass('form-control')
  $formGroup.addClass(error ? 'has-danger' : 'has-success')
  $formControl.addClass(error ? 'form-control-danger' : 'form-control-success')
  $formGroup.find('.form-control-feedback').remove()
  var el;
  if (error) {
    el = $('<div>', { html: 'Ha ocurrido un error' })
  } else {
    el = $('<div>', { html: 'Te enviaremos todas las novedades!' })
  }
  el.addClass('form-control-feedback')
  $formGroup.append(el)
})

function mostrarModal() {
  console.log()
  if (!JSON.parse(localStorage.noMostrarModal)) {
    $('#modalOferta').modal()
  }

  $('#btnNoRegistrar').click((ev) => {
    localStorage.noMostrarModal = true
  })
}

const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click((ev) => {
  ev.preventDefault()

  const $i = $filtrosToggle.find('i.fa')
  const isDown = $i.hasClass('fa-chevron-down')
  if (isDown) {
    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  } else {
    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
})


const categorias = [
    {
      categoria: "endoscopia_digestiva",
      tipos: ["procedimientos_biliares_y_pancreacos", "cuerpos_extraños", "biopsia", "polipectomia", "hemostasia", "diseccion_endoscópica_de_la_submucosa", "retiro_de Balón Intragástrico", "gastrostomia_endoscopica_Percutanea", "limpieza_y_desinfeccion", "equipos_complementarios"]
    },
    {
      categoria: "Ropa Formal",
      tipos: ["Trajes", "Vestidos de gala", "Camisas de vestir", "Faldas de oficina"]
    },
    {
      categoria: "Ropa Deportiva",
      tipos: ["Leggings", "Tops deportivos", "Shorts", "Chaquetas impermeables"]
    },
    {
      categoria: "Ropa de Temporada",
      tipos: ["Abrigos", "Sombreros de verano", "Bufandas", "Pantalones cortos"]
    },
    {
      categoria: "Ropa de Dormir y Lencería",
      tipos: ["Pijamas", "Batas", "Camisones", "Ropa interior"]
    }
  ];




function busqueda(){
  return(false);
}





// toggle de productos
function toggle(id) {

  let card = document.querySelectorAll('.tarjeta');
  card.forEach(function(tarjeta) {
    
      tarjeta.style.display = 'block';
    
  });

  let contenido = document.querySelectorAll('.mn_principal');
  contenido.forEach(function(mn_principal) {
    if (mn_principal.id === id) {
      mn_principal.style.display = 'block';
    } else {
      mn_principal.style.display = 'none';
    }
  });

  window.scrollTo({ top: 100, behavior: "smooth" })
}



// mennu toggle
function toggle_mennu(id) {

  let card = document.querySelectorAll('.tarjeta');
  card.forEach(function(tarjeta) {
    
      tarjeta.style.display = 'none';
    
  });

  let contenido = document.querySelectorAll('.mn_principal');
  contenido.forEach(function(mn_principal) {
    if (mn_principal.id === id) {
      mn_principal.style.display = 'block';
    } else {
      mn_principal.style.display = 'none';
    }
  });











  let mennu = document.querySelectorAll('.tarjeta');
  mennu.forEach(function(tarjeta) {
    if (tarjeta.id === "INFANTOMETRO") {
      tarjeta.style.display = 'block';
    }
    else if(tarjeta.id === "TALLIMETRO") {
      tarjeta.style.display = 'block';
    }
    else if(tarjeta.id === "TELESCOPICO") {
      tarjeta.style.display = 'block';
    }
     else {
      tarjeta.style.display = 'none';
    }
  });
}