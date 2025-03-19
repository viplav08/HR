function submitData(formId, module) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const params = new URLSearchParams();

    // Add form data to params
    formData.forEach((value, key) => {
        params.append(key, value);
    });

    fetch("https://script.google.com/macros/s/AKfycbyD5h_L14WpthHd8gvYdAgIU1Dia5R5YcJPTNSnYnwb5hSqcp8p8FTj93h9di6aI9jM/exec", {
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
