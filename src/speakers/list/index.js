const ts = require("../../common/talk.service.js"); //TalkService
//import {findAllSpakers} from ".///";

class SpeakerList {

    render(idView) {
        let result = "";
        console.log(ts)
        ts.findAllSpeakers().then(speakers => {

            speakers.forEach(function(sp){result += `<li> <a href="#speakers-list?id=${sp.id}" >${sp.firstname} ${sp.lastname}</a> </li>`});
            console.log(result)
            document.getElementById(idView).innerHTML = `<ul> ${result} </ul>`;
            // $("#"+idView).innerHtml = result;
            //console.log($("#"+idView).innerHtml)
        },
        () => {throw "erreur lol"}) //reject
    }

}

module.exports.SpeakerList = new SpeakerList();