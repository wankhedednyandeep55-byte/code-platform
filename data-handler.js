import { supabase } from './engine-base.js';

// 1. Data Fetch Karne Ka Function
export async function getAllProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Data fetch error:", error.message);
        return [];
    }
    return data;
}

// 2. Ek Single Project Load Karne Ka Function (Preview Ke Liye)
export async function getProjectById(id) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Project load error:", error.message);
        return null;
    }
    return data;
}
