const ws = new WebSocket('ws://localhost:3000');
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('message');

ws.onmessage = function(event) {
  const message = document.createElement('div');
  message.className = 'chat-message';
  message.textContent = event.data;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  if (input.value.trim() !== "") {
    ws.send(input.value);
    input.value = "";
  }
}
