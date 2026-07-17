let angolo = 0;


// CARICA SALVATAGGIO

let salvato = localStorage.getItem("villageFortune");


if(salvato){

    Object.assign(gioco, JSON.parse(salvato));

}
// CONTROLLO DATI SALVATAGGIO

if(typeof gioco.monete !== "number" || isNaN(gioco.monete)){

    gioco.monete = 10000;

}

gioco.monete = Number(gioco.monete);
gioco.gemme = Number(gioco.gemme);
gioco.giri = Number(gioco.giri);


if(typeof gioco.gemme !== "number" || isNaN(gioco.gemme)){

    gioco.gemme = 100;

}


if(typeof gioco.giri !== "number" || isNaN(gioco.giri)){

    gioco.giri = 20;

}


if(typeof gioco.scudi !== "number" || isNaN(gioco.scudi)){

    gioco.scudi = 3;

}
if(isNaN(gioco.monete)){

    gioco.monete = 10000;

}

if(isNaN(gioco.gemme)){

    gioco.gemme = 100;

}

if(isNaN(gioco.giri)){

    gioco.giri = 20;

}


// LISTA VILLAGGI

gioco.nomiVillaggi = [

"Villaggio Verde",
"Isola Misteriosa",
"Regno dei Ghiacci",
"Città d'Oro",
"Isola Vulcanica",
"Regno delle Ombre",
"Paradiso Tropicale",
"Impero Reale"

];



// SALVA GIOCO

function salvaGioco(){

if(isNaN(gioco.monete)){
    gioco.monete = 10000;
}

if(isNaN(gioco.gemme)){
    gioco.gemme = 100;
}

if(isNaN(gioco.giri)){
    gioco.giri = 20;
}


localStorage.setItem(
"villageFortune",
JSON.stringify(gioco)
);

}



// AGGIORNA EDIFICI

function aggiornaEdifici(){

let v = gioco.villaggioAttuale;


let stili = [

["🏠","🗼","🏪"],

["🛖","🌴","🏝️"],

["🧊","🏔️","❄️"],

["🏰","🏛️","💰"],

["🌋","🔥","🏭"],

["🌑","🖤","🏚️"],

["🏝️","🌊","🏖️"],

["👑","🏰","🏛️"],

["🏯","⛩️","🍜"],

["🚀","🛰️","🌌"],

["🏜️","🐪","🏺"],

["🏰","⚔️","🛡️"],

["🌲","🪵","🏕️"],

["💎","👑","🏛️"]

];


let indice = v - 1;


if(stili[indice]){

document.getElementById("casa").innerHTML =
stili[indice][0];

document.getElementById("torre").innerHTML =
stili[indice][1];

document.getElementById("negozio").innerHTML =
stili[indice][2];

}else{


let colori = [
"🏰",
"🏯",
"🌋",
"🚀",
"🏜️",
"🌲",
"💎",
"👑",
"🔥",
"⚡"
];


let scelta = colori[(v-1) % colori.length];


document.getElementById("casa").innerHTML =
scelta;


document.getElementById("torre").innerHTML =
"🏛️";


document.getElementById("negozio").innerHTML =
"✨";


}


}




// AGGIORNA SCHERMATA

