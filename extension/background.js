function inject(path, type) {
  if(type == "file") {
    chrome.tabs.insertCSS({file: path, runAt: "document_end"});
  } else {
    chrome.tabs.insertCSS({code: path, runAt: "document_end"});
  }
}

const darkBtn = document.getElementById("isDark")

let dark = true


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (dark){
    inject("./theme/black.css", "file");
  }

})