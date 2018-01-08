const ts = require("./common/talk.service.js"); //TalkService
const Layout = require("./layout/index.js");
//import {Layout} from "./layout/index.js";
//const SpeakerList = require("./speakers/list/index.js");
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

var router = () => {
    if (location.hash == '#speakers-list') {  
        spList.render("main-view");
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