function aggiornaSchermata(){


document.getElementById("nomeVillaggio").innerHTML =
gioco.nomeVillaggio;



document.getElementById("coini").innerHTML =
gioco.monete;


document.getElementById("gemme").innerHTML =
gioco.gemme;


document.getElementById("giri").innerHTML =
gioco.giri;


document.getElementById("livelloVillaggio").innerHTML =
gioco.livelloVillaggio;



document.getElementById("stelle").innerHTML =
gioco.stelle;



let totale = 0;


gioco.edifici.forEach(function(e){

totale += e.livello;

});



let massimo = gioco.edifici.length * 4;


let percentuale =
Math.floor((totale/massimo)*100);



document.getElementById("progressBar").style.width =
percentuale+"%";


document.getElementById("progressText").innerHTML =
percentuale+"% completato";



if(percentuale >=100){

document.getElementById("unlockVillage").style.display="inline-block";

}else{

document.getElementById("unlockVillage").style.display="none";

document.getElementById("infoCasa").innerHTML =
"Livello: " + gioco.edifici[0].livello;


document.getElementById("infoTorre").innerHTML =
"Livello: " + gioco.edifici[1].livello;


document.getElementById("infoNegozio").innerHTML =
"Livello: " + gioco.edifici[2].livello;

document.getElementById("infoCasa").innerHTML =
"Livello: " + gioco.edifici[0].livello;


let casa = gioco.edifici[0];

if(casa.costi[casa.livello]){

document.getElementById("costoCasa").innerHTML =
"🪙 Prossimo upgrade: " + casa.costi[casa.livello];

}else{

document.getElementById("costoCasa").innerHTML =
"🎉 Completata";

}



document.getElementById("infoTorre").innerHTML =
"Livello: " + gioco.edifici[1].livello;


let torre = gioco.edifici[1];

if(torre.costi[torre.livello]){

document.getElementById("costoTorre").innerHTML =
"🪙 Prossimo upgrade: " + torre.costi[torre.livello];

}else{

document.getElementById("costoTorre").innerHTML =
"🎉 Completata";

}



document.getElementById("infoNegozio").innerHTML =
"Livello: " + gioco.edifici[2].livello;


let negozio = gioco.edifici[2];

if(negozio.costi[negozio.livello]){

document.getElementById("costoNegozio").innerHTML =
"🪙 Prossimo upgrade: " + negozio.costi[negozio.livello];

}else{

document.getElementById("costoNegozio").innerHTML =
"🎉 Completata";

}

}



aggiornaEdifici();


}
// RUOTA

document.getElementById("spinButton").onclick=function(){

if(gioco.giri<=0){

alert("Nessun giro disponibile");

return;

}


gioco.giri--;


// scegli premio ruota

let indicePremio =
Math.floor(Math.random()*settoriRuota.length);


let premio =
settoriRuota[indicePremio];


// rotazione

angolo += 1440 + (indicePremio * 60);


document.getElementById("wheelImage").style.transform =
"rotate("+angolo+"deg)";


// risultato

document.getElementById("result").innerHTML =
premio.tipo+" +"+premio.valore;



if(premio.tipo=="Monete"){

gioco.monete += premio.valore;

}


if(premio.tipo=="Gemme"){

gioco.gemme += premio.valore;

}


if(premio.tipo=="Giri"){

gioco.giri += premio.valore;

}


aggiornaSchermata();

salvaGioco();

};





// COSTRUISCI EDIFICIO


function costruisci(numero){


let edificio = gioco.edifici[numero];


let costo =
edificio.costi[edificio.livello];



if(costo === undefined){

alert("Edificio completato!");

return;

}



if(gioco.monete < costo){

alert("Monete insufficienti");

return;

}



gioco.monete -= costo;


edificio.livello++;


gioco.livelloVillaggio++;

gioco.stelle++;

gioco.obiettivi.costruzioni++;


aggiornaSchermata();

aggiornaObiettivi();

salvaGioco();


}





// RICARICA GIRI


function ricaricaGiri(){


if(!gioco.ultimoAggiornamento){

gioco.ultimoAggiornamento=Date.now();

}


let differenza =
Date.now()-gioco.ultimoAggiornamento;



let minuti =
Math.floor(differenza/60000);



if(minuti>0){


gioco.giri += minuti;



if(gioco.giri > gioco.energiaMax){

gioco.giri=gioco.energiaMax;

}



gioco.ultimoAggiornamento=Date.now();


salvaGioco();


}


}





// BONUS GIORNALIERO


