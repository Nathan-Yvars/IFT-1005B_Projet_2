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
    const convertunit = document.getElementById("convertunit").value;

    console.log(val);
    console.log(startunit);
    console.log(convertunit);

    if (isNaN(val) || val < 0){
        document.getElementById("convertresult").textContent = 'Erreur';
    }
    else {
        const newval = val * conversion[convertunit];
        document.getElementById("convertresult").textContent = newval;
    }    
 };

document.getElementById("convertbutton").addEventListener("click", Convert);

