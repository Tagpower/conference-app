const ts = require("./common/talk.service.js"); //TalkService
const Layout = require("./layout/index.js");
//import {Layout} from "./layout/index.js";
//const SpeakerList = require("./speakers/list/index.js");
import {Speaker} from "./speakers/index.js"
import {SpeakerList} from "./speakers/list/index.js"
import {SessionList} from "./sessions/list/index.js"

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('Conférence App démarré !');

// ts.findAllSpeakers().then(
//                     speakers => speakers.forEach(sp => console.log(sp.firstname)),
//                     function() {throw "Erreur pendant le chargement"}
// );

let layout = Layout;
let spList = SpeakerList;
let sessList = SessionList;
let speaker = Speaker;

var router = () => {
    if (location.hash.startsWith('#speakers-list')) {
        let substrings = location.hash.split("=");
        let id = substrings[substrings.length-1]
        if (id && substrings.length > 1) {
            console.log(id)
            speaker.render(id, "main-view")
        } else {
            spList.render("main-view");
        }
    } else if (location.hash == '#sessions-list') {
        sessList.render("main-view");    
    } else if (location.hash == '#sessions-list') {
        sessList.render("main-view");    
    } else {
        layout.render();    
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});


