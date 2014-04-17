var bannedURLs = [
	"facebook.com",
	"twitter.com",
	"reddit.com",
	"4chan.org"
]

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {   	
	for (var i = 0; i < bannedURLs.length; i++) {
		if (tab.url.indexOf(bannedURLs[i]) > -1) {
	    // ... show the page action.
	    chrome.pageAction.show(tabId);    
	    chrome.tabs.remove(tabId);
	  	}  
	}  	
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);



// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);