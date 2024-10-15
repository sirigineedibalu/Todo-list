let maincontainer = document.createElement("div");
maincontainer.classList.add("maincontainer");
maincontainer.id = "main_container";
document.body.appendChild(maincontainer);
console.log(maincontainer);

let mainHeading = document.createElement("h1");
mainHeading.textContent = "Todo Applicatiion";
mainHeading.classList.add("main_heading");
maincontainer.appendChild(mainHeading);

let sideheading = document.createElement("h2");
sideheading.textContent = "My task";
sideheading.classList.add("sideheadings");
maincontainer.appendChild(sideheading);

let createinputelement = document.createElement("input");
createinputelement.type = "text";
createinputelement.id = "input_element";
createinputelement.classList.add = "input_element";
maincontainer.appendChild(createinputelement);

let addbutton = document.createElement("button");
addbutton.textContent = "add";
addbutton.id = "add_button";
addbutton.onclick = function () {
  addbutton();
};

console.log(addbutton);
addbutton.classList.add("add_button");
maincontainer.appendChild(addbutton);

let createtask = document.createElement("h1");
createtask.classList.add("create_task");
createtask.id = "create_task";
maincontainer.appendChild(createtask);

// let create array that contains objects

// let todolist = [
//   { text: "learn html", uniqueno: 1 },
//   { text: "learn csss", uniqueno: 2 },
//   { text: "learn java script", uniqueno: 3 },
//   { text: "learn react", uniqueno: 4 },
//   { text: "learn mango db ", uniqueno: 5 },
// ];
let svebutton = document.createElement("button");
svebutton.id = "svebutton";
svebutton.textContent = "save as";
svebutton.classList.add("save_button");
maincontainer.appendChild(svebutton);
let savebutton = document.getElementById(svebutton);
svebutton.onclick = function () {
  let somnething = JSON.stringify(todolist);
  localStorage.setItem("todolist", somnething);
};
function getsomething() {
  localStorageout = localStorage.getItem("todolist");
  parsedjamal = JSON.parse(localStorageout);
  if (parsedjamal === null) {
    return [];
  } else {
    return parsedjamal;
  }
}

let todolist = getsomething();

function strikingthecontent(controllthecheckbox, labelid) {
  let strikethecontentofthelement =
    document.getElementById(controllthecheckbox);
  let content = document.getElementById(labelid);
  console.log(strikethecontentofthelement.checked);
  if (strikethecontentofthelement.checked === true) {
    content.classList.add("striked");
    maincontainer.style.backgroundColor = "black";
  } else {
    content.classList.remove("striked");
    maincontainer.style.backgroundColor = "white";
  }
}
function deletethecontainer(todoid) {
  let smallcontainer = document.getElementById(todoid);

  maincontainer.removeChild(smallcontainer);
  console.log(todoid);
}

function appendtodo(todo) {
  let controllthecheckbox = "checkbox" + todo.uniqueno;
  let labelid = "label" + todo.uniqueno;
  let todoid = "todo" + todo.uniqueno;

  let smallcontainer = document.createElement("div");
  smallcontainer.id = todoid;
  smallcontainer.classList.add("samll_container");
  maincontainer.appendChild(smallcontainer);

  let checkboxelement = document.createElement("input");
  checkboxelement.type = "checkbox";
  checkboxelement.id = controllthecheckbox;
  checkboxelement.classList.add("check_-boxid");
  checkboxelement.onclick = function () {
    strikingthecontent(controllthecheckbox, labelid);
  };
  smallcontainer.appendChild(checkboxelement);

  let labelelement = document.createElement("label");
  labelelement.setAttribute("for", controllthecheckbox);
  labelelement.classList.add("label_element");
  labelelement.textContent = todo.text;
  labelelement.id = labelid;
  smallcontainer.appendChild(labelelement);

  let deletebutton = document.createElement("button");
  deletebutton.textContent = "delete";

  deletebutton.classList.add("delete_button");

  deletebutton.onclick = function () {
    deletethecontainer(todoid);
  };

  smallcontainer.appendChild(deletebutton);

  addbutton.onclick = function () {
    let mergingtheelement = todolist.length;
    mergingtheelement = todo + 1;

    let userinput = document.getElementById("input_element");

    if (userinput.value === "") {
      alert("hey! please enter only fronend skills");
      return;
    } else if (userinput.value >= -1) {
      alert("hey! dont enter NNumber");
      return;
    }
    let newtodo = {
      text: userinput.value,
      uniqueno: mergingtheelement,
    };
    todolist.push(newtodo);
    appendtodo(newtodo);
    userinput.value = "";
  };
}

for (todos of todolist) {
  appendtodo(todos);
}

// // appendtodo();
// // // appendtodo();>>>>>>>>>>>>>>>>>>>>> to crdate the append todo call back function
// //  as we know the small container shows only the text content of learn html so we create all tools like React and java script css mangodb Angular
// let person = {
//   name: "Balaji sirigineedi",
//   age: 24,
//   college: "swarnandhra college of engineering and tecxhnology",
// };
// localStorage.setItem("name", "balaji sirigineedi");
// localStorage.setItem("age", "24");
// localStorage.setItem(
//   "college",
//   "swarnandhra college of engineering and technology"
// );
// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let college = localStorage.getItem("college");
// console.log(name);
// console.log(age);
// console.log(college);

// let ocupation = localStorage.getItem("ocupation");
// console.log(ocupation);
// let svebutton = document.getElementById("savebutton");
// console.log(svebutton);
// let textContents = document.getElementById("text_content");
// svebutton.onclick = function () {
//   let userenterd = textContents.value;
//   localStorage.setItem("userenterd", userenterd);
// };
// let storedinputvalue = localStorage.getItem("userenterd");
// if (textContents.value === null) {
//   textContents.value = "";
// } else {
//   textContents.value = "hi ! enter a beerief description about you";
// }
// let textcontainer = document.getElementById("text_content");
// let savebutton = document.getElementById("savebutton");

// savebutton.onclick = function () {
//   let userinput = textcontainer.value;
//   localStorage.setItem("userinput", userinput);
// };
// let gqtherinformation = localStorage.getItem("userinput");
// if (textcontainer.value === null) {
//   textcontainer.value = "";
// } else {
//   textcontainer.value = gqtherinformation;
// }
// let profile = {
//   name: "ba;aji sirigineedi",
//   age: 24,
//   college: "swarnandhra college of engineering and technology",
// };
// // let stringifirdprofile = JSON.stringify(profile);
// // console.log(stringifirdprofile);

// // let objectify = JSON.parse(stringifirdprofile);
// // console.log(objectify);
// let stringifiedprofile = JSON.stringify(profile);
// localStorage.setItem("profiledetails ", stringifiedprofile);
// localstorageofout = localStorage.getItem("profiledetails");
// let parsedprofile = JSON.parse(stringifiedprofile);
// console.log(parsedprofile);

// wev are able to learn about the concepts of jSON types of objects that converts the objects into strings = jsono.stringify and that converts into strings are into objects by this process

// we consider a object
// let profile = {
//   name: "sirigineedi Balaji",
//   designation: "web developer",
//   college: "swarnandhra college of engineering and technology",
// };
// let stringiftheobject = JSON.stringify(profile);
// localStorage.setItem("profile Details", stringiftheobject);
// let convvertthegetitem = localStorage.getItem(stringiftheobject);
// let pardsedprofiile = JSON.parse(stringiftheobject);
// console.log(pardsedprofiile);
// let something = [23, 45, 67];
// let master = something.findIndex(function (each) {
//   if (eachitem === 67) {
//     return true;
//   } else {
//   }
//   return false;
// });
