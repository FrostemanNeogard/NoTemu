chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action !== "removeTemu") {
    return;
  }

  const sellerBlacklist = ["Temu"];

  const data = [
    {
      elementsClass: "mnr-c c3mZkd pla-unit",
      sellerClass: "zPEcBd VZqTOd",
    },
    {
      elementsClass: "KZmu8e",
      sellerClass: "E5ocAb",
    },
    {
      elementsClass: "sh-dgr__gr-auto sh-dgr__grid-result",
      sellerClass: "aULzUe IuHnof",
    },
  ];

  for (let i = 0; i < sellerBlacklist.length; i++) {
    const seller = sellerBlacklist[i];
    for (let y = 0; y < data.length; y++) {
      const item = data[y];
      removeAllElementsByClassAndContent(
        item.elementsClass,
        item.sellerClass,
        seller
      );
    }
  }
});

function removeAllElementsByClassAndContent(elementsClass, className, content) {
  const allElements = document.getElementsByClassName(elementsClass);

  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    const sellerName =
      currentElement.getElementsByClassName(className)[0].textContent;

    if (sellerName == content) {
      currentElement.remove();
    }
  }
}
