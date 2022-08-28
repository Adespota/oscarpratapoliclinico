
//Algoritmo di calcolo per l'Interferenza tempo P.G
  function interferenzatempo(){
       var t1 = document.getElementById("t1").value;
       var t2 = document.getElementById("t2").value;
       var t3 = document.getElementById("t3").value;
       var T = t3 - (parseFloat(t1) + parseFloat(t2))/2;
       document.getElementById("StroopP.GIT").value =(T.toFixed(2));
     }

//Algoritmo di calcolo per punteggio corretto P.C (Interferenza tempo)
  function PunteggiocorrettoIT(){
      var età = document.getElementById("età").value;
      var scolarità = document.getElementById("scolarità").value;
//Algoritmo di calcolo per scolarità 5 anni - Interferenza tempo
      if (scolarità  == 5 && età >= 20 && età <= 24 ) { 
          document.getElementById("StroopP.CIT").value =parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(12.25);
      } else if (scolarità  == 5 && età >= 25 && età <= 29){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(10);
      } else if (scolarità  == 5 && età >= 30 && età <= 34){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(7.50);
      } else if (scolarità  == 5 && età >= 35 && età <= 39 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(5.25);
      } else if (scolarità  == 5 && età >= 40 && età <= 44 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(2.75);
      } else if (scolarità  == 5 && età >= 45 && età <= 49 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(0.50);
      } else if (scolarità  == 5 && età >= 50 && età <= 54 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(2);
      } else if (scolarità  == 5 && età >= 55 && età <= 59 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(4.25);
      } else if (scolarità  == 5 && età >= 60 && età <= 64 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(6.50);
      } else if (scolarità  == 5 && età >= 65 && età <= 69){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(9);
      } else if (scolarità  == 5 && età >= 70 && età <= 74){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(11.25);
      } else if (scolarità  == 5 && età >= 75 && età <= 79){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(13.75);
      } else if (scolarità  == 5 && età >= 80 && età <= 84){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(16);
      } else if (scolarità  == 5 && età >= 85 && età <= 89){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(18.25);
      } else if (scolarità == 5 && età >= 90 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(20.75);
        //Algoritmo di calcolo per scolarità 8 anni- Interferenza tempo
      } else if (scolarità  == 8 && età >= 20 && età <= 24){ 
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(13.50);
      } else if (scolarità  == 8 && età >= 25 && età <= 29){ 
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(11.25);
      } else if (scolarità  == 8 && età >= 30 && età <= 34){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(8.75);
      } else if (scolarità  == 8 && età >= 35 && età <= 39){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(6.50);
      } else if (scolarità  == 8 && età >= 40 && età <= 44 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(4.25);
      } else if (scolarità  == 8 && età >= 45 && età <= 49 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(1.75);
      } else if (scolarità  == 8 && età >= 50 && età <= 54 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(0.50);
      } else if (scolarità  == 8 && età >= 55 && età <= 59 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(3);
      } else if (scolarità  == 8 && età >= 60 && età <= 64 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(5.25);
      } else if (scolarità  == 8 && età >= 65 && età <= 69 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(7.50);
      } else if (scolarità  == 8 && età >= 70 && età <= 74){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(10);
      } else if (scolarità  == 8 && età >= 75 && età <= 79){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(12.25);
      } else if (scolarità  == 8 && età >= 80 && età <= 84){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(14.75);
      } else if (scolarità  == 8 && età >= 85 && età <= 89){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(17);
      } else if (scolarità  == 8 && età >= 90 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(19.25);
        //Algoritmo di calcolo per scolarità 13 anni- Interferenza tempo
      } else if (scolarità  == 13 && età >= 20 && età <= 24){ 
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(15.75);
      } else if (scolarità  == 13 && età >= 25 && età <= 29){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(13.50);
      } else if (scolarità  == 13 && età >= 30 && età <= 34){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(11);
      } else if (scolarità  == 13 && età >= 35 && età <= 39 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(8.75);
      } else if (scolarità  == 13 && età >= 40 && età <= 44 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(6.25);
      } else if (scolarità  == 13 && età >= 45 && età <= 49 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(4);
      } else if (scolarità  == 13 && età >= 49 && età <= 54 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(1.75);
      } else if (scolarità  == 13 && età >= 55 && età <= 59 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(0.75);
      } else if (scolarità  == 13 && età >= 60 && età <= 64 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(3);
      } else if (scolarità  == 13 && età >= 65 && età <= 69){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(5.50);
      } else if (scolarità  == 13 && età >= 70 && età <= 74){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(7.75);
      } else if (scolarità  == 13 && età >= 75 && età <= 79){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(10);
      } else if (scolarità  == 13 && età >= 80 && età <= 84){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(12.50);
      } else if (scolarità  == 13 && età >= 85 && età <= 89){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(14.75);
      } else if (scolarità  == 13 && età >= 90 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(17.25);
        //Algoritmo di calcolo per scolarità 17 anni- Interferenza tempo
      } else if (scolarità  == 17 && età >= 20 && età <= 24){ 
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(17.50);
      } else if (scolarità  == 17 && età >= 20 && età <= 24){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(17.50);
      } else if (scolarità  == 17 && età >= 25 && età <= 29){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(15);
      } else if (scolarità  == 17 && età >= 30 && età <= 34){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(12.75);
      } else if (scolarità  == 17 && età >= 35 && età <= 39 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(10.50);
      } else if (scolarità  == 17 && età >= 40 && età <= 44 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(8);
      } else if (scolarità  == 17 && età >= 45 && età <= 49 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(5.75);
      } else if (scolarità  == 17 && età >= 49 && età <= 54 ){
        document.getElementById("StroopP.CIF").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(3.50);
      } else if (scolarità  == 17 && età >= 55 && età <= 59 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)+ parseFloat(1);
      } else if (scolarità  == 17 && età >= 60 && età <= 64 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(1.85);
      } else if (scolarità  == 17 && età >= 65 && età <= 69){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(3.75);
      } else if (scolarità  == 17 && età >= 70 && età <= 74){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(6);
      } else if (scolarità  == 17 && età >= 75 && età <= 79){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(8.25);
      } else if (scolarità  == 17 && età >= 80 && età <= 84){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(10.75);
      } else if (scolarità  == 17 && età >= 85 && età <= 89){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(13);
      } else if (scolarità  == 17 && età >= 90 ){
        document.getElementById("StroopP.CIT").value = parseFloat(document.getElementById("StroopP.GIT").value)- parseFloat(15.50);
      }
    }
    //Algoritmo per il calcolo del punteggio equivalente (Interferenza tempo)
  function punteggioequivalenteIT(){
     var A = 0;
     var B = 1;
     var C = 2;
     var D = 3;
     var E = 4;
if(document.getElementById("StroopP.CIT").value  >= 36.92){
    document.getElementById("StroopP.EIT").value = A;
}else if (document.getElementById("StroopP.CIT").value <= 36.92 && document.getElementById("StroopP.CIT").value >= 31.66){
    document.getElementById("StroopP.EIT").value = B;
}else if (document.getElementById("StroopP.CIT").value <= 31.65 && document.getElementById("StroopP.CIT").value >= 26.40){
   document.getElementById("StroopP.EIT").value = C;
}else if (document.getElementById("StroopP.CIT").value <= 26.39 && document.getElementById("StroopP.CIT").value >= 21.14){
   document.getElementById("StroopP.EIT").value = D;
}else if (document.getElementById("StroopP.CIT").value <= 21.13){
   document.getElementById("StroopP.EIT").value = E;
 }
}








