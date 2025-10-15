import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/pages/Admin.vue'
import Members from '@/pages/admin/Members.vue'
import Savings from '@/pages/admin/Savings.vue'
import Loans from '@/pages/admin/Loans.vue'
import Penalties from '@/pages/admin/Penalties.vue'
import { supabase } from '@/services/supabaseClient'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        { path: 'members', component: Members },
        { path: 'savings', component: Savings },
        { path: 'loans', component: Loans },
        { path: 'penalties', component: Penalties },
      ],
    },
    { path: '/', redirect: '/admin/members' }, // default view
  ],
})

/**
 * Auth guard — automatically checks Supabase user session
 */
router.beforeEach(async (to, from, next) => {
  const { data: { session } } = await supabase.auth.getSession()

  // If the route needs login but there’s no session
  if (to.meta.requiresAuth && !session) {
    console.warn('Not logged in — redirecting to Google sign-in')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/admin/members',
      },
    })
    if (error) console.error('Google auth error:', error.message)
    return; // stop navigation until redirect completes
  }

  next()
})

export default router
