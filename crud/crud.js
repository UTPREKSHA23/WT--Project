let data = [];

function addData() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (id === "" || name === "" || age === "") {
        alert("Fill all fields");
        return;
    }

    data.push({ id, name, age });
    displayData();
    clearFields();
}

function displayData() {
    let table = document.getElementById("dataTable");

    // reset table except header
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
    </tr>`;

    for (let i = 0; i < data.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
        </tr>`;
    }
}

function deleteData() {
    let id = document.getElementById("id").value;

    data = data.filter(item => item.id !== id);

    displayData();
    clearFields();
}

function updateData() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            data[i].name = name;
            data[i].age = age;
        }
    }

    displayData();
    clearFields();
}

function clearFields() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}
