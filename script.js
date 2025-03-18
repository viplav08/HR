function loadModule(moduleName) {
    let moduleContainer = document.getElementById("moduleContainer");

    if (moduleName === 'leaveManagement') {
        moduleContainer.innerHTML = `
            <h3>Leave Management</h3>
            <form id="leaveForm" onsubmit="submitLeaveRequest(event)">
                <input type="text" name="employeeId" placeholder="Employee ID" required><br><br>
                <input type="text" name="leaveType" placeholder="Leave Type" required><br><br>
                <input type="date" name="startDate" required><br><br>
                <input type="date" name="endDate" required><br><br>
                <input type="hidden" name="sheetName" value="Leave Requests Sheet">
                <button type="submit">Submit Leave Request</button>
            </form>
            <div id="leaveMessage"></div>
        `;
    } else if (moduleName === 'attendanceManagement') {
        moduleContainer.innerHTML = `
            <h3>Attendance Management</h3>
            <form id="attendanceForm" onsubmit="submitAttendance(event)">
                <input type="text" name="employeeId" placeholder="Employee ID" required><br><br>
                <input type="password" name="password" placeholder="Password" required><br><br>
                <button type="submit">Mark Attendance</button>
            </form>
            <div id="attendanceMessage"></div>
        `;
    }
}

function submitLeaveRequest(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    fetch("https://script.google.com/macros/s/AKfycbxHQcYh1vqyP9TdVrWfpAkDMC212z15B342zZbMUZSyya7KXPK8YciMcJ1tMbQbrRZw/exec", {
        method: "POST",
        body: params,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("leaveMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("leaveMessage").innerText = "Error submitting leave request.";
    });
}

function submitAttendance(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: params,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("attendanceMessage").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("attendanceMessage").innerText = "Error marking attendance.";
    });
}
