"use strict";
let youtubeSocket;
Hooks.on('changeSidebarTab', (playlist) => {
    var element = playlist.element[0];
    var header = document.createElement("h4");
    header.title = "Youtube Video ID";
    header.className = "playlist-header";
    var input = document.createElement("input");
    input.type = "text";
    input.name = "VideoId Here";
    input.className = "header-search directory directory-header input";
    input.addEventListener("keyup", (event) => { if (event.key === "Enter") {
        youtubeSocket === null || youtubeSocket === void 0 ? void 0 : youtubeSocket.executeForEveryone("play-video", input.value);
    } });
    input.setAttribute("style", 'background: #fffff5cc');
    element === null || element === void 0 ? void 0 : element.append(header);
    element === null || element === void 0 ? void 0 : element.append(input);
});
Hooks.once("socketlib.ready", () => {
    youtubeSocket = socketlib.registerModule("embed-youtube");
});
