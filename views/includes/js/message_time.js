var successMessage = document.getElementById('successMessage');

successMessage.classList.add('mostrar');

setTimeout(function() {

  successMessage.classList.remove('mostrar');
}, 3000);
