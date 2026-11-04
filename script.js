function addStudent() {
    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("studentRoll").value;

    if (name === "" || roll === "") {
        alert("Please enter all details!");
        return;
    }

    let list = document.getElementById("studentList");

    let item = document.createElement("li");

    item.textContent = "Name: " + name + " | Roll No: " + roll;

    list.appendChild(item);

    document.getElementById("studentName").value = "";
    document.getElementById("studentRoll").value = "";
}