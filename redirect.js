// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  url = 'chrome://apps/';
  chrome.tabs.update({
    "url": url,
    "selected": true
  });
});
