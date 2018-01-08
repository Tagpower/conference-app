const URL_SPEAKERS = 'http://localhost:3000/speakers/'
const URL_SESSIONS = 'http://localhost:3000/sessions/'

function findAllSpeakers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const req = new XMLHttpRequest();
            req.open('GET', URL_SPEAKERS, true);
            req.onreadystatechange = (aEvt) => {
            if (req.readyState == 4) {
                if(req.status == 200)
                    resolve(JSON.parse(req.responseText)); // corps de la réponse
                else
                    reject("Erreur pendant le chargement de la page");
                }
            };

            req.send(null);
        }, 1000)
    })
}

function findAllSessions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const req = new XMLHttpRequest();
            req.open('GET', URL_SESSIONS, true);
            req.onreadystatechange = (aEvt) => {
            if (req.readyState == 4) {
                if(req.status == 200)
                    resolve(JSON.parse(req.responseText)); // corps de la réponse
                else
                    reject("Erreur pendant le chargement de la page");
                }
            };

            req.send(null);
        }, 1000)
    })
}

function findOneSpeaker(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const req = new XMLHttpRequest();
            req.open('GET', URL_SPEAKERS + "?id=" + id, true);
            req.onreadystatechange = (aEvt) => {
            if (req.readyState == 4) {
                if(req.status == 200)
                    resolve(JSON.parse(req.responseText)); // corps de la réponse
                else
                    reject("Erreur pendant le chargement de la page");
                }
            };

            req.send(null);
        }, 1000)
    })
}

exports.findAllSpeakers = findAllSpeakers;
exports.findAllSessions = findAllSessions;
exports.findOneSpeaker = findOneSpeaker;

