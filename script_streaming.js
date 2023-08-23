// création du container paragraph depuis la balise <p> avec l'id "#info"
let paragraph = document.querySelector('#info');

// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12 ;

let episode = {
    title: "The Original",
    duration: 68,
    hasBeenWatched: false,
};


// ==========================================

// Affecter au contenu du text de paragraph les valeurs suivantes : nombres de "saisons" et "épisodes"
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`

// Affecter à la balise <p> à l'id "#episode-info" les valeurs de l'objet (dictionnaire) : "épisode"
document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`