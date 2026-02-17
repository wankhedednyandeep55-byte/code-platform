import { supabase } from './engine-base.js';

const API_KEY = "AIzaSyD7HiSKCX7O0qmfx4UEkbmoEf9UIV_jTjA"; // Aapki Gemini Key
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

document.getElementById('generateBtn').onclick = async () => {
    const prompt = document.getElementById('promptInput').value;
    const status = document.getElementById('status');
    
    status.innerText = "AI Brain is thinking... 🧠";

    try {
        const response = await fetch(GEMINI_URL, {
            method: "POST",
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Create only clean HTML and CSS code for: ${prompt}. Do not explain anything, just give the code.` }] }]
            })
        });

        const data = await response.json();
        const generatedCode = data.candidates[0].content.parts[0].text.replace(/```html|```/g, "");

        // Supabase mein save karein
        const { error } = await supabase
            .from('projects')
            .insert([{ name: prompt, html_code: generatedCode }]);

        if (error) throw error;
        
        status.innerText = "Magic Success! App saved to Dashboard. 🎉";
    } catch (err) {
        status.innerText = "Error: " + err.message;
        console.error(err);
    }
};
