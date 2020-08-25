function inject(path, type) {
  if(type == "file") {
    chrome.tabs.insertCSS({file: path, runAt: "document_end"});
  } else {
    chrome.tabs.insertCSS({code: path, runAt: "document_end"});
  }
}
let dark = false

let darkbtn = $("input[type='checkbox']")
darkbtn.click(() => {
  if (dark) {
    dark = false
    $("#isDark").text = "Off"
  }
  else if (!dark) {
    dark = true
    $("#isDark").text = "On"
  }
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (dark){
    inject("./theme/black.css", "file");
  }

})