chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "Action") {
        alert(document.getElementsByClassName("PlainText")[0].textContent);
    }
});
