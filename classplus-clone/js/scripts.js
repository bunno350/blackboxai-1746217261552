document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('send-btn');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.classList.add('bg-indigo-100', 'p-3', 'rounded', 'shadow', 'text-gray-800');
    messageEl.textContent = message;

    // Append message and clear input
    chatMessages.appendChild(messageEl);
    chatInput.value = '';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
});
