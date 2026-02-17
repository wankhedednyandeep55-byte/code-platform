import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://appwsjmmmaifgvjspdzs.supabase.co'
const supabaseKey = 'sb_publishable_TkPdkJvzEVTXUez1k_jFA_614TyGKm' // Ye aapki publishable key hai
export const supabase = createClient(supabaseUrl, supabaseKey)
