<template>
  <div class="mockup-code terminal-output">
    <pre
      data-prefix="$"
    ><code>{{ displayedCommand }}<span v-if="showCommandCaret" class="caret" :class="{ 'blink': isTypingCommand }"></span></code></pre>
    <pre
      v-for="(line, index) in outputLines"
      :key="index"
      v-show="currentLine >= index"
      :data-prefix="line.prefix"
      :class="line.class"
    ><code>{{ line.text }}</code></pre>
    <pre
      v-show="currentLine === outputLines.length"
      data-prefix="$"
    ><code><span class="caret blink"></span></code></pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  command: {
    type: String,
    required: true,
  },
  outputLines: {
    type: Array,
    required: true,
  },
});

const displayedCommand = ref("");
const currentLine = ref(-1);
const typewriterInterval = ref(null);
const showCommandCaret = ref(true);
const isTypingCommand = ref(true);

onMounted(() => {
  startAnimation();
});

function startAnimation() {
  resetState();
  startTypewriter();
}

function resetState() {
  displayedCommand.value = "";
  currentLine.value = -1;
  showCommandCaret.value = true;
  isTypingCommand.value = true;
}

function startTypewriter() {
  let index = 0;
  typewriterInterval.value = setInterval(() => {
    if (index < props.command.length) {
      displayedCommand.value += props.command[index];
      index++;
    } else {
      clearInterval(typewriterInterval.value);
      isTypingCommand.value = false;
      setTimeout(() => {
        showCommandCaret.value = false;
        animateOutput();
      }, 500);
    }
  }, 100);
}

function animateOutput() {
  let delay = 0;

  for (let i = 0; i <= props.outputLines.length; i++) {
    setTimeout(() => {
      currentLine.value = i;
      if (i === props.outputLines.length) {
        setTimeout(() => {
          startAnimation();
        }, 10000);
      }
    }, delay);

    if (i < props.outputLines.length - 1) {
      delay += 200;
    } else {
      delay += 1000;
    }
  }
}
</script>

<style scoped>
.mockup-code pre {
  @apply transition-opacity duration-200;
}

.caret {
  @apply inline-block w-2 h-4 bg-current;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
