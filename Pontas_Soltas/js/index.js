// Scroll para o inicio

const inicio = document.getElementById('inicio');
const btnInicio = document.getElementById('btnInicio');
btnInicio.addEventListener('click', function(){
    event.preventDefault();
    window.scrollTo(0,0);
});

// Scroll para a secção sobre

const btnSobre = document.getElementById('btnSobre');
const sobreNos = document.getElementById('sobreNos');
btnSobre.addEventListener('click', function(){
    event.preventDefault();
    sobreNos.scrollIntoView();
});

// Scroll para a secção contactos

const btnContactos = document.getElementById('btnContactos');
const contactos = document.getElementById('contactos');
btnContactos.addEventListener('click', function(){
  event.preventDefault();
  contactos.scrollIntoView();
});

// Botão voltar ao topo

botaoSubir = document.getElementById("botaoSubir");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    botaoSubir.className = "bottomMenu_show";
  } else {
    botaoSubir.className = "bottomMenu_hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

botaoSubir.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// Menu mobile dropDown 

document.getElementById('btnDrop').addEventListener('click', function(){
  document.getElementById('myDropdown').classList.add('show');
});

window.onclick = function(event) {
  if (!event.target.matches('.btnDrop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}