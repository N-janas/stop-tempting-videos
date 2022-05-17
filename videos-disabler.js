chrome.storage.sync.get('extensionEnabled', function(data){
    if(data.extensionEnabled){
        const observer = new MutationObserver((mutations, obs) => {
            const mainPageVideosContainer = document.querySelector("#contents");
        
            if (mainPageVideosContainer) {
                console.log("Videos disabled, it's for your own good");
                
                mainPageVideosContainer.style.display = 'none';
                obs.disconnect();
                return;
            }
          });
          
          observer.observe(document, {
            childList: true,
            subtree: true
          });
    }
});
