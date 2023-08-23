// création du container paragraph depuis la balise <p> avec l'id "#info"
let paragraph = document.querySelector('#info');

// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12 ;




// ==========================================

// Affecter au contenu du text de paragraph les valeurs suivantes : nombres de "saisons" et "épisodes"
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`

