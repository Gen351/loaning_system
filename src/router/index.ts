import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/services/supabaseClient'
import Admin from '@/pages/Admin.vue'
import Login from '@/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/admin' },
    { path: '/login', component: Login },
    {
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getSession()
  const session = data.session
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL

  // If route requires login but user isn't logged in → redirect to Google
  if (to.meta.requiresAuth && !session) {
    console.log('🔒 Not logged in → redirecting to Google login...')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/admin',
      },
    })
    if (error) console.error('Google login failed:', error.message)
    return // stop navigation while redirecting
  }

  // If logged in but not admin → kick them out
  if (session && session.user.email !== adminEmail) {
    alert('🚫 You are not authorized to access this admin panel.')
    await supabase.auth.signOut()
    return next('/login')
  }

  next()
})

export default router
