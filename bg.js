
var audioElement = document.createElement('audio');
audioElement.setAttribute("preload", "auto");
audioElement.autobuffer = true;

var sound = document.createElement('source');
sound.type= 'audio/mpeg';
sound.src= chrome.extension.getURL('assets/superhot_call.mp3');
audioElement.appendChild(sound);

var playing = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!playing) {
    playing = true;
    chrome.tabs.executeScript(tab.id, {code: "showOverlay();"});
    audioElement.load;
    audioElement.play();
  } else {
    playing = false;
    chrome.tabs.executeScript(tab.id, {code: "hideOverlay();"});
    audioElement.pause();
    audioElement.currentTime = 0;
  }
});