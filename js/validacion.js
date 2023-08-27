function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", (e) =>{
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const passw1 = document.getElementById('password1').value;
  const passw2 = document.getElementById('password2').value;
  const terminos = document.getElementById('terminos').checked;

  const passw = passw1.length < 6;

  if (nombre && apellido && email && !passw && (passw1 === passw2) && terminos){
    showAlertSuccess();
  } else {
    showAlertError();
  }
});






