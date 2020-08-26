function inject(path, type) {
  if(type == "file") {
    chrome.tabs.insertCSS({file: path, runAt: "document_end"});
  } else {
    chrome.tabs.insertCSS({code: path, runAt: "document_end"});
  }
}

function loadDark() {
  const loadedDark = localStorage.getItem("dark");
  return loadedDark
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (loadDark() == "On"){
    inject("./theme/black.css", "file");
  }

})