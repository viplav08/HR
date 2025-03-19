function loadModule(module) {
    const contentDiv = document.getElementById('main-content');

    switch(module) {
        case 'employeeManagement':
            contentDiv.innerHTML = `
                <h2>Employee Management</h2>
                <form id="employeeForm">
                    <input type="text" name="employeeId" placeholder="Employee ID" required /><br/>
                    <input type="text" name="employeeName" placeholder="Employee Name" required /><br/>
                    <input type="text" name="department" placeholder="Department" required /><br/>
                    <button type="button" onclick="submitEmployeeData()">Add Employee</button>
                </form>
                <p id="employeeMessage"></p>
            `;
            break;

        case 'attendanceManagement':
            contentDiv.innerHTML = `
                <h2>Attendance Management</h2>
                <form id="attendanceForm">
                    <input type="text" name="employeeId" placeholder="Employee ID" required /><br/>
                    <button type="button" onclick="markAttendance()">Mark Attendance</button>
                </form>
                <p id="attendanceMessage"></p>
            `;
            break;

        case 'leaveManagement':
            contentDiv.innerHTML = `
                <h2>Leave Management</h2>
                <form id="leaveForm">
                    <input type="text" name="employeeId" placeholder="Employee ID" required /><br/>
                    <input type="text" name="leaveType" placeholder="Leave Type (Sick/Annual)" required /><br/>
                    <input type="date" name="startDate" required /><br/>
                    <input type="date" name="endDate" required /><br/>
                    <button type="button" onclick="submitLeaveRequest()">Submit Leave</button>
                </form>
                <p id="leaveMessage"></p>
            `;
            break;

        case 'reports':
            contentDiv.innerHTML = `<h2>Reports</h2><p>Generate and view reports here.</p>`;
            break;

        default:
            contentDiv.innerHTML = `<h2>Welcome to HR Management System</h2><p>Select a module from the left menu to get started.</p>`;
    }
}

function submitEmployeeData() {
    const form = document.getElementById('employeeForm');
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbxHQcYh1vqyP9TdVrWfpAkDMC212z15B342zZbMUZSyya7KXPK8YciMcJ1tMbQbrRZw/exec", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("employeeMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("employeeMessage").innerText = "Error: " + error;
    });
}

function submitLeaveRequest() {
    const form = document.getElementById('leaveForm');
    const formData = new FormData(form);

    fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("leaveMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("leaveMessage").innerText = "Error: " + error;
    });
}

function markAttendance() {
    const form = document.getElementById('attendanceForm');
    const formData = new FormData(form);

    fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("attendanceMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("attendanceMessage").innerText = "Error: " + error;
    });
}
