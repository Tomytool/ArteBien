const menuHanburgesa = document.getElementById('menu');
const menuOpciones = document.getElementById('menuOpciones');

let mostrar = true;
menuHanburgesa.addEventListener('click', () => {
  
  if (mostrar) {
    menuOpciones.classList.remove('top-[-120px]');
    menuOpciones.classList.add('top-16');
  }else{
    menuOpciones.classList.add('top-[-120px]');
    menuOpciones.classList.remove('top-16');
  }
  mostrar= !mostrar
});
