// DOM
const sendButton = document.getElementById('send-button');
const inputField = document.querySelector('.caixa_pergunta input[type="text"]');
const responseContainer = document.querySelector('.caixa_resposta');
const responseTextarea = document.getElementById('caixa_resposta_texto');

// Adiciona um listener de evento ao botão de enviar
sendButton.addEventListener('click', function() {
    // Obtém o valor do campo de entrada
    const userInput = inputField.value;
    
    // Verifica se o campo de entrada não está vazio
    if (userInput.trim() !== '') {
        // Mostra a caixa de resposta e define o texto da área de resposta
        responseContainer.style.display = 'block';
        responseTextarea.value = `Você disse: ${userInput}`;
        
        // Limpa o campo de entrada
        inputField.value = '';
    }
});