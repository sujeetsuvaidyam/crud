var form = `<div>
<div class="mb-3">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="fname" placeholder ="Enter your name">
</div>
<div class="mb-3">
  <label for="Password">Password</label>
  <input type="password" class="form-control" id="Password" placeholder="Enter your password">
</div>
<button onclick ="save()" class="btn btn-success mt-3">Submit</button>
</div>`
let data = [];
getdata();
table();
function save() {
  var fname = document.getElementById("fname").value;
  var password = document.getElementById("Password").value;
  if (fname == 0) {
    alert("Name is empty");
    return
  };
  let valuepass = {
    Name: fname,
    pass: password,
  }
  data.push(valuepass);
  setdatas();
  // console.log(data);

  table()
  //  fname.value="";
  // password.value="";

};

document.getElementById("form").innerHTML = form;


function table() {
  var table = `<table class="table">
    <thead>
      <tr>
        <th class="col-sm-2">No</th>
        <th class="col-sm-2">Name</th>
        <th class="col-sm-2">Password</th>
        <th class="col-sm-2">Edit</th>
        <th class="col-sm-2">Delete</th>
      </tr>
    </thead>
    <tbody>`;
  for (var i = 0; i < data.length; i++) {
    table = table + `<tr>
        <td>${i + 1}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].pass}</td>
        <td> <button type ="button" class ="btn btn-warning mt-3" onclick="edit(${i})">Edit</button></td>
        <td> <button type ="button" class ="btn btn-danger mt-3" onclick="deleteData(${i})">Delete</button></td>
      </tr>`
  };
  table = table + `</tbody>
  </table>`;
  document.getElementById("table").innerHTML = table;
};
function deleteData(index) {
  data.splice(index, 1)
  setdatas();
  table()
  //  console.log(data);
};
function edit(index) {
  let editForm = `<div>
   <div class="mb-3">
     <label for="name"> Upadate Name</label>
     <input type="text" value="${data[index].Name}" class="form-control" id="newfname" placeholder ="Update your name">
   </div>
   <div class="mb-3">
     <label for="Password"> Update Password</label>
     <input type="password" value="${data[index].pass}" class="form-control" id="newPassword" placeholder="Update your password">
   </div>
   <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button onclick ="Update(${index})" class="btn btn-primary">Update</button>
   </div>`;
  document.getElementById("form").innerHTML = editForm;
  //  console.log("edit work");
};
function Update(index) {
  let newfname = document.getElementById("newfname");
  let newPassword = document.getElementById("newPassword");
  data[index] = {
    Name: newfname.value,
    pass: newPassword.value,
  };
  setdatas();
  table();
  document.getElementById("form").innerHTML = form;
  // console.log('update work');
  // console.log(data);
};
function getdata() {
  let datas = localStorage.getItem("data");
  if (datas) {
    data = JSON.parse(datas);
  }
  else {
    setdatas();
  };
};
function setdatas() {
  localStorage.setItem("data", JSON.stringify(data));
};
