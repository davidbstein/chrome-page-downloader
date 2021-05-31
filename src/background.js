function injectedFunction() {
  console.log("hi");
  alert("foo");
  document.body.style.backgroundColor = "orange";
}

chrome.browserAction.onClicked.addListener((message, callback) => {
  alert("hi2");
  console.log("foobar");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: injectedFunction,
  });
});

chrome.runtime.onInstalled.addListener(function () {
  console.log("started");
});
