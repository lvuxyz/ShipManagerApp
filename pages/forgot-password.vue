<template>
  <div class="login-container">
    <div class="login-card">
      <Logo />
      <ThemeSwitcher />
      
      <h2 class="reset-title">Reset Password</h2>
      
      <form @submit.prevent="handleSubmit" class="reset-form">
        <div class="form-group">
          <input 
            type="text"
            v-model="phoneNumber"
            placeholder="Please enter phone number"
            class="input-field"
          />
        </div>

        <div class="form-group">
          <div class="verification-group">
            <input 
              type="text"
              v-model="verificationCode"
              placeholder="Please enter verification code"
              class="input-field"
            />
            <button 
              type="button" 
              @click="sendVerificationCode"
              class="send-code-btn"
              :disabled="cooldown > 0"
            >
              {{ cooldown > 0 ? `${cooldown}s` : 'Send' }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <div class="password-group">
            <input 
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Please enter password"
              class="input-field"
            />
            <button 
              type="button"
              @click="togglePassword('password')"
              class="toggle-password"
            >
              <i class="eye-icon">👁️</i>
            </button>
          </div>
        </div>

        <div class="form-group">
          <div class="password-group">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              placeholder="Please enter password again"
              class="input-field"
            />
            <button 
              type="button"
              @click="togglePassword('confirm')"
              class="toggle-password"
            >
              <i class="eye-icon">👁️</i>
            </button>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="confirm-button">Confirm</button>
          <button type="button" @click="goBack" class="back-button">Back</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

const phoneNumber = ref('')
const verificationCode = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const cooldown = ref(0)

const togglePassword = (type) => {
  if (type === 'password') {
    showPassword.value = !showPassword.value
  } else {
    showConfirmPassword.value = !showConfirmPassword.value
  }
}

const sendVerificationCode = async () => {
  if (cooldown.value > 0) return
  
  try {
    // Call API to send verification code
    cooldown.value = 60
    const timer = setInterval(() => {
      cooldown.value--
      if (cooldown.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  } catch (error) {
    console.error('Failed to send code:', error)
  }
}

const handleSubmit = async () => {
  if (!phoneNumber.value || !verificationCode.value || !password.value || !confirmPassword.value) {
    alert('Please fill in all fields')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }

  try {
    await $fetch('/api/reset-password', {
      method: 'POST',
      body: {
        phoneNumber: phoneNumber.value,
        verificationCode: verificationCode.value,
        newPassword: password.value
      }
    })
    
    router.push('/login')
  } catch (error) {
    console.error('Failed to reset password:', error)
    alert('Failed to reset password. Please try again.')
  }
}

const goBack = () => {
  router.push('/login')
}
</script>

<style scoped>
.reset-title {
  text-align: center;
  color: var(--primary-color);
  font-size: 24px;
  margin-bottom: 30px;
}

.reset-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  transition: all 0.3s;
}

.input-field:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
}

.verification-group {
  display: flex;
  gap: 10px;
}

.send-code-btn {
  padding: 0 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.send-code-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.password-group {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
}

.confirm-button {
  width: 100%;
  padding: 12px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.confirm-button:hover {
  background: var(--primary-hover);
}

.back-button {
  width: 100%;
  padding: 12px;
  background: white;
  color: var(--primary-color);
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.back-button:hover {
  background: #f9fafb;
  border-color: var(--primary-color);
}

/* Dark mode styles */
:deep(.dark-mode) {
  .input-field {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }

  .input-field::placeholder {
    color: #9ca3af;
  }

  .back-button {
    background: #1f2937;
    border-color: #4b5563;
    color: white;
  }

  .back-button:hover {
    background: #374151;
    border-color: var(--primary-color);
  }
}
</style> 