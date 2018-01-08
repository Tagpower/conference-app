const ts = require("../../common/talk.service.js"); //TalkService
//import {findAllSpakers} from ".///";

class SessionList {

    render(idView) {
        console.log(idView);
        let result = "";
        console.log(ts)
        ts.findAllSessions().then(sessions => {

            sessions.forEach(function(ses){result +=  `<li> ${ses.title} </li>`});
            console.log(result)
            document.getElementById(idView).innerHTML = `<ul> ${result} </ul>`;
            // $("#"+idView).innerHtml = result;
            //console.log($("#"+idView).innerHtml)
        },
        () => {throw "erreur lol"}) //reject
    }

}

module.exports.SessionList = new SessionList();