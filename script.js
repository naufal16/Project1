var planDate = ["01-Juni-22"];
var sequence = ["2"];
var model = ["B6H"];
var color = ["PGD"];
var planQTY = ["40"];
var lt = ["Body Assy"];
var update = ["28"];
var total = ["28"];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML =
        "<tr><th>No</th><th>Plan Date</th><th>Sequence</th><th>Model</th><th>Color</th><th>planQTY</th><th>LT</th><th>Update</th><th>Total</th><th>Action</th></tr>";
    for (let i = 0; i < planDate.length; i++) {
        var btnEdit =
            "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus =
            "<button class='btn-hapus' href='#'onclick='hapus(" + i + ")'>Delete</button>";
        j = i + 1;
        tabel.innerHTML +=
            "<tr><td>" + j + "</td><td>" + planDate[i] + "</td><td>" + sequence[i] + "</td><td>" + model[i] + "</td><td>" + color[i] + "</td><td>" + planQTY[i] + "</td><td>" + lt[i] + "</td><td>" + update[i] + "</td><td>" + total[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah() {
    var inputPlan = document.querySelector("input[name=planDate]");
    var inputSequence = document.querySelector("input[name=sequence]");
    var inputModel = document.querySelector("input[name=model]");
    var inputColor = document.querySelector("input[name=color]");
    var inputPlanQTY = document.querySelector("input[name=planQTY]");
    var inputLT = document.querySelector("input[name=lt]");
    var inputUpdate = document.querySelector("input[name=update]");
    var inputTotal = document.querySelector("input[name=total]");
    planDate.push(inputPlan.value);
    sequence.push(inputSequence.value);
    model.push(inputModel.value);
    color.push(inputColor.value);
    planQTY.push(inputPlanQTY.value);
    lt.push(inputLT.value);
    update.push(inputUpdate.value);
    total.push(inputTotal.value);
    tampil();
    input.value = "";
}

function edit(id) {
    var updatePlan = prompt("Edit Nama Depan", planDate[id]);
    var updateSquence = prompt("Edit Nama Belakang", sequence[id]);
    var updateModel = prompt("Edit Jurusan", model[id]);
    var updateColor = prompt("Edit NIM", color[id]);
    var updatePlanQTY = prompt("Edit NIM", planQTY[id]);
    var updateLT = prompt("Edit NIM", lt[id]);
    var updateUpdate = prompt("Edit NIM", update[id]);
    var updateTotal = prompt("Edit NIM", total[id]);
    planDate[id] = updatePlan;
    sequence[id] = updateSquence;
    model[id] = updateModel;
    color[id] = updateColor;
    planQTY[id] = updatePlanQTY;
    lt[id] = updateLT;
    update[id] = updateUpdate;
    total[id] = updateTotal;
    tampil();
}

function hapus(id) {
    planDate.pop(id);
    sequence.pop(id);
    model.pop(id);
    color.pop(id);
    planQTY.pop(id);
    lt.pop(id);
    update.pop(id);
    total.pop(id);
    tampil();
}
tampil();