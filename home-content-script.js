if (!document.location.href.includes("camera")) {
  const interval = setInterval(() => {
    const cameraLinks = Array.from(document.querySelectorAll("a"))
      .map((a) => a.href)
      .filter((a) => a.startsWith("https://home.nest.com/camera/"));

    if (cameraLinks.length > 0) {
      clearInterval(interval);
      const body = document.body;
      Array.from(body.children).forEach((elem) => elem.remove());
      const wrapper = document.createElement("div");
      wrapper.className = "wrapper";
      body.appendChild(wrapper);

      cameraLinks.forEach((link) => {
        const iframeWrapper1 = document.createElement("div");
        iframeWrapper1.className = "iFrameWrapperWrapper";
        wrapper.appendChild(iframeWrapper1);

        const iframeWrapper2 = document.createElement("div");
        iframeWrapper2.className = "iFrameWrapper";
        iframeWrapper1.appendChild(iframeWrapper2);

        const iframe = document.createElement("iframe");
        iframe.className = "cameraIFrame";
        iframe.src = link;
        iframeWrapper2.appendChild(iframe);
        const iframeInterval = setInterval(() => {
          if (iframe.contentDocument) {
            const video = iframe.contentDocument.querySelector("video");
            if (video) {
              video.style.postion = "fixed";
              const body = iframe.contentDocument.body;
              Array.from(body.children).forEach((elem) => elem.remove());
              body.appendChild(video);
              body.style.background = "black";
              clearInterval(iframeInterval);
            }
          }
        }, 1000);
      });

      body.append;
    }
  }, 1000);
}
