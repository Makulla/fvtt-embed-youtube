let dialogHolder: { dialog?: Dialog } = {};

const playVideo = (videoId: string) => {

    dialogHolder.dialog = dialogHolder.dialog ?? new Dialog({
            title: 'Embed Youtube',
            content: '',
            default: '',
            buttons: {},
            close: () => dialogHolder.dialog = undefined
        },
        {
            width: 470,
            height: 300,
            resizable: true,
            minimizable: true
        });

    const content = '<iframe \
        width="450" \
        height="250" \
        allow="autoplay" \
        src="https://www.youtube.com/embed/' + videoId + '?&autoplay=1&loop=1&playlist=' + videoId + '" \
        frameborder="0" \
    ';

    dialogHolder.dialog.data.content = content;
    dialogHolder.dialog.render(true);
}

Hooks.once("socketlib.ready", () => {
    const socket = socketlib.registerModule("embed-youtube");
    socket.register("play-video", id => playVideo(id));
});