document.getElementById("bonusButton").onclick=function(){


let oggi =
new Date().toDateString();



if(gioco.bonusGiornaliero==oggi){

alert("Bonus già ritirato oggi");

return;

}



let premio =
Math.floor(Math.random()*3);



if(premio==0){

gioco.monete+=10000;

bonusResult.innerHTML=
"🪙 +10000 monete";

}



if(premio==1){

gioco.gemme+=50;

bonusResult.innerHTML=
"💎 +50 gemme";

}



if(premio==2){

gioco.giri+=10;

bonusResult.innerHTML=
"🎰 +10 giri";

}



gioco.bonusGiornaliero=oggi;


aggiornaSchermata();

salvaGioco();


};





// ATTACCO


document.getElementById("attackButton").onclick=function(){


let guadagno =
Math.floor(Math.random()*5000)+1000;



gioco.monete += guadagno;



gioco.attacchi++;

gioco.vittorie++;

gioco.obiettivi.attacchiVinti++;



document.getElementById("attackResult").innerHTML=

"⚔️ Attacco riuscito! +"+guadagno+" 🪙";



aggiornaSchermata();

aggiornaObiettivi();

salvaGioco();


};
// SBLOCCO NUOVO VILLAGGIO


document.getElementById("unlockVillage").onclick=function(){


let totale = 0;


gioco.edifici.forEach(function(e){

totale += e.livello;

});



let massimo =
gioco.edifici.length * 4;


if(totale >= massimo && !gioco.bonusVillaggioRitirato){

gioco.villaggiCompletati++;

gioco.obiettivi.villaggiCompletati++;

console.log("VILLAGGI OBIETTIVO:", gioco.obiettivi.villaggiCompletati);

aggiornaObiettivi();

gioco.monete += 50000;

gioco.gemme += 100;

gioco.giri += 10;


gioco.bonusVillaggioRitirato = true;


alert(
"🎉 Villaggio completato!\n\n🪙 +50000 monete\n💎 +100 gemme\n🎰 +10 giri"
);

aggiornaObiettivi();

salvaGioco();

}

if(totale < massimo){

alert("Completa prima il villaggio!");

return;

}



let costo =
gioco.costiVillaggi[gioco.villaggioAttuale];



if(gioco.monete < costo){

alert("Monete insufficienti");

return;

}



gioco.monete -= costo;



gioco.villaggioAttuale++;



if(gioco.nomiVillaggi[gioco.villaggioAttuale-1]){

    gioco.nomeVillaggio =
    gioco.nomiVillaggi[gioco.villaggioAttuale-1];

}else{

    gioco.nomeVillaggio =
    "Villaggio " + gioco.villaggioAttuale;

}



gioco.livelloVillaggio=1;

gioco.stelle=0;



gioco.edifici=[


{
nome:"Casa",
livello:0,
costi:[5000,15000,40000,100000]
},


{
nome:"Torre",
livello:0,
costi:[10000,30000,80000,200000]
},


{
nome:"Negozio",
livello:0,
costi:[15000,50000,120000,300000]
}


];

// AGGIORNA VILLAGGI E OBIETTIVI

gioco.villaggiSbloccati = gioco.villaggioAttuale;


if(!gioco.obiettivi){

gioco.obiettivi = {
costruzioni:0,
attacchiVinti:0,
villaggiCompletati:0
};

}


gioco.obiettivi.villaggiCompletati = gioco.villaggioAttuale - 1;


aggiornaMappaVillaggi();

aggiornaObiettivi();



aggiornaSchermata();

salvaGioco();



};






// RAID


let raidAttivo=false;



document.getElementById("findRaid").onclick=function(){



let villaggi=[

"Isola Perduta",

"Valle Misteriosa",

"Regno di Pietra",

"Villaggio Selvaggio"

];



let scelto =
villaggi[Math.floor(Math.random()*villaggi.length)];



document.getElementById("raidEnemy").innerHTML =
scelto;



raidAttivo=true;


};





