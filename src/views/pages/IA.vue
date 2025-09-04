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
import { ref, nextTick, onMounted } from 'vue';

// --- Messages ---
const messages = ref([]);
const newMessage = ref("");
const textarea = ref(null);

// --- Charger les messages depuis localStorage ---
onMounted(() => {
  const stored = localStorage.getItem('chatMessages');
  if (stored) messages.value = JSON.parse(stored);
  if (!messages.value.length) {
    messages.value.push({ from: 'ia', text: "Bonjour ! Je suis là pour discuter avec vous 😊" });
  }
  nextTick(scrollToBottom);
});

// --- Envoyer message ---
function sendMessage() {
  if (!newMessage.value.trim()) return;

  // Message utilisateur
  messages.value.push({ from: 'user', text: newMessage.value });
  saveMessages();

  // Réponse IA simulée
  setTimeout(() => {
    const iaResponse = generateIAResponse(newMessage.value);
    messages.value.push({ from: 'ia', text: iaResponse });
    saveMessages();
    nextTick(scrollToBottom);
  }, 500);

  newMessage.value = "";
  nextTick(() => {
    resizeTextarea();
    scrollToBottom();
  });
}

// --- Simuler réponse IA basée sur ton JSON ---
function generateIAResponse(userText) {
  const keywords = {
    "violence": "Il semble que vous mentionniez un cas de violence. Pouvez-vous préciser le type ?",
    "harcèlement": "Le harcèlement est un sujet sérieux. Voulez-vous des conseils ou des ressources ?",
    "mariage": "Merci pour cette précision. S'agit-il d'un mariage forcé ?",
    "mutilation": "La mutilation génitale est une violation grave. Voulez-vous en discuter plus ?",
    "discrimination": "La discrimination de genre est un problème important. Pouvez-vous donner plus de détails ?"
  };

  const lowerText = userText.toLowerCase();
  for (const key in keywords) {
    if (lowerText.includes(key)) return keywords[key];
  }

  return "Merci pour votre message. Pouvez-vous donner plus de détails ?";
}

// --- Scroll automatique ---
function scrollToBottom() {
  const container = document.getElementById('chatMessages');
  if (container) container.scrollTop = container.scrollHeight;
}

// --- Auto-resize textarea ---
function resizeTextarea() {
  if (!textarea.value) return;
  textarea.value.style.height = 'auto';
  textarea.value.style.height = Math.min(textarea.value.scrollHeight, 4.5 * 16) + 'px';
}

// --- Sauvegarder messages dans localStorage ---
function saveMessages() {
  localStorage.setItem('chatMessages', JSON.stringify(messages.value));
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

/* Wrapper des messages */
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
  white-space: pre-line;
}

/* Bulles utilisateur */
.user-bubble {
  background-color: #343a40;
  color: white;
  margin-left: auto;
}

/* Bulles IA */
.ia-bubble {
  background-color: #6c757d;
  color: white;
  margin-right: auto;
}

/* Input collé en bas */
.chat-input {
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

/* Bouton envoyer fixe */
.send-button {
  height: 2.5rem;
}

/* Mobile safe area */
@media (max-width: 576px) {
  .chat-card {
    height: calc(100vh - 6.5rem);
  }
  .chat-input {
    padding-bottom: env(safe-area-inset-bottom, 10px);
  }
}
</style>
