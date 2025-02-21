<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo-container">
        <div class="logo">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M65,26c-6.6,0-12,5.4-12,12c0,4.4,2.4,8.3,5.9,10.4c-3.6-1.7-7.6-2.6-11.9-2.6c-4.4,0-8.5,1-12.1,2.7
            c3.5-2.1,5.9-6,5.9-10.5c0-6.6-5.4-12-12-12s-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4c-5,3.9-8.2,9.9-8.2,16.6
            c0,11.7,9.5,21.2,21.2,21.2c7.3,0,13.7-3.7,17.6-9.3c3.9,5.6,10.3,9.3,17.6,9.3c11.7,0,21.2-9.5,21.2-21.2
            c0-6.7-3.2-12.7-8.1-16.6C73.6,47.8,77,43.3,77,38C77,31.4,71.6,26,65,26z" 
            fill="#6366f1" />
          </svg>
        </div>
        <h1 class="title">Quản Lý Tàu</h1>
      </div>
      <div class="mode-switcher">
        <button @click="toggleDarkMode">
          <i class="dark-mode-icon" v-if="!darkMode">☀️</i>
          <i class="light-mode-icon" v-else>🌙</i>
        </button>
      </div>
      <div class="login-form">
        <h2 class="form-title">Tài Khoản</h2>
        <div class="input-group">
          <input 
            type="text" 
            v-model="username" 
            placeholder="Vui lòng nhập tài khoản" 
            class="input-field"
          />
        </div>
        <h2 class="form-title">Mật Khẩu</h2>
        <div class="input-group">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password" 
            placeholder="Vui lòng nhập mật khẩu" 
            class="input-field"
          />
          <button @click="togglePasswordVisibility" class="toggle-password">
            <i class="eye-icon">👁️</i>
          </button>
        </div>
        <div class="remember-forgot">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            <span>Remember me</span>
          </label>
          <a href="#" class="forgot-link">Forgot password?</a>
        </div>
        <button @click="login" class="confirm-button">Confirm</button>
        <div class="alternative-logins">
          <button class="verification-button">Verification Code Login</button>
          <button class="register-button">Register</button>
        </div>
        <div class="account-login">
          <p class="account-title">Other Account Login</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showPassword: false,
      darkMode: false,
      language: 'en'
    }
  },
  methods: {
    login() {
      // Add login logic here
      console.log('Login attempt:', {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode);
    },
    toggleLanguage() {
      this.language = this.language === 'en' ? 'cn' : 'en';
      // Add language switching logic here
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 90%;
  max-width: 1200px;
  background: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  margin: 0 auto;
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

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 12px;
}

.logo {
  margin-right: 10px;
}

.title {
  color: #6366f1;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

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

.form-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
}

.input-group {
  margin-bottom: 24px;
  position: relative;
}

.input-field {
  width: 100%;
  max-width: 370px;
  padding: 12px 14px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  margin: 0 auto;
  display: block;
}

.input-field:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  font-size: 14px;
}

.remember-me input {
  margin-right: 8px;
}

.forgot-link {
  color: #6366f1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #4f46e5;
}

.confirm-button {
  width: 100%;
  padding: 12px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 20px;
}

.confirm-button:hover {
  background-color: #4f46e5;
  transform: translateY(-1px);
}

.alternative-logins {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.verification-button, .register-button {
  flex: 1;
  padding: 10px;
  background-color: white;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;
}

.verification-button:hover, .register-button:hover {
  border-color: #6366f1;
  color: #6366f1;
  background-color: rgba(99, 102, 241, 0.05);
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
.dark-mode .login-card {
  background-color: #1f2937;
  border: 1px solid #374151;
}

.dark-mode .form-title {
  color: #f3f4f6;
}

.dark-mode .input-field {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}

.dark-mode .input-field:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

.dark-mode .remember-me {
  color: #d1d5db;
}

.dark-mode .verification-button,
.dark-mode .register-button {
  background-color: #374151;
  border-color: #4b5563;
  color: #d1d5db;
}

.dark-mode .verification-button:hover,
.dark-mode .register-button:hover {
  background-color: #4b5563;
  border-color: #6366f1;
  color: #f3f4f6;
}

.dark-mode .account-title {
  color: #d1d5db;
}

.dark-mode .account-login {
  border-top-color: #374151;
}
</style>