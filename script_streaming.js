// Référencier la liste des conteneurs "paragraphsList" depuis les balises <p> avec la classe ".info"
let paragraphsList = document.querySelectorAll('.info');

// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12 ;

let episode = {
    title: "Triller",
    duration: 3,
    hasBeenWatched: false,
};

// méthode 1 avec "dot"
// let episodeTitle = episode.title;
// let episodeDuration = episode.duration;
// let episodeHasBeenWatched = episode.hasBeenWatched;

// méthode 2 avec "bracket notation"
let propretyToAccess_title = "title";
let propretyToAccess_duration = "duration";
let propretyToAccess_hasBeenWatched = "hasBeenWatched";

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

// ==========================================

// Remplacer le contenu HTML des <p> de chaque paragraph de "paragraphsList" par les valeurs suivantes :
// nombres de "saisons" et "épisodes"
paragraphsList.forEach(paragraph => {
    paragraph.innerHTML = `${numberOfSeasons} seasons <br> ${numberOfEpisodes} episodes per season`
});

//Affecter à la balise <p> à l'id "#episode-info" les valeurs de l'objet (dictionnaire) : "épisode"
document.querySelector('#thriller-info').innerText = `Episode: ${episode[propretyToAccess_title]}
Duration: ${episode[propretyToAccess_duration]} min
${episode[propretyToAccess_hasBeenWatched] ? 'Already watched' : 'Not yet watched'}`

//Affecter à la balise <p> à l'id "#first-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

//Affecter à la balise <p> à l'id "#second-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Alerady watched' : 'Not yet watched'}`

//Affecter à la balise <p> à l'id "#second-episode-info" les valeurs de l'instance 'objet (dictionnaire) : "épisode"
document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;