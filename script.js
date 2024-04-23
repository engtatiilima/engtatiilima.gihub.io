// Captura todos os botões de confirmação de presença
const buttons = document.querySelectorAll('.confirmar-presenca');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Exibe uma mensagem de confirmação ao clicar
    alert('Presença confirmada! Obrigado por participar do evento.');
  });
});
