function Call() {
    alert("Beni hangi fonksiyon çağırdı?");
}
function Goodbye() {
    alert("Gülegüle");
}
function Welcome() {
    alert("hosgeldin javascript");
}
function validateForm(){
    var valueInput,forms="";
    result=document.getElementById('forms');
    valueForm=document.getElementById('username').value;
    result.style.display="block";
    result.innerHTML="Kullanıcı adı boş bırakılamaz";
    return false;
}
var getJS = document.getElementById('externalJS');
        
        getJS.onclick = function () {
            var scriprtCreate = document.createElement("script");
            scriprtCreate.src = "message.js";
            scriprtCreate.type = "text/javascript";
            document.body.appendChild(scriprtCreate);
            
        }
        var window,newWindow;
        window=document.getElementById('result');
        function openWindow(){
            newWindow=window.open("","newWindow","width=600,height=400");
            newWindow.document.write("Bu pencere Javacript tarafından açıldı");
        }
        function resizeWindow(){
            newWindow.resizeTo(1000,800);
        }
        function moveWindow(){
            newWindow.moveTo(450,150);
        }
        function closeWindow(){
            newWindow.close();
        }
        
        var popup;
        popup=document.getElementById('popup');
        function boxes(){
            var message;
            if(confirm("Silmek istediğinize emin misiniz?")==true){  
                message="Seçilen öğe silindi";              
            }else{
                message="Öğeyi silmekten vazçetiniz";
            }
            popup.innerHTML=message;
        }
        var timing;
        timing=document.getElementById('timing');
        function process(){
            timing.innerHTML="setTimeout ile Javascript kullanımı"
        }