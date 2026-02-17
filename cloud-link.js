import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Aapka actual Supabase data
const supabaseUrl = 'https://appwsjmmmaifgvjspdzs.supabase.co'
const supabaseKey = 'sb_publishable_TkPdkJvzEVTVXUE21k_jFA_614TyGKm'

export const supabase = createClient(supabaseUrl, supabaseKey)
