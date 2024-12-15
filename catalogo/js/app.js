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
      categoria: "equipos_biomedicos",
      tipos: ["VALVULAS", "PAPILOTOMO", "FLEXI_KNIFE", "Faldas de oficina"]
    },
    {
      categoria: "endoscopia_digestiva",
      tipos: ["PAPILOTOMO", "ALAMBRE_GUIA", "CATETER_CON_BALON", "CANASTILLAS", "PINZA_DE_EXTRACCION", "PINZA_DE_BIOSIDA", 
        "PINZA_DE_BIOSIDA_CALIENTE", "INYECTORES", "HEMOCLIPS", "LIGADOR_MULTI_BANDAS", "ASA_POLITEMICA_CALIENTE", "CANASTILLA_ATRAPA_POLIPOS",
        "BALL_TIP_KNIFE", "FLEXI_KNIFE", "HOOK_KNIFE", "FLEXI_KNIFE_CON_IRRIGACION", "RETIRO_DE_BALON_INTRAGASTRICO", "KIT_DE_PEG",
        "TUBO_DE_REEMPLAZO_PARA_PEG", "IRRIGADORES_DE_CANAL", "CEPILLOS_DE_LIMPIEZA_REUSABLES", "BOTELLA_DE_AGUA_PARA_SISTEMAS_DE_ENDONCOSPIO",
        "VALVULAS", "BOMBA DE AGUA", "BOMBA_DE_INSUFACION_DE_CO2"]
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





function filter_category(id){


  let boton = document.querySelectorAll('.filter_none');
  boton.forEach(function(filter_none) {
    if (filter_none.id === id) {

      let mennu = document.querySelectorAll('.tarjeta');
      mennu.forEach(function(tarjeta) {

      tarjeta.style.display = 'none';
      
      });

      // Define el valor de la categoría a buscar
      const categoriaBuscar = id;

      // Recorre las categorías
      categorias.forEach(categoriaObj => {
        if (categoriaObj.categoria === categoriaBuscar) {
          // Recorre los tipos de la categoría encontrada
          categoriaObj.tipos.forEach(tipo => {
              
              mennu.forEach(function(tarjeta) {
              
              if (tarjeta.id === tipo) {
                
                tarjeta.style.display = 'block';

              }
            
            });
            
          });
        }

        
        
      });


    } 

    
  });
}