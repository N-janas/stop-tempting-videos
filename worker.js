const activeIconPath = 'images/icons/ico_a128.png';
const inactiveIconPath = 'images/icons/ico128.png';

function setIcon(isEnabled){
    if (isEnabled) {
        chrome.action.setIcon({path: activeIconPath});
    }
    else{
        chrome.action.setIcon({path: inactiveIconPath});
    }
}

function initializeIconBasedOnSettings(){
    chrome.storage.sync.get('extensionEnabled', function(data){
        setIcon(data.extensionEnabled);
    });
}

chrome.runtime.onInstalled.addListener(function() {
    initializeIconBasedOnSettings();
});

chrome.runtime.onStartup.addListener(function() {
    initializeIconBasedOnSettings();
});

chrome.storage.onChanged.addListener(function (changes, area){
    const {oldValue, newValue} = changes.extensionEnabled;
    setIcon(newValue);
});