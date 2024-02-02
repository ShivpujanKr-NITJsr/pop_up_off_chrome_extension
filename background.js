chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
  });

chrome.action.onClicked.addListener(async (tab) => {
   
  
       
        await chrome.scripting.insertCSS({
          files: ['styles.css'],
          target: { tabId: tab.id }
        });
      
  
  });