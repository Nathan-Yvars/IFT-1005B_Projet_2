/*
 * Karl-Antoine Plouffe | 20218864
 * Nathan Yvars | 20249300
 */

"use strict";

const conversion = {
    cm : 100,
    km : 0.001,
    pied : 3.28084,
    pouce : 39.3701
};

function Convert(){
    const val = parseFloat(document.getElementById('valeur').value);
    const startunit = document.getElementById("startunit").value;
    const convertunit = document.getElementById("targetUnit").value;

    console.log(val);
    console.log(startunit);
    console.log(convertunit);

    if (isNaN(val) || val < 0){
        document.getElementById("tagResultat").innerHTML = "";
        document.getElementById("convertResult").style.fontSize = "4rem";
        document.getElementById("convertResult").style.lineHeight = "70px";
        document.getElementById("convertResult").textContent = 'Erreur';
    }
    else {
        const newval = val * conversion[convertunit];
        document.getElementById("tagResultat").textContent = "Résulat";
        document.getElementById("convertResult").style.fontSize = "4rem";
        document.getElementById("convertResult").style.lineHeight = "70px";
        document.getElementById("convertResult").textContent = parseFloat(newval.toFixed(4));

    }    
 };

document.getElementById("convertbutton").addEventListener("click", Convert);

