<template>
  <div class="login-form">
    <div class="form-group">
      <h2 class="form-title">Tài Khoản</h2>
      <div class="input-group">
        <input 
          type="text" 
          v-model="username" 
          placeholder="Vui lòng nhập tài khoản" 
          class="input-field"
        />
      </div>
    </div>

    <div class="form-group">
      <h2 class="form-title">Mật Khẩu</h2>
      <div class="input-group">
        <input 
          :type="showPassword ? 'text' : 'password'" 
          v-model="password" 
          placeholder="Vui lòng nhập mật khẩu" 
          class="input-field"
        />
        <button @click="togglePassword" class="toggle-password">
          <i class="eye-icon">👁️</i>
        </button>
      </div>
    </div>

    <LoginOptions 
      v-model:remember="rememberMe" 
      @login="handleLogin"
    />
  </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = () => {
  console.log('Login attempt:', {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}
</script>

<style scoped>
.login-form {
  width: 100%;
  margin: 0 auto;
  background: white;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

.form-title {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #333;
}

.input-group {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.toggle-password {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Dark mode styles */
:deep(.dark-mode) .form-title {
  color: #f3f4f6;
}

:deep(.dark-mode) .input-field {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style> 