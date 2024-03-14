const installedPageUrl = chrome.runtime.getURL(
  "src/pages/installed/index.html"
);

chrome.runtime.onInstalled.addListener((resason) => {
  if (resason.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: installedPageUrl });
  }
});
