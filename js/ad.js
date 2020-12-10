function openCity(evt, cityName) {
  // Deklarisane varijable
  var i, tabcontent, tablinks;
  // Uzmi sve elemente sa klasom "tabcontent" i sakri ih
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // uzmi sve elemente sa klasom tablinks i sskini im klasu "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //pokazi trenutnu karticu i dodaj "active" klasu dugmetu koje je otvorilo tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


