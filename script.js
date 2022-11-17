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
        picture : 123
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        picture : 123
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        picture : 123
    },
    {
        name : "Angela Lopez",
        role : "social Media Manager",
        picture : 123
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        picture : 123
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        picture : 123
    }
]
console.log(ourMembers);

for (i = 0; i < ourMembers.length ; i++) {
    document.getElementById("container-cards").innerHTML += "<div class='flex-card'>" +"<h4>" + ourMembers[i].name + "</h4>" + "<p>" + ourMembers[i].role + "</p>";




}
