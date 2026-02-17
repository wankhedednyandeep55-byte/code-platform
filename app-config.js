import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Aapka Supabase details
const supabaseUrl = 'https://appwsjmmmaifgvjspdzs.supabase.co'
const supabaseKey = 'sb_publishable_TkPdkJvzEVTXUez1k_jFA_614TyGKm'

export const supabase = createClient(supabaseUrl, supabaseKey)

