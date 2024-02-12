document.getElementById("removeTemu").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].url.match("https://.*.google.com/.*")) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "removeTemu",
        });
      } else {
        console.log("Error: No active tab found");
      }
    }
  });
});
