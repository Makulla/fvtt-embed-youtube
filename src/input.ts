let youtubeSocket: SocketLibSocket | undefined;
Hooks.on('renderPlaylistDirectory', (playlist: PlaylistDirectory) => {
    
    var element = playlist.element[0]
    
    var header = document.createElement("footer")
    header.title = "Youtube Video ID"
    header.textContent = "Youtube Video ID"
    header.className = "directory-footer"
    
    var input = document.createElement("input");
    input.type = "text";
    input.name = "VideoId Here";
    input.className = "header-search directory directory-header input"
    input.addEventListener("keyup", (event) => {if(event.key === "Enter") {youtubeSocket?.executeForEveryone("play-video", input.value)}})
    input.setAttribute("style", 'background: #fffff5cc');
    element?.append(header);
    element?.append(input);
});

Hooks.once("socketlib.ready", () => {
    youtubeSocket = socketlib.registerModule("embed-youtube");
});