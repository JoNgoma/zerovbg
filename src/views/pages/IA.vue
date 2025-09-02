<template>
  <div class="container my-4">
    <div class="card shadow-sm chat-card">
      
      <!-- Header -->
      <div class="card-header bg-dark text-white">
        <h5 class="mb-0 text-white">Discussion IA</h5>
      </div>
      
      <!-- Messages -->
      <div class="card-body bg-light d-flex flex-column overflow-auto" id="chatMessages">
        <div v-for="(msg, index) in messages" :key="index" class="message-wrapper">
          <div 
            :class="msg.from === 'user' ? 'bubble user-bubble' : 'bubble ia-bubble'" 
            v-html="msg.text.replace(/\n/g, '<br>')"
          ></div>
        </div>
      </div>
      
      <!-- Input -->
      <div class="card-footer p-2 d-flex gap-2 bg-dark chat-input">
        <textarea
          ref="textarea"
          v-model="newMessage"
          @input="resizeTextarea"
          class="form-control text-white bg-secondary border-0"
          placeholder="Écrire un message..."
          rows="1"
          style="resize: none; overflow-y: auto; max-height: 4.5em;"
        ></textarea>
        <button class="btn btn-dark send-button" @click="sendMessage">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const messages = ref([
  { from: 'ia', text: "Bonjour ! Je suis là pour discuter avec vous 😊" }
]);
const newMessage = ref("");
const textarea = ref(null);

function sendMessage() {
  if (!newMessage.value.trim()) return;

  messages.value.push({ from: 'user', text: newMessage.value });

  setTimeout(() => {
    messages.value.push({ from: 'ia', text: `IA: Vous avez dit "${newMessage.value}"` });
    scrollToBottom();
  }, 500);

  newMessage.value = "";
  nextTick(() => {
    resizeTextarea();
    scrollToBottom();
  });
}

function scrollToBottom() {
  const container = document.getElementById('chatMessages');
  if (container) container.scrollTop = container.scrollHeight;
}

function resizeTextarea() {
  if (!textarea.value) return;
  textarea.value.style.height = 'auto';
  textarea.value.style.height = Math.min(textarea.value.scrollHeight, 4.5 * 16) + 'px';
}
</script>

<style scoped>
.chat-card {
  max-width: 50rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 40.5rem;
}

/* Messages scrollables */
#chatMessages {
  flex: 1 1 auto;
  overflow-y: auto;
}

/* Scrollbar */
#chatMessages::-webkit-scrollbar {
  width: 8px;
}
#chatMessages::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 4px;
}

/* Wrapper des messages pour espacement */
.message-wrapper {
  margin-bottom: .7rem;
  display: flex;
}

/* Bulles */
.bubble {
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 80%;
  word-wrap: break-word;
  line-height: 1.5;
  white-space: pre-line; /* préserve les retours à la ligne */
}

/* Bulles utilisateur alignées à droite */
.user-bubble {
  background-color: #343a40; /* bg-dark */
  color: white;
  margin-left: auto;
}

/* Bulles IA alignées à gauche */
.ia-bubble {
  background-color: #6c757d; /* bg-secondary */
  color: white;
  margin-right: auto;
}

/* Input collé en bas, mais sur mobile laisse espace clavier */
.chat-input {
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  align-items: flex-end; /* garde le bouton aligné */
}

/* Fixer la hauteur du bouton */
.send-button {
  height: 2.5rem; 
}

/* Pour mobiles : padding bottom avec safe area */
@media (max-width: 576px) {
  .chat-card {
    height: calc(100vh - 6.5rem);
  }
  .chat-input {
    padding-bottom: env(safe-area-inset-bottom, 10px);
  }
}
</style>
