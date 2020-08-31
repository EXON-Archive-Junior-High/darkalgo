function inject(path, type) {
    if(type == "file") {
        chrome.tabs.insertCSS({file: path, runAt: "document_end"});
    } else {
        chrome.tabs.insertCSS({code: path, runAt: "document_end"});
    }
}

function load(item) {
    const loadedDark = localStorage.getItem(item);
    return loadedDark
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (load("dark") == "On"){
        inject("./theme/black.css", "file");
    }
    


})

