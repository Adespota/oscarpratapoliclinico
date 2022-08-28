var data = new Date();
              var gg, mm, aaaa;
          gg = data.getDate() + "/";
          mm = data.getMonth() + 1 + "/";
          aaaa = data.getFullYear();
          document.getElementById("data").value = (gg + mm + aaaa);