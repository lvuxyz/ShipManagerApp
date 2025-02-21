<template>
  <div class="login-container">
    <div class="login-card">
      <Logo />
      <ThemeSwitcher />
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Redirect to login page
onMounted(() => {
  router.push('/login')
})
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  background: white;
}

.login-card {
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

/* Dark mode styles */
:deep(.dark-mode) .login-card {
  background-color: #1f2937;
  border: 1px solid #374151;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .login-card {
    padding: 20px;
  }
}
</style>