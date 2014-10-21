// Letsfix Chrome Extension
// 
// Share URL with crowd.
// Connect with other who are feeling what you're feeling at that exact moment.


var post = function(currentUrl){
  // TODO: Gmail OAuth connection
  var message = {to: 'problems@letsfix.net', subject: pageTitle, message: currentUrl};
  // gmailSend(message); //not finished
};

var gmailSend = function(content){


  // doesn't work

  return Gmail IMAP library;
};

var lfxURL = function(){
  success: function(){
    var currentUrl = document.URL;
    var pageTitle = document.title;
    post(currentUrl);
  },
  fail: console.log('Error posting AJAX');
});


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var action_url = lfxURL();
  chrome.tabs.update(tab.id, {url: action_url});
});
