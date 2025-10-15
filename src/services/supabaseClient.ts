// src/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Environment variables (must start with VITE_ in Vite)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Optional: basic validation in dev mode
if (import.meta.env.DEV && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('❌ Missing Supabase credentials in .env file.')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log('Supabase client initialized:', supabaseUrl)
