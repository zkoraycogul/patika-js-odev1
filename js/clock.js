let myname = document.querySelector("#myName")
myname.innerHTML = prompt("İsim Giriniz : ")

let k = document.querySelector("#myClock")


let ar1 = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma" , "Cumartesi" , "Pazar"]



function saat() {
    let now1 = new Date();
    let csaat = now1.getHours();
    let cdak = now1.getMinutes();
    let csaniye= now1.getSeconds();
    let day = now1.getDay();
    // if (day == 1 ) {day = "Pazartesi"}
    // if (day == 4 ) {day = "Perşembe"}
    canlisaat = ((csaat<10) ? "0" : "") + csaat + ":" + ((cdak<10) ? "0" : "") + 
    cdak + ":" +((csaniye <10) ? "0" : "") + csaniye + "      " + ar1[day-1];    
    k.innerHTML = canlisaat;

    setTimeout("saat()",1000)   ; 
}
saat ()


