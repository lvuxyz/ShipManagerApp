<template>
  <div class="mode-switcher">
    <button @click="toggleDarkMode">
      <i class="dark-mode-icon" v-if="!isDarkMode">☀️</i>
      <i class="light-mode-icon" v-else>🌙</i>
    </button>
  </div>
</template>

<script setup>
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode', isDarkMode.value)
}
</script>

<style scoped>
.mode-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
}

.mode-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 18px;
}
</style> 