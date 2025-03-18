function loadModule(moduleName) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `<h3>Loading ${moduleName}...</h3>`;

    fetch(`${moduleName}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(err => {
            mainContent.innerHTML = `<p>Error loading module: ${err}</p>`;
        });
}

function submitForm(event, formId, sheetName) {
    event.preventDefault();
    const formData = new FormData(document.getElementById(formId));

    fetch("https://script.google.com/macros/s/AKfycbxHQcYh1vqyP9TdVrWfpAkDMC212z15B342zZbMUZSyya7KXPK8YciMcJ1tMbQbrRZw/exec", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(result => alert(`Data submitted to ${sheetName}: ${result}`))
    .catch(error => alert("Error: " + error.message));
}
