const contentsClass = '.style-scope ytd-rich-grid-renderer';
const contentsId = '#contents';
const injectStyleContent = '{ display: none }';

chrome.storage.sync.get('extensionEnabled', function(data){
    if(data.extensionEnabled){
        const styleSheet = document.styleSheets[1];

        if (styleSheet) {
          styleSheet.insertRule(`${contentsClass} ${contentsId} ${injectStyleContent}`, 0);

          console.log("Videos are disabled. It's for your own good");          
        }
        else
        {
          console.log('StyleSheet not found');
        }
    }
});
