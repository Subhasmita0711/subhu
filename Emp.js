// Employee constructor function
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Function to add employee to list
function addEmployeeToList(employee) {
    const list = document.getElementById('employeeList');
    const div = document.createElement('div');
    div.className = 'employee';
    div.innerHTML = `
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Position:</strong> ${employee.position}</p>
        <p><strong>Salary:</strong> $${employee.salary}</p>
        <button class="delete">Remove</button>
    `;
    list.appendChild(div);
}

// Function to clear input fields
function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('salary').value = '';
}

// Function to delete employee from list
function deleteEmployee(target) {
    if(target.classList.contains('delete')) {
        target.parentElement.remove();
    }
}

// Event listener for form submission
document.getElementById('employeeForm').addEventListener('submit', function(e) {
    // Get form values
    const name = document.getElementById('name').value,
          position = document.getElementById('position').value,
          salary = document.getElementById('salary').value;

    // Instantiate employee
    const employee = new Employee(name, position, salary);

    // Add employee to list
    addEmployeeToList(employee);

    // Clear fields
    clearFields();

    e.preventDefault();
});

// Event listener for delete button
document.getElementById('employeeList').addEventListener('click', function(e) {
    // Delete employee
    deleteEmployee(e.target);

    e.preventDefault();
});