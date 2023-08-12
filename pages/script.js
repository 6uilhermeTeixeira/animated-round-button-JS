document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");
    var centerX = window.innerWidth / 1;
    var centerY = window.innerHeight / 1;
    var sensitivity = 0.05; // Ajuste a sensibilidade conforme necessário
  
  document.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    var offsetX = (mouseX - centerX) * sensitivity;
    var offsetY = (mouseY - centerY) * sensitivity;
      
      // Verifica se o cursor está dentro da janela do navegador
      if (mouseX >= 0 && mouseX <= window.innerWidth && mouseY >= 0 && mouseY <= window.innerHeight) {
        // Atualiza as propriedades CSS do body para mover o background
        body.style.backgroundPositionX = offsetX + "px";
        body.style.backgroundPositionY = offsetY + "px";
      }
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button.taurus');
    button.classList.add('fade-in');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button.leo');
    button.classList.add('fade-in');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button.aquilae');
    button.classList.add('fade-in');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button.vir');
    button.classList.add('fade-in');
  });
  