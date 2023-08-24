// ============================================= Paragraph: class="serie-info" ============================================ //

// Récupérer tous les éléments <p> avec la classe ".serie-info" puis les stockez dans la variable paragraphsList.
// C'est une NodeList ou une collection d'éléments et pas seulement un seul élément <p> paragraph mais plusieurs.
let paragraphsList = document.querySelectorAll('.serie-info');

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Modifier le contenu HTML de chaque élément <p> de cette liste de paragraphe "paragraphsList" pour afficher le nombre
// de saisons et d'épisodes
paragraphsList.forEach(paragraph => {
    paragraph.innerHTML = `${numberOfSeasons} seasons <br> ${numberOfEpisodes} episodes per season`
});

// ============================================= Paragraph: id="triller-info" ======================================= //

let episode = {
    title: "Triller",
    duration: 3,
    hasBeenWatched: false,
};

// méthode 1 avec "bracket notation" ou méthode 2 avec "dot"
let propretyToAccess_title = "title"; // let episodeTitle = episode.title;
let propretyToAccess_duration = "duration";
let propretyToAccess_hasBeenWatched = "hasBeenWatched";

//Affecter à la balise <p> à l'id "#thriller-info" les valeurs de l'objet (dictionnaire) : "épisode"
document.querySelector('#thriller-info').innerText = `Episode: ${episode[propretyToAccess_title]}
Duration: ${episode[propretyToAccess_duration]} min
${episode[propretyToAccess_hasBeenWatched] ? 'Already watched' : 'Not yet watched'}`

// ======================================== Paragraph: id="episode" & POO =========================================== //

// Création d'une classe episode avec constructor (fonction qui crée une nouvelle instance grâce à "new")
class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

// Création des instances "newEpisodes" de la classe "episode" grâce à "new"
let firstEpisode = new Episode("The Original", 68, false);
let secondEpisode = new Episode("Chestnut", 60, false);
let thirdEpisode = new Episode("The Stray", 59, false);

/*Affecter à la balise <p> à l'id "#first-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

//Affecter à la balise <p> à l'id "#second-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Alerady watched' : 'Not yet watched'}`

//Affecter à la balise <p> à l'id "#third-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
 */

// ================================ Paragraph: id="triller-info" & Array of Objects ================================= //

// Créer un tableau qui stock tous les trois objets de la classe "episode"
let episodesArray = [firstEpisode, secondEpisode, thirdEpisode];

/*episodesArray.unshift(firstEpisode);
episodesArray.push(firstEpisode);
episodesArray.pop();*/

// Créer un nouvel élément <div> pour chaque épisode du tableau episodesArray et de l'ajouter à la page.
// Puis chaque <div> contiendra un titre ("WestWorld"), un paragraphe avec les informations sur la série et un autre
// avec les informations sur l'épisode.

// Sélectionner l'élément <body> de la page et le stocke dans la variable body.
const body = document.querySelector('body');

// La boucle "For" parcourt chaque épisode dans le tableau episodesArray.
// Cependant, il y a une petite erreur : la variable numberOfEpisodes n'est pas définie dans le code que vous avez partagé.
// Vous devriez probablement remplacer numberOfEpisodes par episodesArray.length pour que ça fonctionne correctement.
for (let i = 0; i < episodesArray.length; i++) {
    // Créer un nouvel élément <div> et l'affecter à l'élément <div> : "baliseDiv_Container"
    let baliseDiv_Container = document.createElement('div');

    // Ajouter la classe "series-frame" à l'élément "baliseDiv_Container"
    // (Cette classe est utilisée pour styler oet cibler ces éléments
    baliseDiv_Container.classList.add('series-frame');

    // Créer un nouvel élément <h2> : "baliseH2_SerieTitle"
    let baliseH2_SerieTitle = document.createElement('h2');

    // Définir le texte de l'élément <h2> : "baliseH2_SerieTitle" à "WestWorld"
    baliseH2_SerieTitle.innerText = 'WestWorld🤠';

    // Créer un nouvel élément <p> : "baliseParagraph_episodeInfo"
    let baliseParagraph_episodeInfo = document.createElement('p');

    // Définir le contenu de l'élément <p> : "baliseParagraph_episodeInfo" avec les informations de l'épisode
    // courant dans le tableau
    baliseParagraph_episodeInfo.innerText = `${episodesArray[i].title}
                              ${episodesArray[i].duration} min
                              ${episodesArray[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;

    // Ajouter l'élément <h2> : "baliseH2_SerieTitle" créé précédemment (avec le texte "WestWorld") au
    // <div> : baliseDiv_Container
    baliseDiv_Container.append(baliseH2_SerieTitle);

    // Ajouter chaque élément <p> de la liste "paragrapheList" (contenant les informations sur la série :
    // nombre de saisons et d'épisodes) au <div> : baliseDiv_Container
    paragraphsList.forEach(paragraph => {
        // cloneNode(true) permet de cloner l'élément et tous ses enfants avant de les ajouter. Cela n'affectera pas
        // les éléments <p> originaux pour pouvoir les ajouter tous à baliseDiv_Container.
        let clonedParagraph = paragraph.cloneNode(true);
        baliseDiv_Container.append(clonedParagraph);
    });

    //  Ajouter l'élément <p> : "baliseParagraph_episodeInfo" (contenant les informations de l'épisode) au
    //  <div> : baliseDiv_Container
    baliseDiv_Container.append(baliseParagraph_episodeInfo);

    //  Ajouter le <div> : "baliseDiv_Container" (qui contient maintenant un titre et un paragraphe) à l'élément <body>
    //  de la page
    body.append(baliseDiv_Container);
}

// ======================================== Input: id="age" & les conditions ======================================== //

// On pointe sur l'élément de message pour récupérer l'élément <h2> : "baliseH2_message"
let baliseInput_message = document.getElementById('message');

// On pointe sur l'élément de champ de saisie de l'age pour récupérer l'élément <input> : "baliseInput_age" avec
// son id="age"
let baliseInput_age = document.getElementById('age');

// On pointe sur l'élément de bouton pour récupérer l'élément <input> : "baliseInput_bouton" avec son id="bouton"
let baliseInput_bouton = document.getElementById('bouton');

// Fonction qui affiche le message d'autorisation d'accès ou non accès
function authoriseAccess(age){
    if(age >= 18){
        baliseInput_message.innerHTML = "Vous êtes autorisé à entrer🚪";
    }
    else{
        alert("Cette espace est interdit aux personnes mineurs🔞");
    }
}

// Fonction qui confirme si Majeur ou mineur
function confirme(){
    // On récupère la saisie de l'âge et on transforme le texte en nombre entier
    let age = parseInt(baliseInput_age.value);

    //Si la saisie n'est pas un nombre, on affiche un message d'erreur
    if (isNaN(age)){
        alert("Ceci n'est pas un nombre");
        baliseInput_age.value = "";
        return;
    }
    //On vide le champ de saisie
    baliseInput_age.value = "";

    // Appeler la fonction authoriseAccess(age)
    authoriseAccess(age);
}

// On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
baliseInput_bouton.addEventListener('click', confirme);


