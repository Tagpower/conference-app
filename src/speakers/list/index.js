const ts = require("../../common/talk.service.js"); //TalkService
//import {findAllSpakers} from ".///";

class SpeakerList {

    render(idView) {
        console.log(idView + " blblblbl");
        let result = "";
        console.log(ts)
        ts.findAllSpeakers().then(speakers => {

            speakers.forEach(function(sp){result +=  `<li> ${sp.firstname} ${sp.lastname} </li>`});
            console.log(result)
            document.getElementById(idView).innerHTML = `<ul> ${result} </ul>`;
            // $("#"+idView).innerHtml = result;
            //console.log($("#"+idView).innerHtml)
        },
        () => {throw "erreur lol"}) //reject
    }

}

module.exports.SpeakerList = new SpeakerList();