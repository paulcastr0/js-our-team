/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!)
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/


//Dichiaro Array membri del team
let ourMembers = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        picture : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        picture : "./img/wayne-barnett-founder-ceo.png"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        picture : "./img/wayne-barnett-founder-ceo.png"
    },
    {
        name : "Angela Lopez",
        role : "social Media Manager",
        picture : "./img/wayne-barnett-founder-ceo.png"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        picture : "./img/wayne-barnett-founder-ceo.png"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        picture : "./img/wayne-barnett-founder-ceo.png"
    }
]
console.log(ourMembers);

for (i = 0; i < ourMembers.length ; i++) {
    document.getElementById("container-cards").innerHTML += "<div class='flex-card'>" + "<img src =" +  ourMembers[i].picture +">"  +"<h4>" + ourMembers[i].name + "</h4>" + "<p>" + ourMembers[i].role + "</p>";




}
