// Function to save the current code to LocalStorage
function saveProject(projectName) {
    const projectData = {
        html: document.getElementById("html-code").value,
        css: document.getElementById("css-code").value,
        js: document.getElementById("js-code").value,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(`project_${projectName}`, JSON.stringify(projectData));
    alert("Project Saved Successfully!");
    updateProjectList();
}

// Function to load a specific project
function loadProject(projectName) {
    const savedData = localStorage.getItem(`project_${projectName}`);
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById("html-code").value = data.html;
        document.getElementById("css-code").value = data.css;
        document.getElementById("js-code").value = data.js;
        runCode(); // Refresh the preview
    }
}

// Function to list all saved projects in a sidebar
function updateProjectList() {
    const listContainer = document.getElementById("project-list");
    listContainer.innerHTML = ""; // Clear current list
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("project_")) {
            const name = key.replace("project_", "");
            const li = document.createElement("li");
            li.textContent = name;
            li.onclick = () => loadProject(name);
            listContainer.appendChild(li);
        }
    }
}
