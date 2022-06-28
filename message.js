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

//Eventlistener kabarcıklanma ve yakalama olayları

var num1 = 7,
  num2 = 10;
var Btn1 = document.querySelector("#Btn1");
var result = document.querySelector("#result1");
Btn1.addEventListener("click", function () {
  process(num1, num2);
});

// function process(p1, p2) {
//   document.querySelector("#result1").innerHTML = p1 * p2;
// }

// window.addEventListener("resize", function () {
//   this.document.querySelector("#yakala").innerHTML = Math.random();
// });

var p1, p2, Div1, Div2;
p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
Div1 = document.querySelector("#Div1");
Div2 = document.querySelector("#Div2");

p1.addEventListener(
  "click",
  function () {
    alert("P1 paragrafına tıkladın");
  },
  false
);
p2.addEventListener(
  "click",
  function () {
    alert("P2 paragrafına tıkladın");
  },
  true
);
Div1.addEventListener(
  "click",
  function () {
    alert("Div1 paragrafına tıkladın");
  },
  false
);
Div2.addEventListener(
  "click",
  function () {
    alert("Div2 paragrafına tıkladın");
  },
  true
);

//removeEventListener

var remove = document.querySelector("#remove");
remove.addEventListener("mousemove", rastgele, false);
function rastgele() {
  document.querySelector("#paragraf").innerText = Math.random();
}
var btn01 = document.querySelector("#btn01");
btn01.onclick = function () {
  remove.removeEventListener("mousemove", rastgele);
};

//Göster gizle Js

function hideShow() {
  var getElement = document.querySelector("#open");
  if (getElement.style.display == "none") {
    getElement.style.display = "block";
  } else {
    getElement.style.display = "none";
  }
}

//Buton yakalama oyunu JS kodları

var counter = 0,
  btncatch,
  xpos,
  ypos;

btncatch = document.querySelector("#btncatch");
btncatch.onmouseover = function () {
  counter++;
  xpos = parseInt(Math.random() * 1000);
  ypos = parseInt(Math.random() * 700);
  btncatch.style.left = xpos + "px";
  btncatch.style.top = ypos + "px";
  btncatch.style.width = this.clientWidth + 10 + "px";
  btncatch.style.height = this.clientWidth + 10 + "px";
};
btncatch.onclick = function () {
  alert(counter + ". seferde yakaladın");
  btncatch.style.width = "110px";
  btncatch.style.height = "110px";
  counter = 0;
};
