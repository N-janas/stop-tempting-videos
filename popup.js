const labelEnabled = 'Enabled';
const labelDisabled = 'Disabled';

const switchStateId = 'switchState';
const inputCheckboxId = 'checkbox';

function initialize(){
    const checkbox = document.getElementById(inputCheckboxId);
    checkbox.addEventListener('click', handleSwitchClick);
    
    chrome.storage.sync.get('extensionEnabled', function(data){
        setInfoLabel(data.extensionEnabled);
        checkbox.checked = data.extensionEnabled;
    });
}

function handleSwitchClick(){
    setInfoLabel(this.checked);
    saveExtensionSettings(this.checked);
}

function saveExtensionSettings(isEnabled){
    chrome.storage.sync.set({ extensionEnabled: isEnabled});
}

function setInfoLabel(isEnabled){
    if (isEnabled) {
        document.getElementById(switchStateId).innerHTML = labelEnabled;
    }
    else{
        document.getElementById(switchStateId).innerHTML = labelDisabled;
    }
}

initialize();