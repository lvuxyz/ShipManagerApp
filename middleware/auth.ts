export default defineNuxtRouteMiddleware((to) => {
  // Skip auth check for auth-related pages
  if (to.path === '/login' || to.path === '/forgot-password' || to.path === '/register') {
    return
  }

  // Check if user is authenticated
  const token = useCookie('auth_token')
  if (!token.value) {
    return navigateTo('/login')
  }
}) 