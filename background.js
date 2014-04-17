// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {   	
  	if (tab.url.indexOf("facebook.com") > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);    
    chrome.tabs.remove(tabId);
  	}  

};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