function scava(numero){


if(!raidAttivo){

alert("Prima cerca un villaggio");

return;

}



let premio =
Math.floor(Math.random()*4);



if(premio==0){

gioco.monete+=5000;

raidResult.innerHTML=
"💰 Tesoro trovato! +5000 monete";

}



if(premio==1){

gioco.monete+=20000;

raidResult.innerHTML=
"💰 Grande tesoro! +20000 monete";

}



if(premio==2){

gioco.gemme+=10;

raidResult.innerHTML=
"💎 +10 gemme";

}



if(premio==3){

raidResult.innerHTML=
"❌ Buca vuota";

}



gioco.raid++;

gioco.tesori++;


aggiornaSchermata();

salvaGioco();


}





// TEST MONETE


document.getElementById("testCoins").onclick=function(){


gioco.monete+=1000000;


aggiornaSchermata();


salvaGioco();


};





// AVVIO


ricaricaGiri();


aggiornaSchermata();

function aggiornaMappaVillaggi(){

let lista = document.getElementById("listaVillaggi");

if(!lista){
    return;
}


lista.innerHTML = "";


let totaleVillaggi = gioco.villaggioAttuale + 10;


for(let indice = 0; indice < totaleVillaggi; indice++){

let nome = gioco.nomiVillaggi[indice];

if(!nome){

nome = "Villaggio " + (indice + 1);

}


let numero = indice + 1;


let div = document.createElement("div");


if(numero < gioco.villaggioAttuale){

div.innerHTML =
"✅ " + numero + " - " + nome;

}


else if(numero == gioco.villaggioAttuale){

div.innerHTML =
"🏠 " + numero + " - " + nome + " (Attuale)";

}


else{

div.innerHTML =
"🔒 " + numero + " - " + nome;

}


lista.appendChild(div);


}


}



aggiornaMappaVillaggi();

function aggiornaObiettivi(){

let costruzioni =
document.getElementById("obCostruzioni");

let attacchi =
document.getElementById("obAttacchi");

let villaggi =
document.getElementById("obVillaggi");


if(costruzioni){

costruzioni.innerHTML =
gioco.obiettivi.costruzioni;

}


if(attacchi){

attacchi.innerHTML =
gioco.obiettivi.attacchiVinti;

}


if(villaggi){

villaggi.innerHTML =
gioco.obiettivi.villaggiCompletati;

}

// PREMIO COSTRUZIONI

if(
gioco.obiettivi.costruzioni >= 20 &&
gioco.premiObiettivi.costruzioni == false
){

gioco.monete += 100000;
gioco.premiObiettivi.costruzioni = true;

aggiornaSchermata();


mostraPopup(
"🎉 Obiettivo completato!",
"🏗️ 20 costruzioni<br>🪙 +100000 monete"
);


salvaGioco();

}

// PREMIO ATTACCHI

if(
gioco.obiettivi.attacchiVinti >= 10 &&
gioco.premiObiettivi.attacchi == false
){

gioco.giri += 50;

gioco.premiObiettivi.attacchi = true;


alert(
"🎉 Obiettivo completato!\n\n⚔️ 10 attacchi vinti\n🎰 +50 giri"
);


salvaGioco();

}

// PREMIO VILLAGGI

if(
gioco.obiettivi.villaggiCompletati >= 3 &&
gioco.premiObiettivi.villaggi == false
){

gioco.gemme += 500;

gioco.premiObiettivi.villaggi = true;


alert(
"🎉 Obiettivo completato!\n\n🏰 3 villaggi completati\n💎 +500 gemme"
);


salvaGioco();

}

}


aggiornaObiettivi();

function mostraPopup(titolo, testo){

let popup = document.getElementById("popupPremio");

if(!popup){
    return;
}


document.getElementById("popupTitolo").innerHTML = titolo;

document.getElementById("popupTesto").innerHTML = testo;


popup.style.display = "flex";

}



document.getElementById("chiudiPopup").onclick=function(){

document.getElementById("popupPremio").style.display="none";

};