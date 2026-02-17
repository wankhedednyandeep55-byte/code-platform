import { supabase } from './engine-base.js'; // Jo humne pehle banayi thi

document.getElementById('generateBtn').onclick = async () => {
    const prompt = document.getElementById('promptInput').value;
    
    // AI Brain Yahan Kaam Karega (Abhi hum sample code save kar rahe hain)
    const generatedCode = `<div><h1>Generated for: ${prompt}</h1><p>AI is building this...</p></div>`;

    const { data, error } = await supabase
        .from('projects')
        .insert([{ name: prompt, html_code: generatedCode }]);

    if (error) alert("AI Error: " + error.message);
    else alert("🎉 Magic! Aapka app Dashboard mein save ho gaya.");
};
