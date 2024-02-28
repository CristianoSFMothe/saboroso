document.addEventListener("DOMContentLoaded", function() {
  var successMessage = document.getElementById("successMessage");
  if (successMessage) {
      successMessage.style.display = "block"; // Exibe a mensagem de sucesso
      setTimeout(function() {
          successMessage.style.display = "none"; // Oculta a mensagem de sucesso após 5 segundos (5000 milissegundos)
      }, 5000);
  }
});
