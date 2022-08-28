//Algoritmo per il calcolo del risultato finale
function punteggiorisultato(){
  var A = (document.getElementById("StroopP.EIT").value);
  var B = (document.getElementById("StroopP.EIE").value);
      //Algoritmo per A > B
  if (parseFloat(A) > parseFloat(B) && parseFloat(A) == (0)){
      (document.getElementById("StroopP.RIT").value) = "Deficit"
  }else if( parseFloat(A) > parseFloat(B) && parseFloat(A) == (1)){
       (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if (parseFloat(A) > parseFloat(B) && parseFloat(A) == (2)){
       (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if(parseFloat(A) > parseFloat(B) && parseFloat(A) == (3)){
    (document.getElementById("StroopP.RIT").value) = "Nella norma"
  }else if(parseFloat(A) > parseFloat(B) && parseFloat(A) == (4)){
    (document.getElementById("StroopP.RIT").value) = "Nella norma"
  }    //Algoritmo per A < B
  else if (parseFloat(A) < parseFloat(B) && parseFloat(B) == (0) ) {
    (document.getElementById("StroopP.RIT").value) = "Deficit"
  }else if( parseFloat(A) < parseFloat(B) && parseFloat(B) == (1)){
     (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if (parseFloat(A) < parseFloat(B) && parseFloat(B) == (2)){
     (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if(parseFloat(A) < parseFloat(B) && parseFloat(B) == (3)){
     (document.getElementById("StroopP.RIT").value) = "Nella norma"
  }else if(parseFloat(A) < parseFloat(B) && parseFloat(B) == (4)){
     (document.getElementById("StroopP.RIT").value) = "Nella norma"
   } //Algoritmo per A == B
   else if((parseFloat(A) && parseFloat(B)) == (0)){
    (document.getElementById("StroopP.RIT").value) = "Deficit"
  }else if((parseFloat(A) && parseFloat(B)) == (1)){
    (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if((parseFloat(A) && parseFloat(B)) == (2)){
    (document.getElementById("StroopP.RIT").value) = "Ai limiti di norma"
  }else if((parseFloat(A) && parseFloat(B)) == (3)){
    (document.getElementById("StroopP.RIT").value) = "Nella norma"
  }else if((parseFloat(A) && parseFloat(B)) == (4)){
    (document.getElementById("StroopP.RIT").value) = "Nella norma"
  }
   
}
   

















 
