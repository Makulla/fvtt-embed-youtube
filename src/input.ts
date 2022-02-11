let youtubeSocket: SocketLibSocket | undefined;
Hooks.on('changeSidebarTab', (playlist: PlaylistDirectory) => {
    var element = playlist.element[0]
    
    var header = document.createElement("h4")
    header.title = "Youtube Video ID"
    header.className = "playlist-header"
    
    var input = document.createElement("input");
    input.type = "text";
    input.name = "VideoId Here";
    input.className = "header-search directory directory-header input"
    input.addEventListener("keyup", (event) => {if(event.key === "Enter") {youtubeSocket?.executeForEveryone("play-video", input.value)}})
    element?.append(header);
    element?.append(input);

});

Hooks.once("socketlib.ready", () => {
    youtubeSocket = socketlib.registerModule("embed-youtube");
});