function getListofTabs(tabs) {
  for (i=0; i < tabs.length; i++){
    console.log(tabs[i].title)
  }
}

var windowTabQuery = browser.tabs.query({currentWindow: true});
windowTabQuery.then(getListofTabs);
