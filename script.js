function loadModule(moduleName) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `<h3>Loading ${moduleName}...</h3>`;

    fetch(`${moduleName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${moduleName}`);
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            mainContent.innerHTML = `<p style="color: red;">Error loading module: ${error.message}</p>`;
        });
}
