
//Algoritmo per controllare i dati anagrafici
    function controlloDatianagrafici() {
      var nome = document.forms["formmail"]["nome"].value;
      var cognome = document.forms["formmail"]["cognome"].value;
      var datadinascita = document.forms["formmail"]["tel"].value;
      var età = document.forms["formmail"]["msg"].value;
      var esaminatore = document.forms["formmail"]["nome"].value;
      var scolarità = document.forms["formmail"]["nome"].value;
      var richiesta = document.forms["formmail"]["nome"].value;
      var datadeltest = document.forms["formmail"]["nome"].value;
      var numeroditelefono = document.forms["formmail"]["nome"].value;
      var diagnosiallinvio = document.forms["formmail"]["nome"].value;

    
      if (nome == "" || cognome == "" || datadinascita == "" || età == "" || esaminatore == "" || scolarità == "" || richiesta == "" || datadeltest == "" || numeroditelefono == "" || diagnosiallinvio == "") {
        alert("I dati del paziente sono obbligatori");
        return false;
      } else{
        return true;
      }
    }


