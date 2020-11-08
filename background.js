chrome.webRequest.onHeadersReceived.addListener(
  (info) => {
    const headers = info.responseHeaders; // original headers
    for (let i = headers.length - 1; i >= 0; --i) {
      let header = headers[i].name.toLowerCase();
      if (header === "content-security-policy") {
        headers.splice(i, 1);
      }
    }
    // return modified headers
    return { responseHeaders: headers };
  },
  {
    urls: ["https://home.nest.com/*"], // match all pages
    types: ["sub_frame", "main_frame"], // for framing only
  },
  ["blocking", "responseHeaders"]
);

chrome.webRequest.onHeadersReceived.addListener(
  (info) => {
    const headers = info.responseHeaders; // original headers
    for (let i = headers.length - 1; i >= 0; --i) {
      let header = headers[i].name.toLowerCase();
      if (header === "x-frame-options" || header === "frame-options") {
        headers.splice(i, 1); // Remove the header
      }
    }
    // return modified headers
    return { responseHeaders: headers };
  },
  {
    urls: ["https://home.nest.com/*"], // match all pages
    types: ["sub_frame"], // for framing only
  },
  ["blocking", "responseHeaders"]
);
