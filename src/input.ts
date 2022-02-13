let youtubeSocket: SocketLibSocket | undefined;
let container = $("<div class='flexrow'></div>")
let buttons = $("<div class='sound-controls playlist-controls flexrow'></div>")
let header = $("<footer title='Youtube Video ID' textContent='Youtube Video ID'>VID ID </footer>")
let input = $("<input id='vidIdInput' style='background: #fffff5cc'>");
let iconPlay = $("<i class='fas fa-play'></i>")

Hooks.on('renderPlaylistDirectory', (playlist: PlaylistDirectory) => {
    $(input).keyup(function (event) {
        if(event.key === 'Enter') {
            handleVideoToggle()
        }
    })
    
    $(iconPlay).click(function (event) {
        handleVideoToggle()
    })

    buttons.append(iconPlay)
    container.append(header)
    container.append(input)
    container.append(buttons)
    playlist.element.find(".directory-footer").append(container);
});

Hooks.once("socketlib.ready", () => {
    youtubeSocket = socketlib.registerModule("embed-youtube");
});

function handleVideoToggle() {
    let content = input.val() as string;
    if (iconPlay.hasClass("fa-play")) {
        youtubeSocket?.executeForEveryone("load-video", content)
    }
    if(iconPlay.hasClass("fa-stop")) {
        youtubeSocket?.executeForEveryone("stop-video", content)
    }
    iconPlay.toggleClass("fa-play fa-stop")
}