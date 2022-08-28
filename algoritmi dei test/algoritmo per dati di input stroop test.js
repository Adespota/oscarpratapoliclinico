//Algoritmo per inserire dati di input default in stroop test IT
// ottiene l'elemento 'id'
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');


// associa l'evento click alla callback
t1.addEventListener('click', nomefunzionet1);
t2.addEventListener('click', nomefunzionet2);
t3.addEventListener('click', nomefunzionet3);


// definisce la funzione callback
function nomefunzionet1(event){
  if (document.getElementById('t1').value == ("")) 
      document.getElementById('t1').value = ("0.00")  
}

function nomefunzionet2(event){
  if ((document.getElementById('t1').value >= 0.59 && document.getElementById('t1').value <= 0.99)) {
    alert("Il valore t1 inserito non è corretto")
    document.getElementById('t1').value = ("0.00")
       } else if (document.getElementById('t1').value == ("")){
                  document.getElementById('t2').value = ("0.00") 
       } else if (document.getElementById('t1').value  == ("0.00")){
                  document.getElementById('t2').value = ("0.00")
       } else if (document.getElementById('t2').value  == (""))
                  document.getElementById('t2').value = ("0.00")                                     
}


function nomefunzionet3(event){
  if ((document.getElementById('t2').value >= 0.59 && document.getElementById('t2').value <= 0.99)) {
    alert("Il valore t2 inserito non è corretto")
    document.getElementById('t2').value = ("0.00")
       } else if (document.getElementById('t2').value == ("")){
                  document.getElementById('t3').value = ("0.00") 
       } else if (document.getElementById('t2').value  == ("0.00")){
                  document.getElementById('t3').value = ("0.00")
       } else if (document.getElementById('t3').value  == (""))
                  document.getElementById('t3').value = ("0.00")
                                             
}














































      



