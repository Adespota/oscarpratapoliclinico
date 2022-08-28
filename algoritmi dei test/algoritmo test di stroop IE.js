//Algoritmo di calcolo per l'Interferenza errori P.G
function interferenzaerrori(){
    var e1 = document.getElementById("e1").value;
    var e2 = document.getElementById("e2").value;
    var e3 = document.getElementById("e3").value;
    var E = e3 - (parseFloat(e1) + parseFloat(e2))/2;
    document.getElementById("StroopP.GIE").value = (E.toFixed(2));
  }

//Algoritmo di calcolo per punteggio corretto P.C (Interferenza tempo)
function PunteggiocorrettoIE(){
   var età = document.getElementById("età").value;
   var scolarità = document.getElementById("scolarità").value;
//Algoritmo di calcolo per scolarità 5 anni - Interferenza tempo
   if (scolarità  == 5 && età >= 20 && età <= 24 ) { 
       document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.25);
   } else if (scolarità  == 5 && età >= 25 && età <= 29){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.75);
   } else if (scolarità  == 5 && età >= 30 && età <= 34){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.50);
   } else if (scolarità  == 5 && età >= 35 && età <= 39 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.25);
   } else if (scolarità  == 5 && età >= 40 && età <= 44 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0);
   } else if (scolarità  == 5 && età >= 45 && età <= 49 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.25);
   } else if (scolarità  == 5 && età >= 50 && età <= 54 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.50);
   } else if (scolarità  == 5 && età >= 55 && età <= 59 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1);
   } else if (scolarità  == 5 && età >= 60 && età <= 64 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.25);
   } else if (scolarità  == 5 && età >= 65 && età <= 69){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.50);
   } else if (scolarità  == 5 && età >= 70 && età <= 74){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.75);
   } else if (scolarità  == 5 && età >= 75 && età <= 79){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2);
   } else if (scolarità  == 5 && età >= 80 && età <= 84){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2.25);
   } else if (scolarità  == 5 && età >= 85 && età <= 89){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2.75);
   } else if (scolarità == 5 && età >= 90 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(3);
     //Algoritmo di calcolo per scolarità 8 anni- Interferenza tempo
   } else if (scolarità  == 8 && età >= 20 && età <= 24){ 
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.50);
   } else if (scolarità  == 8 && età >= 25 && età <= 29){ 
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.25);
   } else if (scolarità  == 8 && età >= 30 && età <= 34){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1);
   } else if (scolarità  == 8 && età >= 35 && età <= 39){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.50);
   } else if (scolarità  == 8 && età >= 40 && età <= 44 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.25);
   } else if (scolarità  == 8 && età >= 45 && età <= 49 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0);
   } else if (scolarità  == 8 && età >= 50 && età <= 54 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.25);
   } else if (scolarità  == 8 && età >= 55 && età <= 59 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.50);
   } else if (scolarità  == 8 && età >= 60 && età <= 64 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.75);
   } else if (scolarità  == 8 && età >= 65 && età <= 69 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.25);
   } else if (scolarità  == 8 && età >= 70 && età <= 74){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.50);
   } else if (scolarità  == 8 && età >= 75 && età <= 79){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.75);
   } else if (scolarità  == 8 && età >= 80 && età <= 84){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2);
   } else if (scolarità  == 8 && età >= 85 && età <= 89){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2.25);
   } else if (scolarità  == 8 && età >= 90 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2.50);
     //Algoritmo di calcolo per scolarità 13 anni- Interferenza tempo
   } else if (scolarità  == 13 && età >= 20 && età <= 24){ 
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(2);
   } else if (scolarità  == 13 && età >= 25 && età <= 29){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.75);
   } else if (scolarità  == 13 && età >= 30 && età <= 34){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.50);
   } else if (scolarità  == 13 && età >= 35 && età <= 39 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.25);
   } else if (scolarità  == 13 && età >= 40 && età <= 44 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.75);
   } else if (scolarità  == 13 && età >= 45 && età <= 49 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.50);
   } else if (scolarità  == 13 && età >= 49 && età <= 54 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.25);
   } else if (scolarità  == 13 && età >= 55 && età <= 59 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0);
   } else if (scolarità  == 13 && età >= 60 && età <= 64 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.25);
   } else if (scolarità  == 13 && età >= 65 && età <= 69){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.50);
   } else if (scolarità  == 13 && età >= 70 && età <= 74){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.75);
   } else if (scolarità  == 13 && età >= 75 && età <= 79){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.25);
   } else if (scolarità  == 13 && età >= 80 && età <= 84){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.50);
   } else if (scolarità  == 13 && età >= 85 && età <= 89){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.75);
   } else if (scolarità  == 13 && età >= 90 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(2);
     //Algoritmo di calcolo per scolarità 17 anni- Interferenza tempo
   } else if (scolarità  == 17 && età >= 20 && età <= 24){ 
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(2.50);
   } else if (scolarità  == 17 && età >= 25 && età <= 29){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(2.25);
   } else if (scolarità  == 17 && età >= 30 && età <= 34){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(2);
   } else if (scolarità  == 17 && età >= 35 && età <= 39 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.50);
   } else if (scolarità  == 17 && età >= 40 && età <= 44 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1.25);
   } else if (scolarità  == 17 && età >= 45 && età <= 49 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(1);
   } else if (scolarità  == 17 && età >= 49 && età <= 54 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.75);
   } else if (scolarità  == 17 && età >= 55 && età <= 59 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.50);
   } else if (scolarità  == 17 && età >= 60 && età <= 64 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)+ parseFloat(0.25);
   } else if (scolarità  == 17 && età >= 65 && età <= 69){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.25);
   } else if (scolarità  == 17 && età >= 70 && età <= 74){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.50);
   } else if (scolarità  == 17 && età >= 75 && età <= 79){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(0.75);
   } else if (scolarità  == 17 && età >= 80 && età <= 84){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1);
   } else if (scolarità  == 17 && età >= 85 && età <= 89){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.25);
   } else if (scolarità  == 17 && età >= 90 ){
     document.getElementById("StroopP.CIE").value = parseFloat(document.getElementById("StroopP.GIE").value)- parseFloat(1.50);
   }
 }
 //Algoritmo per il calcolo del punteggio equivalente (Interferenza tempo)
function punteggioequivalenteIE(){
  var A = 0;
  var B = 1;
  var C = 2;
  var D = 3;
  var E = 4;
if(document.getElementById("StroopP.CIE").value  >= 4.24){
 document.getElementById("StroopP.EIE").value = A;
}else if (document.getElementById("StroopP.CIE").value <= 4.23 && document.getElementById("StroopP.CIE").value >= 2.83){
 document.getElementById("StroopP.EIE").value = B;
}else if (document.getElementById("StroopP.CIE").value <= 2.82 && document.getElementById("StroopP.CIE").value >= 1.42){
document.getElementById("StroopP.EIE").value = C;
}else if (document.getElementById("StroopP.CIE").value <= 1.41 && document.getElementById("StroopP.CIE").value >= 0.10){
document.getElementById("StroopP.EIE").value = D;
}else if (document.getElementById("StroopP.CIE").value <= 0){
document.getElementById("StroopP.EIE").value = E;
}
}











