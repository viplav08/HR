function submitData(formId, module) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const params = new URLSearchParams();

    // Add form data to params
    formData.forEach((value, key) => {
        params.append(key, value);
    });

    fetch("https://script.google.com/macros/s/AKfycbxXyqXc1ZCXEk7bV5Q-AnwOQm07Z1CYrt7bZ4ohtrCwqGCH0AQ075XtgP3QXaHyseZ3/exec", {
        method: "POST",
        body: params,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById(`${module}Message`).innerText = data.message;
    })
    .catch(error => {
        document.getElementById(`${module}Message`).innerText = "Error: " + error;
    });
}
