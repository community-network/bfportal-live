'use strict';
import './contentScript.css';
import waitForElm from '../shared/waitForElement';

waitForElm(".action-buttons-wrapper").then((element) => {
    chrome.runtime.sendMessage({ type: "getCookie" }, function (response) {

        const shareItem = document.createElement("div");
        shareItem.textContent = "";
        shareItem.className = "share_button";
        shareItem.onclick = activateShare
        let shareIcon = document.createElement("i");
        shareIcon.className = "gg-share";

        shareItem.append(shareIcon);
        element.prepend(shareItem);
    });
})

let activateShare = async ()=>{
    console.log("Test");

    // // change onclick
    // shareItem.onclick = undefined

    const playgroundId = new URLSearchParams(location.search).get("playgroundId")
    
    const playground = await chrome.runtime.sendMessage({ type: "getPlayground", playgroundId: playgroundId });

    console.log(playground)

    // // set spinny icon
    //  document.querySelector('loader.blockliveloader').style.display = 'flex'

    // // save project in scratch
    // store.dispatch({type: "scratch-gui/project-state/START_MANUAL_UPDATING"})

    // await waitFor(()=>(!isNaN(parseFloat(location.pathname.split('/')[2]))))
    // scratchId = location.pathname.split('/')[2]

    // chrome.runtime.sendMessage({ type:'createShare',scratchId,title:store.getState().preview.projectInfo.title},async (response)=>{
    //     blId = response.id 

    //     // ACTIVATE BLOKLIVE!!!
    //     projectReplaceInitiated = true;
    //     pauseEventHandling = false
    //     liveMessage({meta:"myId",id:blId})
    //     activateBlocklive()
    //     // JOIN BLOCKLIVE SESSION!!!!
    //     liveMessage({meta:"joinSession"})
    //     readyToRecieveChanges = true
    //     await refreshShareModal()
    //     // stop spinny
    //     document.querySelector('loader.blockliveloader').style.display = 'none'

    //     // Set button onclick
    //     blockliveButton.onclick = blShareClick
    //     reloadOnlineUsers()

    //     blShareClick()
    // })
}

// for main page left of button
// waitForElm('.tab-header-wrapper').then((element) => {
//     const sp2 = document.querySelector("app-action-buttons-and-notifications");

//     const shareItem = document.createElement("div");
//     shareItem.textContent = "test";
//     shareItem.className = "share_button"
//     shareItem.onclick = async () => {}

//     element.insertBefore(shareItem, sp2);

//     console.log(element);
// })