"use strict";
let youtubeSocket;
Hooks.on('renderPlaylistDirectory', (playlist) => {
    var element = playlist.element[0];
    var header = document.createElement("footer");
    header.title = "Youtube Video ID";
    header.textContent = "Youtube Video ID";
    header.className = "directory-footer";
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
