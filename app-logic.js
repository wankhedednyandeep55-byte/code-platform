import { supabase } from './engine-base.js';

const editor = document.getElementById('editor');
const output = document.getElementById('output');
const runBtn = document.getElementById('runBtn');

runBtn.addEventListener('click', async () => {
    const code = editor.value;
    
    // 1. Output dikhao
    output.srcdoc = code;

    // 2. Supabase mein save karo
    const { data, error } = await supabase
        .from('projects')
        .insert([{ html_code: code, name: 'Project_' + Date.now() }]);

    if (error) {
        console.error("Error saving:", error.message);
        alert("Save failed, check console.");
    } else {
        alert("Code Saved to Cloud! 🎉");
    }
});
