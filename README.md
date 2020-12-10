# MyOwnTravel
Za domaci rad smo se opredelili da napravimo web aplikaciju za turističku agenicju pod nazivom MyOwnTravel. Ideja je da sajt bude jednostavan, responzivan, ne prepun infrmacija,ali svakako unikatan i lak za korišćenje. Glavne funkcionalnosti koje sajt nudi su primamvljiv odabir aranžmana,forma za odabir aranžmana,informacije o agenciji, galerija slika sa prethodnih putovanja i formu za angažovanje novih radnika.

## Početna

Početna stranica se sastoji od responzivnog menija koji se proteze na sve stranice, glavnog sadrzaja i footera sa linkovima ka društvenim mrežma i kontakt telefonom koji se takodje proteze na svim ostalim stranicama. Celokupan sadržaj na početnoj stranici je pozicioniram i responzivan pomoću flexboxa. **Meni** se sastoji od linkova ka drugim stranicama: početna,aktuelne destinacije,o nama, galerija i stranica pridruži nam se. Kada se viewport smanji do odredjene velicine meni se prtvori u takozvani ,,hamburger" meni. Klikom na ,,hamburger" meni prelazi u drop-down stil sto je omogućeno dodavanjem css klase .active listi sa linkovima putem javascripta. **Glavni sadrzaj stranice** se sastoji od slike,forme za newsletter i interaktivnih slika koje vode ka našoj ponudi. **Footer** je urađen efikasno, da ne bi u svakoj stranici dodavali kod, napravljeni su posebni html i css fajlovi koji su ubačeni u svaku stranicu putem jquerija. 

## Aktuelne destinacije

Stranica aktuelne destinacije se sastoji od naše ponude kao i forme za odabir odgovarajuće ponude. **Informacije o ponudama** su urađene u vidu tabova koji se aktiviraju pomoću javascripta dodavanjem i sklanjanjem klase active klikom na odgovarajući tab i menjanjem njegovog css display propertija u block ili none.
```javascript
function openCity(evt, kartica) {
  var i, tabcontent, tablinks;
  // Uzmi sve elemente sa klasom "tabcontent" i sakri ih
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // uzmi sve elemente sa klasom tablinks i skini im klasu "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //pokazi trenutnu karticu i dodaj "active" klasu dugmetu koje je otvorilo tab
  document.getElementById(kartica).style.display = "block";
  evt.currentTarget.className += " active";
}
```
**Forma za odabir ponude** je urađena tako da su neka polja samo obavezna dok je validacija nekih polja bila veoma bitna: polja za unos matičnog broja, pasoša, odabira destinacije i oblika transporta. Ta polja su od velike važnosti za naš način rada stoga moraju sadržati validne informacije. Validacija je urađena preko javascripta izbacivanjem alert popup prozora u slučaju da nešto nije uneto kao što je predviđeno.
Validacija matičnog broja i pasoša je urađena tako da unešen sadržaj mora da bude određene dužine i moraju da budu unešeni isključivo brojevi:
```javascript
    if(maticnibroj1.length!=8){  
        alert("Maticni broj mora da sadrzi 8 brojeva!");  
        return false;  
    }  
    for (let i = 0; i < 8; i++) {
        console.log(maticnibroj1[i]);
        if (isNaN(maticnibroj1[i])) {
            alert("Maticni broj mora da sadrzi samo brojeve!")
            return false;
        }
    }
```
Validacija radio dugmća je takva da se mora izabrati barem jedno od ponuđenih:
```javascript
function validateRadio (radios){
    for (i = 0; i < radios.length; ++i)
    {
        if (radios [i].checked) {
            return false;
        }
    }
    return true;
}  
```
Dok je validacija izbora tipa sobe veoma jednostavna i od korisnika očekuje unos kakav je i stavljen u placeholderu:
```javascript
if (tipSmestaja==="1/2" || tipSmestaja === "1/3") {
    return true;

    }
   else {
        alert("Unesite tip smeštaja kao 1/2 ili 1/3");
        return false;
    }
```

## O nama

Ova stranica je veoma jednostavna, sadrži samo nekoliko slika i osnovne informacije o nama.

## Galerija

**Galerija** je urađena pomoću jquery plugina pod nazivom [blueimp Gallery](https://github.com/blueimp/Gallery) i njihove lightbox galerije. Ova galerija sadrži slike sa naših prethodnih putovanja i avantura.

## Pridruži nam se!

Stranica **pridruži nam se** sadrži formu za angažovanje novih radnika. Klikom na **PRIJAVI SE** forma se spušta od vrha njenog containera ka dole. Ovo je omogućeno jquery animacijom, metodom .slideToggle().
```javascript
$(document).ready(function(){
    $('.spust').click(function(){
        $('form.forma').slideToggle();
    });
});
```
Sa obzirom da postoje neki problemi sa hostovanjem stranice preko github pages opcije, https://gvozden98.github.io/MyOwnTravel2/html/index.html ovaj link bi trebalo da radi.
