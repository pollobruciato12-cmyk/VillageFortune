const premi = [

{
tipo:"Monete",
valore:1000
},

{
tipo:"Monete",
valore:5000
},

{
tipo:"Gemme",
valore:10
},

{
tipo:"Giri",
valore:5
},

{
tipo:"Monete",
valore:20000
},

{
tipo:"Gemme",
valore:50
}

];

const settoriRuota = [

{
tipo:"Monete",
valore:1000
},

{
tipo:"Gemme",
valore:10
},

{
tipo:"Monete",
valore:5000
},

{
tipo:"Giri",
valore:5
},

{
tipo:"Monete",
valore:20000
},

{
tipo:"Gemme",
valore:50
}

];

const gioco = {

    monete: 10000,

    gemme: 100,

    giri: 20,


    energiaMax: 50,

    ultimoAggiornamento: Date.now(),


livelloVillaggio: 1,

nomeVillaggio:"Villaggio Verde",

villaggiSbloccati:1,

villaggiCompletati:0,

bonusVillaggioRitirato:false,

villaggioAttuale:1,

costiVillaggi:[
100000,
500000,
1500000,
5000000
],

nomiVillaggi:[

"Villaggio Verde",

"Isola Misteriosa",

"Regno dei Ghiacci",

"Città d'Oro",

"Isola Vulcanica",

"Regno delle Ombre",

"Paradiso Tropicale",

"Impero Reale"

],

    stelle:0,


attacchi: 0,

vittorie: 0,

raid:0,

tesori:0,


// OBIETTIVI

obiettivi:{

costruzioni:0,

attacchiVinti:0,

villaggiCompletati:0

},

premiObiettivi:{

costruzioni:false,

attacchi:false,

villaggi:false

},
    
    scudi: 3,

difeseRiuscite: 0,


    bonusGiornaliero: "",



edifici:[

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

]

};