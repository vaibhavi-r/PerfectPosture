chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    'bounds': {
      'width': 600,
      'height': 600
    }
  });
}
);

chrome.browserAction.setBadgeText({text: "yeah"});
