const ts = require("../common/talk.service.js"); //TalkService
//import {findAllSpakers} from ".///";

class Speaker {

    render(idSpeaker, idView) {
        let result = "";
        console.log(ts)
        ts.findAllSpeakers().then(speakers => {

            let speaker = speakers.filter(sp => sp.id === idSpeaker)[0];


            //speakers.forEach(function(sp){result += `<li> <a href="#speakers-list/${sp.id}" >${sp.firstname} ${sp.lastname}</a> </li>`});
            console.log("aaa" + speaker)
            document.getElementById(idView).innerHTML = `${speaker}`;
            // $("#"+idView).innerHtml = result;
            //console.log($("#"+idView).innerHtml)
        },
        () => {throw "erreur lol"}) //reject
    }

}

module.exports.Speaker = new Speaker();