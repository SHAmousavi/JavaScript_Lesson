function loadXMLDoc() {

    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "https://www.randomuser.me/api", true);
    xhttp.send();
  };
  loadXMLDoc();