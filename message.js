function Call() {
  alert("Beni hangi fonksiyon çağırdı?");
}
function Goodbye() {
  alert("Gülegüle");
}
function Welcome() {
  alert("hosgeldin javascript");
}
function validateForm() {
  var valueInput,
    forms = "";
  result = document.getElementById("forms");
  valueForm = document.getElementById("username").value;
  result.style.display = "block";
  result.innerHTML = "Kullanıcı adı boş bırakılamaz";
  return false;
}
var getJS = document.getElementById("externalJS");

getJS.onclick = function () {
  var scriprtCreate = document.createElement("script");
  scriprtCreate.src = "message.js";
  scriprtCreate.type = "text/javascript";
  document.body.appendChild(scriprtCreate);
};
var window, newWindow;
window = document.getElementById("result");
function openWindow() {
  newWindow = window.open("", "newWindow", "width=600,height=400");
  newWindow.document.write("Bu pencere Javacript tarafından açıldı");
}
function resizeWindow() {
  newWindow.resizeTo(1000, 800);
}
function moveWindow() {
  newWindow.moveTo(450, 150);
}
function closeWindow() {
  newWindow.close();
}

//popuplar ile ilgili JS kodları

var popup;
popup = document.getElementById("popup");
function boxes() {
  var message;
  if (confirm("Silmek istediğinize emin misiniz?") == true) {
    message = "Seçilen öğe silindi";
  } else {
    message = "Öğeyi silmekten vazçetiniz";
  }
  popup.innerHTML = message;
}
var timing;
timing = document.getElementById("timing");
function process() {
  timing.innerHTML = "setTimeout ile Javascript kullanımı";
}
function person(first, last, age, color) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = color;
}

var people;

var myPerson = new person("Ahmet", "Yürekli", 25, "Brown");
var myPerson2 = new person(".....", "Yürekli", 20, "Brown");

function Person(first, last, age, color) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = color;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  this.changeName = function (name) {
    return (this.firstName = name);
  };
}
Person.prototype.hair = "yellow";
people = new Person("Ahmet", "Yürekli", 5, "Brown");
document.getElementById("people").innerHTML = people.hair;

// function getDOM(){
//     var findElement,i,message="",dom;
//     findElement=document.forms["frmDOM"];
//     for(i=0;i<findElement.length;i++){
//         message+=findElement[i].value;
//     }
//     result=document.querySelector("#dom");
//     result.innerHTML=message;
// }

// alert(document.body.innerHTML);

function changeText(arg) {
  arg.innerHTML = "Javascript ile canlı siteler";
}
//Cookieler ile ilgili JS kodları
function checkCookies() {
  var message = "";
  if (navigator.cookieEnabled == false) {
    message = "Sitenin düzgün çalışması için cokie ayarlarını aktif et";
  } else {
    message = "Cookie aktif";
  }
  alert(message);
}

window.onload = function () {
  var obj = document.querySelector("#cookie");
  obj.style.color = "red";
  obj.innerHTML = "Javascript Eğitim seti";
  obj.style.fontSize = "32px";
};

//onChange, onMouseOver, onMouseOut eventleri

function changeFunction() {
  var getInput = document.querySelector("#degisme");
  getInput.value = getInput.value.toUpperCase();
}

function mOver(obj) {
  obj.src = "resimler/eventler.PNG";
}
function mOut(obj) {
  obj.src = "resimler/eventler1.PNG";
}

//EventListener

// var Btnn = document.querySelector("#Btnn");
// var result = document.querySelector("#EventListener");
// Btnn.addEventListener("click", showDate);
// function showDate() {
//   document.querySelector("#EventListener").innerHTML =
//     "<span>" + Date() + "</span>";
// }
var Btnn = document.querySelector("#Btnn");
var result = document.querySelector("#EventListener");
Btnn.addEventListener("click", mClick);
Btnn.addEventListener("mouseover", mOver);
Btnn.addEventListener("mouseout", mOut);

function mClick() {
  document.querySelector("#EventListener").innerHTML = "Şu an bana tıkladın ";
}
function mOver() {
  document.querySelector("#EventListener").innerHTML = "Şu an üstüme geldin";
}
function mOut() {
  document.querySelector("#EventListener").innerHTML = "Üstümden çıkdın";
}
