// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

// MILESTONE 0
let ourteam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1
for (let i = 0; i < ourteam.length; i++) {
  console.log(ourteam[i]);
}
// MILESTONE 2
const container = document.querySelector(".containerphotos");
let colonna = document.createElement("div");

for (let i = 0; i < ourteam.length; i++) {
  let the_team = document.createElement("div");
  let descr = document.createElement("div");
  let photo = document.createElement("div");

  photo.innerHTML = `<img src="./img/${ourteam[i].image}">`;
  descr.innerHTML = `<span><strong>${ourteam[i].name}</strong></span> 
  <span>${ourteam[i].role}</span>`;

  the_team.classList.add("bg-body", "mb-4");
  descr.classList.add("d-flex", "flex-column", "text-center");

  container.append(the_team);
  the_team.append(descr, photo);
}
