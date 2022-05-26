chrome.storage.sync.get('extensionEnabled', function(data){
    if(data.extensionEnabled){
      const disabledVideosStyle = document.createElement('style'); 

      disabledVideosStyle.appendChild(
        document.createTextNode(
          '.style-scope ytd-rich-grid-renderer #contents { display: none; }'));

      document.getElementsByTagName("head")[0].appendChild(disabledVideosStyle);

      console.log("Videos are disabled. It's for your own good");
    }
});
