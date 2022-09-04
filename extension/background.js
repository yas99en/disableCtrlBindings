const addListener = () => {
    document.addEventListener('keydown', e => {
	    if (e.ctrlKey) {
		    e.preventDefault();
	    }
    });
};

chrome.action.onClicked.addListener(() => {
	chrome.tabs.query({
		active: true,
		currentWindow: true,
	}, ([tab]) => {
		chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true},
            func: addListener,
		});
		chrome.windows.create({
			tabId: tab.id,
			type: chrome.windows.CreateType.POPUP,
		});
	});
});
