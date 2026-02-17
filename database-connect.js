import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Aapki details jo aapne share ki hain
const supabaseUrl = 'https://appwsjmmmaifgvjspdzs.supabase.co'
const supabaseKey = 'sb_publishable_TkPdkJvzEVTVXUE21k_jFA_614TyGKm'

export const supabase = createClient(supabaseUrl, supabaseKey)
<script type="module" src="database-connect.js"></script>
