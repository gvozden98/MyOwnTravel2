function validateform(){  
    const maticnibroj1=document.formName.maticnibroj.value;
    const pasos = document.formName.pasos.value;
    const prevoz = document.formName.prevoz;
    const tipSmestaja = document.formName.tipSmestaja.value;

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
    if(pasos.length!=6){  
        alert("Broj pasosa mora da sadrzi 6 brojeva!");  
        return false;  
    }  
    for (let i = 0; i < 6; i++) {
        console.log(pasos[i]);
        if (isNaN(pasos[i])) {
            alert("Broj pasosa mora da sadrzi 6 brojeva!")
            return false;
        }
    }

    if(validateRadio (prevoz))
    {
        alert('Morate izabrati nacin prevoza');
        return false;
    }

    if (tipSmestaja==="1/2" || tipSmestaja === "1/3") {
        return true;

    }
    else {
        alert("Unesite tip smestaj kao 1/2 ili 1/3");
        return false;
    }

}  

function validateRadio (radios){
    for (i = 0; i < radios.length; ++i)
    {
        if (radios [i].checked) {
            return false;
        }
    }
    return true;
}  

