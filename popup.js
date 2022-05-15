const labelEnabled = 'Enabled';
const labelDisabled = 'Disabled';

const switchStateId = 'switchState';
const inputCheckboxId = 'checkbox';

function initialize(){
    const checkbox = document.getElementById(inputCheckboxId);
    checkbox.addEventListener('click', handleSwitchClick);
    
    chrome.storage.sync.get('extensionEnabled', function(data){
        setInfoLabelText(data.extensionEnabled);
        checkbox.checked = data.extensionEnabled;
    });
}

function handleSwitchClick(){
    setInfoLabelText(this.checked);
    saveExtensionSettings(this.checked);
}

function saveExtensionSettings(isEnabled){
    chrome.storage.sync.set({ extensionEnabled: isEnabled});
}

function setInfoLabelText(isEnabled){
    const infoLabel = document.getElementById(switchStateId);

    if (isEnabled) {
        infoLabel.innerHTML = labelEnabled;
    }
    else{
        infoLabel.innerHTML = labelDisabled;
    }
}

initialize();