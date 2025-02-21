<template>
  <div>
    <div class="form-group">
      <div class="remember-forgot">
        <label class="remember-me">
          <input 
            type="checkbox" 
            :value="remember"
            @input="$emit('update:remember', $event.target.checked)" 
          />
          <span>Nhớ mật khẩu</span>
        </label>
        <NuxtLink to="/forgot-password" class="forgot-link">
          Quên mật khẩu?
        </NuxtLink>
      </div>
    </div>

    <div class="form-group">
      <button @click="$emit('login')" class="confirm-button">
        Xác nhận
      </button>
    </div>

    <div class="form-group">
      <div class="alternative-logins">
        <button class="verification-button">Mã xác thực</button>
        <NuxtLink to="/register" class="register-button">Đăng ký</NuxtLink>
      </div>
    </div>

    <div class="form-group">
      <div class="account-login">
        <p class="account-title">Tài khoản khác</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  remember: Boolean
})

defineEmits(['update:remember', 'login'])
</script>

<style scoped>
.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  font-size: 14px;
}

.forgot-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: var(--primary-hover);
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

.alternative-logins {
  display: flex;
  gap: 10px;
  width: 100%;
}

.verification-button,
.register-button {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.verification-button:hover,
.register-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.account-login {
  margin-top: 24px;
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.account-title {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

/* Dark mode styles */
:deep(.dark-mode) {
  .remember-me {
    color: #d1d5db;
  }

  .verification-button,
  .register-button {
    background: #374151;
    border-color: #4b5563;
    color: #d1d5db;
  }

  .verification-button:hover,
  .register-button:hover {
    background: #4b5563;
    border-color: var(--primary-color);
    color: white;
  }

  .account-title {
    color: #d1d5db;
  }

  .account-login {
    border-top-color: #374151;
  }
}
</style> 